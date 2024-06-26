FROM cgr.dev/chainguard/node:latest-dev AS build
RUN mkdir -p /app
WORKDIR /app
COPY . /app
USER root
RUN rm -rf node_modules && npm install --force
RUN npm install -g nodemon


FROM cgr.dev/chainguard/node:latest
COPY --from=build /app /usr/src/app
WORKDIR /usr/src/app

EXPOSE 8001

CMD ["app.js"]