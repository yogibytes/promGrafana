FROM node:22-alpine

WORKDIR /week25

COPY package*.json ./

RUN npm ci

COPY . .

EXPOSE 3000

CMD ["node","index.js"]