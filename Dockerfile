FROM node:14.1.0 as production

WORKDIR /app
COPY ./package.json ./
RUN npm install
COPY . .
RUN npm run build

FROM node:14.1.0
WORKDIR /app
COPY --from=production /app ./
EXPOSE 3000
CMD ["npm", "run", "start:prod"]