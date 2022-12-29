FROM node:16-alpine3.16

WORKDIR /app/client

COPY package*.json ./
COPY tsconfig.json ./

RUN npm install

COPY . ./

RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "start"]
