<template>
  <div class="H3276814">
    <div class="M9716304">
      <div class="J5604927">
        <font-awesome-icon :icon="['fas', 'magnifying-glass']" />
        <form @submit.prevent="createCompany" class="T9304721">
          <input v-model="newCompany.name" id="name" type="text" placeholder="Search..." class="K1987436" />
          <select v-model="newCompany.categories_id" id="category">
            <option v-for="category in categories" :key="category._id" :value="category._id">
              {{ category.name }}
            </option>
          </select>
          <button type="submit" class="styleButtonIconLight">
            <font-awesome-icon :icon="['fas', 'sliders']" />
          </button>
        </form>
      </div>
    </div>
    <div class="N8421573">
      <div class="R7163920">
        <form action="">
          <h1 class="S4839205">Categorias</h1>
          <label v-for="category in categories" :key="category._id" class="L2847951">
            <input type="checkbox" id="option1" name="option1" :value="category.id">
            {{ category.name }}
            <!-- <button @click="deleteCategory(category._id)">Excluir</button> -->
          </label>
        </form>
      </div>
      <div class="U2846137">
        <div v-for="company in companies" :key="company._id" class="P3047698">
          <div class="Q9512847"></div>
          <div>
            <div>{{ company._id }}</div>
            <div>{{ company.name }}</div>
            <div>{{ company.categories_id.name }}</div>
            <div>{{ company.description }}</div>
            <button @click="deleteCompany(company._id)">Excluir</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

// Variáveis reativas
const newCompany = ref({
  name: '',
  categories_id: '',
  description: '',
});

const companies = ref([]);
const categories = ref([]);

// Função para buscar todas as empresas
const fetchCompanies = async () => {
  try {
    const { data } = await axios.get('http://localhost:3000/api/companies');
    companies.value = data;
  } catch (error) {
    console.error('Erro ao buscar empresas:', error);
  }
};

console.log()

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
    companies.value.push(data);  // Adiciona a nova empresa à lista
    newCompany.value = { name: '', categories_id: '', description: '' };  // Limpa o formulário
  } catch (error) {
    console.error('Erro ao criar empresa:', error);
  }
};

// Função para deletar uma empresa
const deleteCompany = async (id) => {
  try {
    await axios.delete(`http://localhost:3000/api/companies/${id}`);
    companies.value = companies.value.filter(company => company._id !== id);  // Remove a empresa da lista
  } catch (error) {
    console.error('Erro ao deletar empresa:', error);
  }
};

// Chama as funções para buscar empresas e categorias quando o componente é montado
onMounted(() => {
  fetchCompanies();
  fetchCategories();
});
</script>

<style>
.U2846137{
  @apply w-full                                                                                                                                                                                                                                                                                                                              
}
.T9304721 {
  @apply flex w-full
}

.H3276814 {
  @apply flex-col justify-center items-center p-2 gap-2
}

.J5604927 {
  @apply flex justify-center items-center border border-black pl-4 w-2/5 gap-2 rounded-md text-gray-400
}

.K1987436 {
  @apply w-full outline-none text-black
}

.L2847951 {
  @apply flex gap-2
}

.R7163920 {
  @apply px-8 p-2
}

.S4839205 {
  @apply text-lg font-semibold
}

.M9716304 {
  @apply flex justify-center items-center mt-10 mb-10
}

.N8421573 {
  @apply flex justify-start items-start p-2 border border-red-500
}

.P3047698 {
  @apply flex border border-red-500 w-full rounded-sm p-2 gap-2
}

.Q9512847 {
  @apply w-full bg-blue-300 rounded-md w-[200px]
}
</style>
