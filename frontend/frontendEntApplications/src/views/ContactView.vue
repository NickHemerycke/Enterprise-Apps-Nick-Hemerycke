<script setup>
import { reactive, ref } from 'vue'

const form = reactive({
  name: '',
  email: '',
  message: '',
})

const errors = reactive({})
const submitted = ref(false)
const submitError = ref('')

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function validate() {
  Object.keys(errors).forEach((key) => delete errors[key])
  submitError.value = ''

  if (!form.name.trim()) errors.name = 'Naam is verplicht.'
  if (!form.message.trim()) errors.message = 'Bericht is verplicht.'

  if (!form.email.trim()) {
    errors.email = 'E-mailadres is verplicht.'
  } else if (!emailPattern.test(form.email.trim())) {
    errors.email = 'Vul een geldig e-mailadres in.'
  }

  return Object.keys(errors).length === 0
}

async function onSubmit() {
  if (!validate()) return

  try {
    const response = await fetch('http://localhost:8080/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: form.email,
        message: form.message,
        name: form.name,
      }),
    })

    if (!response.ok) {
      const message = await response.text()
      throw new Error(message || 'Kon bericht niet verzenden.')
    }

    submitted.value = true
    form.name = ''
    form.email = ''
    form.message = ''
  } catch (error) {
    console.error(error)
    submitError.value = 'Kon bericht niet verzenden. Probeer het later opnieuw.'
  }
}
</script>

<template>
  <section class="mx-auto max-w-2xl px-4 py-10">
    <h1 class="mb-6 text-3xl font-semibold text-gray-900">Contact</h1>

    <p v-if="submitted" class="mb-4 rounded-md bg-green-50 px-4 py-3 text-green-700">
      Je bericht werd verzonden. Bedankt!
    </p>

    <p v-if="submitError" class="mb-4 rounded-md bg-red-50 px-4 py-3 text-red-700">
      {{ submitError }}
    </p>

    <form class="flex flex-col gap-4" novalidate @submit.prevent="onSubmit">
      <div>
        <label for="name" class="mb-1 block text-sm font-medium text-gray-700">Naam</label>
        <input
          id="name"
          v-model="form.name"
          type="text"
          class="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-purple-500 focus:outline-none"
        />
        <p v-if="errors.name" class="mt-1 text-sm text-red-600">{{ errors.name }}</p>
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
        <label for="message" class="mb-1 block text-sm font-medium text-gray-700">Bericht</label>
        <textarea
          id="message"
          v-model="form.message"
          rows="5"
          class="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-purple-500 focus:outline-none"
        ></textarea>
        <p v-if="errors.message" class="mt-1 text-sm text-red-600">{{ errors.message }}</p>
      </div>

      <button
        type="submit"
        class="mt-2 self-start rounded-md bg-purple-600 px-4 py-2 font-medium text-white hover:bg-purple-700"
      >
        Versturen
      </button>
    </form>
  </section>
</template>
