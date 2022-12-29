FROM node:16-alpine3.16

WORKDIR /app/client

COPY package*.json ./
COPY tsconfig.json ./

RUN npm install

COPY . ./

RUN npm run build

EXPOSE ${CLIENT_PORT}

CMD ["npm", "run", "start"]
