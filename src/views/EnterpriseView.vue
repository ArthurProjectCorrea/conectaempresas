<template>
  <div class="H3276814">
    <div class="M9716304">
      <div class="J5604927">
        <font-awesome-icon :icon="['fas', 'magnifying-glass']" />
        <form class="T9304721">
          <input id="name" type="text" placeholder="Search by name or CNPJ" class="K1987436" />
        </form>
        <button @click="openPopup" class="styleButtonIconLight">
          <font-awesome-icon :icon="['fas', 'sliders']" />
        </button>
        <Popup ref="popup" namePopup="Filtro">
          <FilterEnterprise/>
        </Popup>
      </div>
    </div>
    <div class="N8421573">
      <!-- <div class="R7163920">
        <h1 class="S4839205">Categorias</h1>
        <label v-for="category in categories" :key="category._id" class="L2847951">
          <input type="checkbox" id="option1" name="option1" :value="category.id">
          {{ category.name }}
        </label>
      </div> -->
      <div class="U2846137">
        <div v-for="company in companies" :key="company.id" class="P3047698">
          <div class="Q9512847"></div>
          <div>
            <!-- <div>{{ company._id }}</div> -->
            <div>{{ company.name }}</div>
            <!-- <div>{{ company.categories_id.name }}</div> -->
            <div>{{ company.description }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import Popup from '@/components/overall/Popup.vue';
import FilterEnterprise from '@/components/FilterEnterprise.vue';

const popup = ref(null)


// Dados para categorias e empresas
const categories = ref([]);
const companies = ref([]);

const openPopup = () => {
  popup.value.openPopup()
}
// Funções para obter os dados
const fetchCategories = async () => {
  try {
    const response = await axios.get('http://localhost:3000/api/categorias');
    categories.value = response.data;
  } catch (error) {
    console.error('Erro ao obter categorias:', error);
  }
};

const fetchCompanies = async () => {
  try {
    const response = await axios.get('http://localhost:3000/api/empresas');
    companies.value = response.data;
  } catch (error) {
    console.error('Erro ao obter empresas:', error);
  }
};

// Obter os dados ao montar o componente
onMounted(() => {
  fetchCategories();
  fetchCompanies();
});
</script>

<style>
.U2846137 {
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
  @apply px-8 p-2 w-1/5
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
