FROM node:16-alpine3.16

WORKDIR /app

COPY package*.json ./
COPY tsconfig.json ./

COPY src /app/src

RUN ls -a

RUN yarn install
RUN yarn build

EXPOSE 4000

CMD ["yarn", "start"]