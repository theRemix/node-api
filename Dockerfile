FROM node:alpine

EXPOSE 3000

ENV API_NAME default

WORKDIR /srv

COPY package*.json /srv/
COPY index.js /srv/

RUN npm install

CMD ["node", "."]
