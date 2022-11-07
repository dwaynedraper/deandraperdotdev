FROM node:16-alpine3.16
WORKDIR /app
COPY ./package.json ./
RUN npm install
COPY . .
EXPOSE 80/tcp
CMD ["node", "server-build/server.js"]