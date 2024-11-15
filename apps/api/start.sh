#!/bin/sh

echo "Attente de la base de données..."
until nc -z $POSTGRES_HOST 5432; do
  echo "Base de données non prête. Nouvelle tentative dans 5 secondes..."
  sleep 5
done

echo "Lancement des migrations Prisma..."
yarn prisma migrate dev --name init

echo "Démarrage de l'API..."
yarn start
