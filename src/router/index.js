
import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import MealsByLetter from '../views/MealsByLetter.vue';
import MealsByName from '../views/MealsByName.vue';
import MealsByIngredient from '../views/MealsByIngredient.vue';
import DefaultLayout from '../components/DefaultLayout.vue';
import GuestLayout from '../components/GuestLayout.vue';
import MealDetails from '../views/MealDetails.vue';
import Ingredients from '../views/Ingredients.vue';
import Categories from '../views/Categories.vue';
import MealsByCategory from '../views/MealsByCategory.vue';

const routes = [
  {
    path: '/',
    component: DefaultLayout,
    children: [
      {
        path: '/',
        name: 'home',
        component: Home
      },
      {
        path: '/by-name/:name?',
        name: 'byName',
        component: MealsByName
      },
      {
        path: '/by-letter/:letter?',
        name: 'byLetter',
        component: MealsByLetter
      },
      {
        path: '/ingredients',
        name: 'ingredients',
        component: Ingredients
      },
      {
        path: '/by-ingredient/:ingredient',
        name: 'byIngredient',
        component: MealsByIngredient
      },
      {
        path: '/meal/:id',
        name: 'mealDetails',
        component: MealDetails
      },
      {
        path: '/categories',
        name: 'categories',
        component: Categories
      },
      {
        path: '/by-category/:category',
        name: 'byCategory',
        component: MealsByCategory
      }
    ]
  },
  {
    path: '/guest',
    component: GuestLayout,
    
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router;