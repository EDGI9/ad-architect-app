FROM node:24-bookworm

WORKDIR /app

COPY . .

RUN npm ci

EXPOSE 5173

CMD [ "npm", "run", "dev" ]