FROM node:alpine

RUN apk add --no-cache bash

RUN apk update && apk add --no-cache wget && apk --no-cache add openssl wget && apk add ca-certificates && update-ca-certificates

RUN wget -qO- "https://github.com/dustinblackman/phantomized/releases/download/2.1.1a/dockerized-phantomjs.tar.gz" | tar xz -C / \
    && npm config set user 0 \
    && npm install -g phantomjs-prebuilt

WORKDIR /usr/app
COPY package.json ./


RUN npm install

COPY . ./


EXPOSE 3000
CMD ["npm", "start"]
