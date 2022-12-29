FROM node:16-alpine3.16

WORKDIR /app/api

COPY package*.json ./
COPY tsconfig.json ./

COPY src /app/api/src

RUN ls -a

RUN npm install
RUN npm run build

EXPOSE 4000

CMD ["npm", "run", "start"]