<script setup>
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import { useEvents } from '../composables/useEvents'

const router = useRouter()
const { addEvent } = useEvents()

const form = reactive({
  title: '',
  organisation: '',
  date: '',
  location: '',
  email: '',
  description: '',
})

const errors = reactive({})

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function validate() {
  Object.keys(errors).forEach((key) => delete errors[key])

  if (!form.title.trim()) errors.title = 'Titel is verplicht.'
  if (!form.organisation.trim()) errors.organisation = 'Organisatie is verplicht.'
  if (!form.date.trim()) errors.date = 'Datum is verplicht.'
  if (!form.location.trim()) errors.location = 'Locatie is verplicht.'
  if (!form.description.trim()) errors.description = 'Omschrijving is verplicht.'

  if (!form.email.trim()) {
    errors.email = 'E-mailadres is verplicht.'
  } else if (!emailPattern.test(form.email.trim())) {
    errors.email = 'Vul een geldig e-mailadres in.'
  }

  return Object.keys(errors).length === 0
}

function onSubmit() {
  if (!validate()) return

  addEvent({ ...form })
  router.push({ name: 'index' })
}
</script>

<template>
  <section class="mx-auto max-w-2xl px-4 py-10">
    <h1 class="mb-6 text-3xl font-semibold text-gray-900">Nieuw evenement</h1>

    <form class="flex flex-col gap-4" novalidate @submit.prevent="onSubmit">
      <div>
        <label for="title" class="mb-1 block text-sm font-medium text-gray-700">Titel</label>
        <input
          id="title"
          v-model="form.title"
          type="text"
          class="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-purple-500 focus:outline-none"
        />
        <p v-if="errors.title" class="mt-1 text-sm text-red-600">{{ errors.title }}</p>
      </div>

      <div>
        <label for="organisation" class="mb-1 block text-sm font-medium text-gray-700">Organisatie</label>
        <input
          id="organisation"
          v-model="form.organisation"
          type="text"
          class="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-purple-500 focus:outline-none"
        />
        <p v-if="errors.organisation" class="mt-1 text-sm text-red-600">{{ errors.organisation }}</p>
      </div>

      <div>
        <label for="date" class="mb-1 block text-sm font-medium text-gray-700">Datum</label>
        <input
          id="date"
          v-model="form.date"
          type="date"
          class="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-purple-500 focus:outline-none"
        />
        <p v-if="errors.date" class="mt-1 text-sm text-red-600">{{ errors.date }}</p>
      </div>

      <div>
        <label for="location" class="mb-1 block text-sm font-medium text-gray-700">Locatie</label>
        <input
          id="location"
          v-model="form.location"
          type="text"
          class="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-purple-500 focus:outline-none"
        />
        <p v-if="errors.location" class="mt-1 text-sm text-red-600">{{ errors.location }}</p>
      </div>

      <div>
        <label for="email" class="mb-1 block text-sm font-medium text-gray-700">E-mailadres</label>
        <input
          id="email"
          v-model="form.email"
          type="email"
          class="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-purple-500 focus:outline-none"
        />
        <p v-if="errors.email" class="mt-1 text-sm text-red-600">{{ errors.email }}</p>
      </div>

      <div>
        <label for="description" class="mb-1 block text-sm font-medium text-gray-700">Omschrijving</label>
        <textarea
          id="description"
          v-model="form.description"
          rows="4"
          class="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-purple-500 focus:outline-none"
        ></textarea>
        <p v-if="errors.description" class="mt-1 text-sm text-red-600">{{ errors.description }}</p>
      </div>

      <button
        type="submit"
        class="mt-2 self-start rounded-md bg-purple-600 px-4 py-2 font-medium text-white hover:bg-purple-700"
      >
        Opslaan
      </button>
    </form>
  </section>
</template>
