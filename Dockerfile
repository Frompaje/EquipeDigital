FROM node:latest

WORKDIR /app

COPY package.json ./
COPY package-lock.json ./ 

RUN npm install

COPY . .

RUN npx prisma generate

RUN npx prisma migrate deploy

RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "dev"]
