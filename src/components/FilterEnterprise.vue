<template>
    <div class="A5283746">
        <div class=" B7309154">
            <button class="styleButtonLight C9416823"  @click="currentPage = 0" :class="{ active: currentPage === 0 }">
                <font-awesome-icon :icon="['fas', 'sliders']" />
                Company name
            </button>
            <button class="styleButtonLight C9416823" @click="currentPage = 1" :class="{ active: currentPage === 1 }">
                <font-awesome-icon :icon="['fas', 'sliders']" />
                Location
            </button>
            <button class="styleButtonLight C9416823" @click="currentPage = 2" :class="{ active: currentPage === 2 }">
                <font-awesome-icon :icon="['fas', 'sliders']" />
                Industry
            </button>
            <button class="styleButtonLight C9416823" @click="currentPage = 2" :class="{ active: currentPage === 2 }">
                <font-awesome-icon :icon="['fas', 'sliders']" />
                Employee headcount
            </button>
            <button class="styleButtonLight C9416823" @click="currentPage = 2" :class="{ active: currentPage === 2 }">
                <font-awesome-icon :icon="['fas', 'sliders']" />
                Revenue
            </button>
            <button class="styleButtonLight C9416823" @click="currentPage = 2" :class="{ active: currentPage === 2 }">
                <font-awesome-icon :icon="['fas', 'sliders']" />
                Funding
            </button>
            <button class="styleButtonLight C9416823" @click="currentPage = 2" :class="{ active: currentPage === 2 }">
                <font-awesome-icon :icon="['fas', 'sliders']" />
                Technology
            </button>
            <button class="styleButtonLight C9416823" @click="currentPage = 2" :class="{ active: currentPage === 2 }">
                <font-awesome-icon :icon="['fas', 'sliders']" />
                Year founded
            </button>
        </div>
        <component :is="currentPageComponent" />
    </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import FilterPageTechnology from './forms/FilterPage1.vue';
import FilterPageMaintenance from './forms/FilterPage2.vue';
import FilterPageGeneral from './forms/FilterPage3.vue';

const props = defineProps({
    isOpen: Boolean,
    onClose: Function
});

const emit = defineEmits(['update:isOpen']);

const currentPage = ref(0);

const currentPageComponent = computed(() => {
    switch (currentPage.value) {
        case 0:
            return FilterPageTechnology;
        case 1:
            return FilterPageMaintenance;
        case 2:
            return FilterPageGeneral;
        default:
            return FilterPageTechnology;
    }
});

const close = () => {
    emit('update:isOpen', false);
    if (props.onClose) props.onClose();
};
</script>

<style scoped>
.A5283746{
    @apply flex
}
.B7309154{
    @apply flex-col p-4 justify-center items-center border-r h-full 
}
.C9416823{
    @apply flex justify-start items-center w-80 gap-2 mb-2
}
.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
}

.modal-content {
    background: white;
    padding: 20px;
    border-radius: 8px;
    position: relative;
}

.page-buttons {
    margin-bottom: 10px;
}

.page-buttons button {
    margin-right: 5px;
    padding: 5px 10px;
}

.page-buttons button.active {
    font-weight: bold;
    background-color: #007bff;
    color: white;
}
</style>