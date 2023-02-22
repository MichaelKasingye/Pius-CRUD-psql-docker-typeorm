FROM node:16-alpine
WORKDIR /src/app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 4000
CMD yarn start

# FROM node:14
# WORKDIR /crud/docker
# COPY package*.json ./
# RUN npm install
# COPY . .
# CMD [ "yarn", "dev" ]
