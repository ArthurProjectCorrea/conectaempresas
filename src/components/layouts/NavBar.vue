<template>
    <header class="styleMain">
        <div class="styleLogo">
            <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="25" height="25" />
            <h1>ConectaEmpresas</h1>
        </div>

    <div class="styleNavigation">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { RouterLink } from 'vue-router'

</script>

<style scoped>
.styleMain {
    @apply flex justify-between items-center p-2
}
.styleLogo {
    @apply flex justify-center items-center gap-2  text-xl 
}
.styleNavigation {
    @apply flex
}
</style>
