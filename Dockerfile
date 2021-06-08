# Stage 1
FROM node:buster as builder

WORKDIR /app

COPY package.json ./
COPY yarn.lock ./

RUN yarn

COPY ./src ./src
COPY ./tsconfig.json ./
COPY ./types ./types
COPY ./assets ./assets

ARG VERSION='Not Found'
ENV PROJECT_VERSION=$VERSION

RUN yarn build

# Stage 2
FROM nginx:alpine

COPY --from=builder /app/dist /var/www
COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80
ENTRYPOINT ["nginx","-g","daemon off;"]
