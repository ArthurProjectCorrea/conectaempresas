<template>
    <header class="styleMain">
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
            <button class="styleButtonLight">Login</button>
            <button class="styleButtonShadow">Register</button>
        </div>
    </header>
</template>

<script setup>
import { RouterLink } from 'vue-router'

</script>

<style scoped>
.styleMain {
    @apply flex justify-between items-center p-2 border border-red-500
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

.styleButtonLight {
    @apply border py-2 px-6 rounded-sm hover:bg-black hover:text-white border-black bg-white text-black
}

.styleButtonShadow {
    @apply border py-2 px-6 rounded-sm hover:bg-white hover:text-black border-black bg-black text-white
}
</style>
