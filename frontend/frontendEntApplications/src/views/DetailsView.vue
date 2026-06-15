<script setup>
import { onMounted, ref } from 'vue'
import { useRoute, RouterLink } from 'vue-router'
import { useEvents } from '../composables/useEvents'

const route = useRoute()
const { fetchEventById } = useEvents()
const event = ref(null)
const error = ref(null)

async function loadEvent() {
  try {
    const id = route.params.id
    if (!id) {
      error.value = 'Ongeldig evenement'
      return
    }

    event.value = await fetchEventById(id)
    if (!event.value) {
      error.value = 'Dit evenement werd niet gevonden.'
    }
  } catch (err) {
    console.error(err)
    error.value = 'Kon evenement niet laden.'
  }
}

onMounted(loadEvent)
</script>

<template>
  <section class="mx-auto max-w-2xl px-4 py-10">
    <RouterLink :to="{ name: 'index' }" class="text-sm font-medium text-purple-600 hover:underline">
      &larr; Terug naar overzicht
    </RouterLink>

    <div v-if="event" class="mt-4">
      <h1 class="text-3xl font-semibold text-gray-900">{{ event.name }}</h1>
      <p class="mt-1 text-lg text-gray-600">{{ event.organizer }}</p>

      <dl class="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <dt class="text-sm font-medium uppercase tracking-wide text-gray-500">Datum</dt>
          <dd class="text-gray-900">{{ event.date?.substring(0, 10) }}</dd>
        </div>
        <div>
          <dt class="text-sm font-medium uppercase tracking-wide text-gray-500">Locatie</dt>
          <dd class="text-gray-900">{{ event.location?.name || 'Onbekend' }}</dd>
        </div>
        <div>
          <dt class="text-sm font-medium uppercase tracking-wide text-gray-500">Contact</dt>
          <dd class="text-gray-900">{{ event.contact }}</dd>
        </div>
      </dl>

      <div class="mt-6">
        <h2 class="text-sm font-medium uppercase tracking-wide text-gray-500">Omschrijving</h2>
        <p class="mt-1 text-gray-700">{{ event.description }}</p>
      </div>
    </div>

    <p v-else class="mt-6 text-gray-700">{{ error || 'Evenement wordt geladen...' }}</p>
  </section>
</template>
