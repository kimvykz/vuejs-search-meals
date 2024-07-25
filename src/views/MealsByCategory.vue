<template>
  <div class="p-8 pb-0">
    <h1 class="text-4xl font-bold mb-4 text-orange-400">
      Meal category {{ category.strCategory }}
    </h1>
  </div>
  <Meals :meals="meals" />
</template>


<script setup>
import { computed, onMounted } from 'vue';
import Meals from '../components/Meals.vue';
import store from '../store';
import { useRoute } from 'vue-router';

const route = useRoute();
const meals = computed(() => {
  return store.state.mealsByCategory
});
const category = computed(() => 
store.state.category);

onMounted(() => {
  store.dispatch('searchMealsByCategory', route.params.category)
})
</script>