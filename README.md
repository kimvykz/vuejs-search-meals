# vuejs-search-meals
create vite@latest
npm install vue-router@4
npm install vuex@4 -S
npm install -D @tailwindcss/forms
npm install -S axios
npm run dev

# Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

Learn more about IDE Support for Vue in the [Vue Docs Scaling up Guide](https://vuejs.org/guide/scaling-up/tooling.html#ide-support).


docker instructions:
npm run build
docker build -t my-nginx-app .
docker run -d -p 1800:80 --name search-meals-app my-nginx-app
docker stop search-meals-app
docker start search-meals-app
docker rm search-meals-app # to delete container
docker rmi my-nginx-app # to delete image