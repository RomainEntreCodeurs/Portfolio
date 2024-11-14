# Utiliser une image Node.js comme base
FROM node:18-alpine

# Définir le répertoire de travail
WORKDIR /app

# Télécharger le script wait-for-it
RUN apk add --no-cache curl && \
    curl -sSL https://github.com/vishnubob/wait-for-it/releases/download/v2.5.0/wait-for-it.sh -o /wait-for-it.sh && \
    chmod +x /wait-for-it.sh

# Copier package.json et yarn.lock pour installer les dépendances
COPY package*.json yarn.lock ./

# Installer les dépendances
RUN yarn install

# Copier tout le code source dans le conteneur
COPY . .

# Construire l'application NestJS
RUN yarn build

# Exposer le port de l'API
ENV PORT 3001
EXPOSE 3001

# Lancer l'application (avec le chemin correct)
CMD ["sh", "-c", "/wait-for-it.sh portfolio-db:5432 -- yarn prisma migrate deploy && yarn start"]
