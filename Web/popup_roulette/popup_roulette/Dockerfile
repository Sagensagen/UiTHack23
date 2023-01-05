FROM nginx:alpine

#!/bin/sh
WORKDIR .

COPY ./nginx.conf /etc/nginx/nginx.conf

## Remove default nginx index page
RUN rm -rf /usr/share/nginx/html/*

# Copy from the stahg 1
COPY ./dist /usr/share/nginx/html

EXPOSE 3000 8900

ENTRYPOINT ["nginx", "-g", "daemon off;"]