<template>
  <div class="flex">
    <!-- Gerenciar Categorias -->
    <div>
      <h1>Gerenciar Categorias</h1>

      <!-- Formulário para adicionar nova categoria -->
      <form @submit.prevent="createCategory">
        <input v-model="newCategory" type="text" placeholder="Nome da Categoria" />
        <button type="submit">Adicionar Categoria</button>
      </form>

      <!-- Tabela de categorias -->
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Criado Em</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="category in categories" :key="category._id">
            <td>{{ category._id }}</td>
            <td>{{ category.name }}</td>
            <td>{{ formatDate(category.createdAt) }}</td>
            <td>
              <button @click="deleteCategory(category._id)">Excluir</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Gerenciar Empresas -->
    <div>
      <h1>Gerenciar Empresas</h1>

      <!-- Formulário para adicionar nova empresa -->
      <form @submit.prevent="createCompany">
        <div>
          <label for="name">Nome da Empresa:</label>
          <input v-model="newCompany.name" id="name" type="text" placeholder="Nome da Empresa" />
        </div>

        <div>
          <label for="category">Categoria:</label>
          <select v-model="newCompany.categories_id" id="category">
            <option v-for="category in categories" :key="category._id" :value="category._id">
              {{ category.name }}
            </option>
          </select>
        </div>

        <div>
          <label for="description">Descrição:</label>
          <textarea v-model="newCompany.description" id="description" placeholder="Descrição da Empresa"></textarea>
        </div>

        <button type="submit">Adicionar Empresa</button>
      </form>

      <!-- Tabela de empresas -->
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Categoria</th>
            <th>Descrição</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="company in companies" :key="company._id">
            <td>{{ company._id }}</td>
            <td>{{ company.name }}</td>
            <td>{{ company.categories_id.name }}</td>
            <td>{{ company.description }}</td>
            <td>
              <button @click="deleteCompany(company._id)">Excluir</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

// Estado reativo para empresas e categorias
const newCompany = ref({
  name: '',
  categories_id: '',
  description: '',
});
const companies = ref([]);
const categories = ref([]);
const newCategory = ref('');

// Função para formatar a data
const formatDate = (date) => new Date(date).toLocaleString();

// Função para buscar todas as empresas
const fetchCompanies = async () => {
  try {
    const { data } = await axios.get('http://localhost:3000/api/companies');
    companies.value = data;
  } catch (error) {
    console.error('Erro ao buscar empresas:', error);
  }
};

// Função para buscar todas as categorias
const fetchCategories = async () => {
  try {
    const { data } = await axios.get('http://localhost:3000/api/categories');
    categories.value = data;
  } catch (error) {
    console.error('Erro ao buscar categorias:', error);
  }
};

// Função para criar uma nova empresa
const createCompany = async () => {
  if (!newCompany.value.name || !newCompany.value.categories_id) {
    alert('Nome e categoria são obrigatórios');
    return;
  }

  try {
    const { data } = await axios.post('http://localhost:3000/api/companies', newCompany.value);
    companies.value.push(data);
    newCompany.value = { name: '', categories_id: '', description: '' };
  } catch (error) {
    console.error('Erro ao criar empresa:', error);
  }
};

// Função para deletar uma empresa
const deleteCompany = async (id) => {
  try {
    await axios.delete(`http://localhost:3000/api/companies/${id}`);
    companies.value = companies.value.filter(company => company._id !== id);
  } catch (error) {
    console.error('Erro ao deletar empresa:', error);
  }
};

// Função para criar uma nova categoria
const createCategory = async () => {
  if (!newCategory.value) {
    alert('Nome da categoria é obrigatório');
    return;
  }

  try {
    const { data } = await axios.post('http://localhost:3000/api/categories', { name: newCategory.value });
    categories.value.push(data);
    newCategory.value = '';
  } catch (error) {
    console.error('Erro ao criar categoria:', error);
  }
};

// Função para deletar uma categoria
const deleteCategory = async (id) => {
  try {
    await axios.delete(`http://localhost:3000/api/categories/${id}`);
    categories.value = categories.value.filter(category => category._id !== id);
  } catch (error) {
    console.error('Erro ao deletar categoria:', error);
  }
};

// Chama as funções ao montar o componente
onMounted(() => {
  fetchCompanies();
  fetchCategories();
});
</script>

<style scoped>
/* Estilos para a tabela e o formulário */
table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}

th, td {
  padding: 10px;
  border: 1px solid #ddd;
  text-align: left;
}

form {
  margin-bottom: 20px;
}

input, textarea, select {
  padding: 5px;
  margin: 5px 0;
  width: 100%;
}

button {
  padding: 5px 10px;
  margin-top: 10px;
  background-color: #4CAF50;
  color: white;
  border: none;
  cursor: pointer;
}

button:hover {
  background-color: #45a049;
}
</style>
