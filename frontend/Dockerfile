# base node image
FROM node:22-alpine

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

# copy rest of src
COPY . . 

EXPOSE 8080

CMD ["npm", "run", "local"]