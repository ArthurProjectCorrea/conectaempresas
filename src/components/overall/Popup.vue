<template>
  <div v-if="isOpen" class="V7591842" @click="closePopup">
    <div class="W6438291" @click.stop>
      <div class="X1927405">
        <h1 class="Y3051784">{{ namePopup }}</h1>
        <button @click="closePopup" class="styleButtonIconShadow" type="submit"><font-awesome-icon
            :icon="['fas', 'xmark']" /></button>
      </div>
        <slot></slot>
    </div>
  </div>
</template>

<script setup>
import { ref, defineProps, defineExpose } from 'vue'

const props = defineProps({
  namePopup: {
    type: String,
    default: 'Título do Popup'
  }
})

const isOpen = ref(false)

const openPopup = () => {
  isOpen.value = true
}

const closePopup = () => {
  isOpen.value = false
}

// Expõe os métodos para serem usados externamente
defineExpose({
  openPopup,
  closePopup
})
</script>

<style scoped>
.X1927405 {
  @apply border-b flex justify-between items-center p-4
}


.Y3051784 {
  @apply text-xl text-black font-semibold
}

.V7591842 {
  @apply fixed flex justify-center items-start bg-black/50 w-full h-full top-0 left-0 right-0 bottom-0 py-10 px-80
}

.W6438291 {
  @apply bg-white rounded-sm shadow-md w-full h-full overflow-auto
}
</style>
