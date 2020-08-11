FROM node:12.18-alpine
ENV NODE_ENV production
RUN apk add --no-cache bash
WORKDIR /usr/src/app
RUN yarn global add sequelize-cli
COPY ["package.json", "yarn.lock", "./"]
RUN yarn install --prod --pure-lockfile
COPY . .
EXPOSE 3000
RUN chmod +x ./wait-for-it.sh
CMD yarn start