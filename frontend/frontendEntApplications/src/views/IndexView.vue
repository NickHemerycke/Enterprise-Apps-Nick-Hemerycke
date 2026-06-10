<script setup>
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import { useEvents } from '../composables/useEvents'

const { getRecentEvents } = useEvents()
const recentEvents = computed(() => getRecentEvents(10))
</script>

<template>
  <section class="mx-auto max-w-4xl px-4 py-10">
    <h1 class="mb-6 text-3xl font-semibold text-gray-900">Laatste evenementen</h1>

    <table class="w-full border-collapse overflow-hidden rounded-lg shadow">
      <thead>
        <tr class="bg-gray-100 text-left text-sm uppercase tracking-wide text-gray-600">
          <th class="px-4 py-3">Titel</th>
          <th class="px-4 py-3">Organisatie</th>
          <th class="px-4 py-3"></th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="event in recentEvents"
          :key="event.id"
          class="border-t border-gray-200 odd:bg-white even:bg-gray-50"
        >
          <td class="px-4 py-3 font-medium text-gray-900">{{ event.title }}</td>
          <td class="px-4 py-3 text-gray-700">{{ event.organisation }}</td>
          <td class="px-4 py-3 text-right">
            <RouterLink
              :to="{ name: 'details', params: { id: event.id } }"
              class="text-sm font-medium text-purple-600 hover:underline"
            >
              Details
            </RouterLink>
          </td>
        </tr>
      </tbody>
    </table>

    <RouterLink
      :to="{ name: 'new' }"
      class="mt-6 inline-block rounded-md bg-purple-600 px-4 py-2 font-medium text-white hover:bg-purple-700"
    >
      Nieuw evenement toevoegen
    </RouterLink>
  </section>
</template>
