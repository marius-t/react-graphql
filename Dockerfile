FROM node:16.13.1
WORKDIR /usr/src/app

COPY . /usr/src/app

# We need to rebuild because of node_sass
RUN rm -rf node_modules
RUN yarn install