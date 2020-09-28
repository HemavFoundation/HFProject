FROM nginx:1.19.2
WORKDIR /server

COPY ./server .

RUN rm -rf /etc/nginx/conf.d/default.conf
RUN rm -rf /etc/nginx/sites-enabled/default
COPY ./docker/nginx/* /etc/nginx/conf.d/

COPY start.sh /usr/local/bin/
RUN chmod +x /usr/local/bin/start.sh

RUN apt-get update
RUN apt-get install -my gnupg2

RUN curl -s https://deb.nodesource.com/gpgkey/nodesource.gpg.key | apt-key add -
RUN echo 'deb https://deb.nodesource.com/node_12.x stretch main' > /etc/apt/sources.list.d/nodesource.list
RUN echo 'deb-src https://deb.nodesource.com/node_12.x stretch main' >> /etc/apt/sources.list.d/nodesource.list

RUN apt-get update && apt-get install nodejs -y

RUN npm install forever -g

RUN npm install
COPY ./client /client

WORKDIR /client

RUN npm install
RUN npm run build

RUN mv ./dist/* /usr/share/nginx/html


EXPOSE 80

ENTRYPOINT  ["start.sh"]