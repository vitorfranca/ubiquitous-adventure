FROM node:6

WORKDIR /app

COPY package.json webpack.config.js .babelrc /app/
COPY src /app/src

RUN npm install
RUN npm run build

CMD npm run serve

EXPOSE 8081
