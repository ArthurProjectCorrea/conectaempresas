<template>
  <div class="styleMainCategoryView">
    <div class="styleSearch">
      <SearchCustom />
    </div>
    <div class="styleCards">
      <CardCustom />
    </div>
  </div>
</template>

<script setup>
import CardCustom from '../components/CardCustom.vue'
import SearchCustom from '../components/SearchCustom.vue'

</script>

<style>
.styleMainCategoryView {
  @apply flex-col justify-center items-center p-2 gap-2
}

.styleSearch {
  @apply flex justify-center items-center mt-10 mb-10
}

.styleCards{
  @apply p-2 border border-red-500 
}
</style>
