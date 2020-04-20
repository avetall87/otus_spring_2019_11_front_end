FROM nginx
RUN apt-get update && apt-get -y install curl && apt-get -qq -y install curl
COPY build /usr/share/nginx/html
COPY nginx/config/default.conf /etc/nginx/conf.d/default.conf