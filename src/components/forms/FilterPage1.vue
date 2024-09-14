<template>
    <div>
      <h2>Filtro 1</h2>
      <!-- Formulário de filtros para a página 1 -->
      <form>
        <label>
          Opção 1:
          <input type="text" v-model="filter1" />
        </label>
        <!-- Adicione mais campos de filtro conforme necessário -->
      </form>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const filter1 = ref('');
  // Defina outros filtros necessários
  </script>
  