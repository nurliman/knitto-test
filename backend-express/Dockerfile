FROM node:12.18-alpine
ENV NODE_ENV production
RUN apk add --no-cache --upgrade bash
WORKDIR /usr/src/app
COPY ["package.json", "yarn.lock", "./"]
RUN yarn install --prod --pure-lockfile
COPY . .
RUN yarn global add sequelize-cli
EXPOSE 3000
RUN chmod +x wait-for-it.sh
CMD yarn start