FROM nginx:1.19.2
WORKDIR /server

COPY ./server .

COPY ./client/dist /usr/share/nginx/html
RUN rm -rf /etc/nginx/conf.d/default.conf
RUN rm -rf /etc/nginx/sites-enabled/default
# Add nginx config template
COPY ./docker/nginx/* /etc/nginx/conf.d/

COPY start.sh /usr/local/bin/

RUN apt-get update
RUN apt-get install -my gnupg2

RUN curl -s https://deb.nodesource.com/gpgkey/nodesource.gpg.key | apt-key add -
RUN echo 'deb https://deb.nodesource.com/node_12.x stretch main' > /etc/apt/sources.list.d/nodesource.list
RUN echo 'deb-src https://deb.nodesource.com/node_12.x stretch main' >> /etc/apt/sources.list.d/nodesource.list

RUN apt-get update && apt-get install nodejs -y
RUN chmod +x /usr/local/bin/start.sh

RUN npm install

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]