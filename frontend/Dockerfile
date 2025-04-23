# Stage 1 - Build
FROM node:18-alpine as build
# frontend/Dockerfile


WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["npx", "serve", "-s", "build", "-l", "3000"]

