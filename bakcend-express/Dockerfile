FROM node:12.18-alpine
ENV NODE_ENV production
WORKDIR /usr/src/app
COPY ["package.json", "yarn.lock", ".yarnrc", "./"]
RUN yarn install --pure-lockfile && mv node_modules ../
COPY . .
EXPOSE 3000
CMD yarn start