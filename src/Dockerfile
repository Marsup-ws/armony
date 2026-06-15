FROM base as final

ENV NODE_ENV production

# On reste en root momentanément pour copier avec les bons droits
USER root 

# On copie les fichiers en changeant le propriétaire (chown) pour l'utilisateur 'node'
COPY --from=deps --chown=node:node /usr/src/app/node_modules ./node_modules
COPY --from=build --chown=node:node /usr/src/app .

# Maintenant on bascule sur l'utilisateur non-privilégié
USER node

EXPOSE 1234

CMD ["npm", "start"]