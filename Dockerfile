FROM node

WORKDIR /usr/server/amawfinance-api

COPY package.json ./

RUN npm install

COPY . .

EXPOSE 3333

CMD ["npm", "run", "dev"]