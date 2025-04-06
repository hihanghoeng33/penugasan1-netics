FROM node:latest
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

FROM node:latest
WORKDIR /app
COPY --from=build /app .
EXPOSE 3000
CMD ["node", "index.js"]