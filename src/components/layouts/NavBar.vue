<template>
    <header class="B5623947">
        <div class="C7819023">
            <!-- <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="25" height="25" /> -->
            <font-awesome-icon :icon="['fas', 'cube']" />
            <h1 class="D6742518">ConnectCorp</h1>
        </div>
        <div>
            <nav class="E8923417">
                <RouterLink active-class="G1847592" to="/">Home</RouterLink>
                <RouterLink active-class="G1847592" to="/enterprise">Empresas</RouterLink>
            </nav>
        </div>
        <div class="F9034286">
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
.B5623947 {
    @apply flex justify-between items-center p-2
}

.C7819023 {
    @apply flex justify-center items-center gap-2 text-lg
}

.E8923417 {
    @apply flex gap-4 font-semibold
}

.D6742518 {
    @apply font-abel font-bold
}

.F9034286 {
    @apply flex gap-2
}

.G1847592 {
    @apply border-b-2 border-black
}
</style>
