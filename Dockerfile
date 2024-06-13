FROM node:18.15.0-alpine3.17
RUN mkdir -p /opt/app
WORKDIR /opt/app
COPY package.json package-lock.json .
RUN npm install -g nodemon
RUN npm install
COPY . .
EXPOSE 8001
CMD [ "npm", "start"]