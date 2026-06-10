<script setup>
import { computed } from 'vue'
import { useRoute, RouterLink } from 'vue-router'
import { useEvents } from '../composables/useEvents'

const route = useRoute()
const { getEventById } = useEvents()

const event = computed(() => getEventById(route.params.id))
</script>

<template>
  <section class="mx-auto max-w-2xl px-4 py-10">
    <RouterLink :to="{ name: 'index' }" class="text-sm font-medium text-purple-600 hover:underline">
      &larr; Terug naar overzicht
    </RouterLink>

    <div v-if="event" class="mt-4">
      <h1 class="text-3xl font-semibold text-gray-900">{{ event.title }}</h1>
      <p class="mt-1 text-lg text-gray-600">{{ event.organisation }}</p>

      <dl class="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <dt class="text-sm font-medium uppercase tracking-wide text-gray-500">Datum</dt>
          <dd class="text-gray-900">{{ event.date }}</dd>
        </div>
        <div>
          <dt class="text-sm font-medium uppercase tracking-wide text-gray-500">Locatie</dt>
          <dd class="text-gray-900">{{ event.location }}</dd>
        </div>
        <div>
          <dt class="text-sm font-medium uppercase tracking-wide text-gray-500">Contact</dt>
          <dd class="text-gray-900">{{ event.email }}</dd>
        </div>
      </dl>

      <div class="mt-6">
        <h2 class="text-sm font-medium uppercase tracking-wide text-gray-500">Omschrijving</h2>
        <p class="mt-1 text-gray-700">{{ event.description }}</p>
      </div>
    </div>

    <p v-else class="mt-6 text-gray-700">Dit evenement werd niet gevonden.</p>
  </section>
</template>
