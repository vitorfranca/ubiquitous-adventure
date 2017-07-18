FROM node:6

WORKDIR /app

COPY package.json /app
RUN npm install
COPY . /app
RUN npm run build

CMD npm run serve

EXPOSE 8081
