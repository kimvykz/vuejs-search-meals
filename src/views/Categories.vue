<template>
  <div class="p-8 pb-8">
    <h1 class="text-4xl font-bold mb-4 text-orange-400">
      Categories
    </h1>
  </div>
  <div class="px-8">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
    <a
      href="#"
      @click.prevent="openCategory(category)"
      v-for="category in categories"
      :key="category.strCategory"
      class="block bg-white rounded p-3 m-1 shadow-md hover:scale-105 transition-all">
      
      <h3 class="text-2xl font-bold mb-2">{{ category.strCategory }}</h3>
    </a>
  </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import axiosClient from '../axiosClient';
import { useRouter } from 'vue-router';
import store from "../store";

const categories = ref([]);
const router = useRouter();

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