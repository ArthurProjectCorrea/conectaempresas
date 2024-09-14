<template>
  <div>
    <!-- Formulário de Categorias -->
    <h2>Criar Categoria</h2>
    <form @submit.prevent="handleCreateCategory">
      <div>
        <label for="categoryName">Nome da Categoria:</label>
        <input v-model="categoryName" type="text" id="categoryName" required />
      </div>
      <button type="submit">Criar Categoria</button>
    </form>

    <!-- Formulário de Empresas -->
    <h2>Criar Empresa</h2>
    <form @submit.prevent="handleCreateCompany">
      <div>
        <label for="companyName">Nome da Empresa:</label>
        <input v-model="companyName" type="text" id="companyName" required />
      </div>
      <div>
        <label for="companyDescription">Descrição:</label>
        <input v-model="companyDescription" type="text" id="companyDescription" required />
      </div>
      <button type="submit">Criar Empresa</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';

const categoryName = ref('');
const companyName = ref('');
const companyDescription = ref('');

const handleCreateCategory = async () => {
  try {
    await axios.post('http://localhost:3000/api/categorias', { name: categoryName.value });
    categoryName.value = ''; // Limpar o campo após o envio
    alert('Categoria criada com sucesso!');
  } catch (error) {
    console.error('Erro ao criar categoria:', error);
    alert('Erro ao criar categoria.');
  }
};

const handleCreateCompany = async () => {
  try {
    await axios.post('http://localhost:3000/api/empresas', { name: companyName.value, description: companyDescription.value });
    companyName.value = ''; // Limpar o campo após o envio
    companyDescription.value = ''; // Limpar o campo após o envio
    alert('Empresa criada com sucesso!');
  } catch (error) {
    console.error('Erro ao criar empresa:', error);
    alert('Erro ao criar empresa.');
  }
};
</script>

<style scoped>
form {
  margin-bottom: 20px;
}
div {
  margin-bottom: 10px;
}
label {
  display: block;
  margin-bottom: 5px;
}
input {
  padding: 5px;
  width: 100%;
  max-width: 300px;
}
button {
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
button:hover {
  background-color: #0056b3;
}
</style>
