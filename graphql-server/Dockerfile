FROM node:18
WORKDIR /usr/src/app

COPY package*.json ./
RUN npm ci --omit=dev

COPY dist .

EXPOSE 4000
CMD [ "node", "index.js" ]