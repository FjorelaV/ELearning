FROM node:14-alpine

RUN mkdir -p /usr/src/elearning_backend
WORKDIR /usr/src/elearning_backend

COPY package.json .
COPY package-lock.json .
COPY .env .env

RUN npm install

COPY lib lib 
COPY router router
COPY index.js index.js

EXPOSE 3000
CMD npm run dev