FROM node:18 AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

FROM node:18
WORKDIR /app
COPY --from=build /app .
EXPOSE 3000
CMD ["node", "index.js"]
