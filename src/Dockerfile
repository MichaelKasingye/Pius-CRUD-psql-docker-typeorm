FROM node:16-alpine
WORKDIR /app
COPY package*.json ./
RUN yarn --frozen-lockfile
COPY . .
EXPOSE 4000
CMD yarn start

# FROM node:14
# WORKDIR /crud/docker
# COPY package*.json ./
# RUN npm install
# COPY . .
# CMD [ "yarn", "dev" ]
