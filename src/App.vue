<template>
  <div class="A4938271">
    <NavBar />
    <RouterView />
  </div>
</template>

<script setup>
import { RouterView } from 'vue-router'
import NavBar from './components/layouts/NavBar.vue'
</script>

<style scoped>
.A4938271 {
  @apply flex-col h-full w-full
}
</style>
