<script setup>
import { RouterLink } from 'vue-router'

const links = [
  { name: 'index', label: 'Evenementen' },
  { name: 'new', label: 'Nieuw evenement' },
  { name: 'about', label: 'Over ons' },
  { name: 'contact', label: 'Contact' },
]
</script>

<template>
  <nav class="border-b border-gray-200 bg-white">
    <div class="mx-auto flex max-w-4xl items-center gap-6 px-4 py-4">
      <RouterLink :to="{ name: 'index' }" class="text-lg font-semibold text-gray-900">
        Anderlecht NGO
      </RouterLink>
      <RouterLink
        v-for="link in links"
        :key="link.name"
        :to="{ name: link.name }"
        class="text-sm font-medium text-gray-600 hover:text-purple-600"
        active-class="text-purple-600"
      >
        {{ link.label }}
      </RouterLink>
    </div>
  </nav>
</template>
