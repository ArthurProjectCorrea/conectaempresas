<template>
    <div class="styleMainSearchCustom">
        <font-awesome-icon :icon="['fas', 'magnifying-glass']" />
        <input type="text" placeholder="Search..." class="styleInput" />
        <button class="styleButtonIconLight">
            <font-awesome-icon :icon="['fas', 'sliders']" />
        </button>
    </div>
</template>

<script setup></script>

<style>
.styleMainSearchCustom {
    @apply flex justify-center items-center border border-black pl-4 w-2/5 gap-2 rounded-md text-gray-400
}

.styleInput {
    @apply  w-full outline-none text-black
}
</style>