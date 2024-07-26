<template>
  <div class="p-8 pb-8">
    <h1 class="text-4xl font-bold mb-4 text-orange-400">
      Categories
    </h1>
  </div>
  <div class="px-8">
    <input 
      type="text"
      v-model="keyword"
      class="rounded border-2 bg-white border-gray-200 focus:ring-orange-400 focus:border-orange-400 w-full mb-3"
      placeholder="Search for categories"
    />
    <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
    <router-link
      @click.prevent="openCategory(category)"
      :to="{name: 'byCategory', params: {category: category.strCategory}}"
      v-for="category in computedCategories"
      :key="category.strCategory"
      class="block bg-white rounded p-3 m-1 shadow-md hover:scale-105 transition-all">
      
      <h3 class="text-2xl font-bold mb-2">{{ category.strCategory }}</h3>
    </router-link>
  </div>
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue';
import axiosClient from '../axiosClient';
import { useRouter } from 'vue-router';
import store from "../store";

const keyword = ref('');
const categories = ref([]);
const router = useRouter();
const computedCategories = computed(() => {
  if (!computedCategories) return categories;
  return categories.value.filter( (c) => 
    c.strCategory.toLowerCase().includes(keyword.value.toLowerCase())
  )
})

function openCategory(category) {
  store.commit('setCategory', category)
  router.push({
    name: "byCategory",
    params: { category: category.strCategory}
  })
}

onMounted(() => {
  axiosClient.get(`list.php?c=list`)
    .then(({ data }) => {
      categories.value = data.meals;
    })
})

</script>