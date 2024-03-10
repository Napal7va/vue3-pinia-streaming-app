
<template>
  <header>
      <nav class="flex flex-row gap-3 bg-gray-50 text-gray-800 justify-between border-b border-gray-100 md:px-10">
        <div class="flex h-full">
          <RouterLink class="p-3" active-class="border-b-8 border-pastelGreen-200" to="/">
            Home
          </RouterLink>
          <RouterLink class="p-3" active-class="border-b-8 border-pastelGreen-200" to="/favorites">
            Favorites
          </RouterLink>
          <RouterLink class="p-3" active-class="border-b-8 border-pastelGreen-200" to="/trash">
            Trash
          </RouterLink>
        </div>
          <div class="justify-self-end flex gap-4 items-center justify-center">
              <icon-trash class="cursor-pointer" />
              <icon-upload class="cursor-pointer"/>
          </div>
      </nav>
  </header>

  <RouterView />
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import IconTrash from './components/icons/IconTrash.vue';
import IconUpload from './components/icons/IconUpload.vue';

</script>