<template>
    <header class="styleMainNavBar">
        <div class="styleLogo">
            <!-- <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="25" height="25" /> -->
            <font-awesome-icon :icon="['fas', 'cube']" />
            <h1 class="styleLogoH1">ConnectCorp</h1>
        </div>
        <div>
            <nav class="styleNavigation">
                <RouterLink to="/">Home</RouterLink>
                <RouterLink to="/category">Category</RouterLink>
            </nav>
        </div>
        <div class="styleButton">
            <button class="styleButtonIconLight">
                <font-awesome-icon :icon="['fas', 'magnifying-glass']" />
            </button>
            <button class="styleButtonLight">Login</button>
            <button class="styleButtonShadow">Register</button>
        </div>
    </header>
</template>

<script setup>
import { RouterLink } from 'vue-router'

</script>

<style scoped>
.styleMainNavBar {
    @apply flex justify-between items-center p-2
}

.styleLogo {
    @apply flex justify-center items-center gap-2 text-lg
}

.styleNavigation {
    @apply flex gap-2 font-semibold
}

.styleLogoH1 {
    @apply font-abel font-bold
}

.styleButton {
    @apply flex gap-2
}


</style>
