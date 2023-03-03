# FROM node:16-alpine
# WORKDIR /src/app
# COPY package*.json ./
# RUN npm install
# COPY . .
# EXPOSE 5000
# CMD yarn dev

# # FROM node:latest
# # RUN apt-get update && apt-get install -y postgresql
# # WORKDIR /src/app
# # COPY package*.json ./
# # RUN npm install
# # COPY . .
# # ENV POSTGRES_USER=${DB_USERNAME}
# # ENV POSTGRES_PASSWORD=${DB_PASSWORD}
# # ENV POSTGRES_DB=${DB_DATABASE}
# # RUN service postgresql start && \
# #     psql -U postgres -c "CREATE USER '${POSTGRES_USER}' WITH PASSWORD '${POSTGRES_PASSWORD}';" && \
# #     psql -U postgres -c "CREATE DATABASE '${POSTGRES_DB}' OWNER ${POSTGRES_USER};"
# # EXPOSE 3000
# # CMD yarn dev
