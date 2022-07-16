FROM node:16-alpine3.16

WORKDIR /app

COPY package.json .
COPY yarn.lock .
COPY . .

RUN yarn install
EXPOSE 3000

ENV PORT=3000

RUN yarn build

CMD ["yarn", "start"]