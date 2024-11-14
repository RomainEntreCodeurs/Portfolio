FROM node:20-alpine AS builder

WORKDIR /app

COPY ./apps/api/package*.json ./
COPY ./apps/api/yarn.lock ./
COPY ./apps/api/tsconfig.json ./

RUN yarn install

COPY ./apps/api ./

RUN yarn build
RUN yarn prisma generate

FROM node:20-alpine AS runner

WORKDIR /app

COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/prisma ./prisma

COPY .env .env

EXPOSE 3000

CMD ["node", "dist/main.js"]
