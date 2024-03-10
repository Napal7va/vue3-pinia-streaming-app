<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
      <nav class="flex flex-row gap-3 bg-gray-50 text-gray-800 justify-between border-b border-gray-100">
        <div class="flex h-full">
          <RouterLink class="p-3" to="/">Home</RouterLink>
          <RouterLink class="p-3" to="/favorites">Favorites</RouterLink>
          <RouterLink class="p-3" to="/trash">Trash</RouterLink>
        </div>
      </nav>
  </header>

  <RouterView />
</template>

