FROM node:alpine
RUN apk add --no-cache bash

WORKDIR /usr/app
COPY package.json ./

RUN npm install

COPY . ./


EXPOSE 3000
CMD ['npm', 'start']
