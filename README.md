# vuejs-search-meals
create vite@latest
npm install vue-router@4
npm install vuex@4 -S
npm install -D @tailwindcss/forms
npm install -S axios
npm run dev

# Vue 3 + Vite

docker instructions:
npm run build
docker build -t my-nginx-app .
docker run -d -p 1800:80 --name search-meals-app my-nginx-app
docker stop search-meals-app
docker start search-meals-app
docker rm search-meals-app # to delete container
docker rmi my-nginx-app # to delete image