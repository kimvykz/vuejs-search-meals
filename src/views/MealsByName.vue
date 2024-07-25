<template>
  <div class="p-8 pb-0">
    <h1 class="text-4xl font-bold mb-4 text-orange-400">Search Meals by Name</h1>
    </div>
    <div class="px-8 pb-3">
    <input 
      type="text" 
      v-model="keyword"
      class="rounded border-2 bg-white border-gray-200 focus:ring-orange-400 focus:border-orange-400 w-full" 
      placeholder="Search for Meals"
      @change="searchMeals"
    />
  </div>

  <Meals :meals="meals"/>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import store from '../store';
import { useRoute } from 'vue-router';
import Meals from '../components/Meals.vue';

const route = useRoute();
const keyword = ref('');
const meals = computed(() => store.state.searchedMeals);

function searchMeals() {
  if (keyword.value) {
    store.dispatch('searchMeals', keyword.value)
  } else {
    store.commit("setSearchedMeals", [])
  }

}

onMounted(() => {
  keyword.value = route.params.name
  if (keyword.value) {
    searchMeals()
  }
})

</script>