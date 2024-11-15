FROM node:18-alpine

WORKDIR /app

COPY package*.json yarn.lock ./

RUN yarn install

COPY . .
COPY ./start.sh ./start.sh

RUN chmod +x ./start.sh

ENV PORT 3001
EXPOSE 3001

CMD ["./start.sh"]
