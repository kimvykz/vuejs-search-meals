# use off Nginx image
FROM nginx:alpine

# install bash
RUN apk add --no-cache bash

# copy files from dist 
COPY dist /usr/share/nginx/html

# open 80 port for Nginx
EXPOSE 80