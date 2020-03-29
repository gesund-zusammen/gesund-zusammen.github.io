FROM node:10-alpine

WORKDIR /usr/app/

COPY . ./

ARG NODE_ENV=production

ENV NODE_ENV=${NODE_ENV}

ARG OPTIMIZED_BUILD=true

ENV OPTIMIZED_BUILD=${OPTIMIZED_BUILD}

RUN yarn install --frozen-lockfile && yarn build

CMD ["yarn", "server:build"]
