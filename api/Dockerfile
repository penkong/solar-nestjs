FROM node:16-alpine3.15

RUN apk add --no-cache bash tini curl

RUN mkdir -p /app
WORKDIR "/app"


COPY package*.json ./


RUN chown -R node:node .
USER node
RUN npm config set unsafe-perm true
# we use npm ci here so only the package-lock.json file is used
RUN npm config list \
    && npm ci \
    && npm cache clean --force

COPY --chown=node:node . .

COPY . .
EXPOSE 5000

# entrypoint frist run and wrap cmd
# tini run as main process and if we SIGINT or SIGTERM
# it will remove node process as zombie process .
ENTRYPOINT ["/sbin/tini", "--"]
CMD ["npm", "run", "dev"]














