FROM node:20-alpine
WORKDIR /app
ENV NODE_ENV=production
COPY . .
RUN npm install --omit=dev
EXPOSE 3000
CMD ["npm","start"]
FROM node:20-alpine
WORKDIR /app
ENV NODE_ENV=production
RUN apk add --no-cache unzip
COPY myset-mvp-full-docker.zip /tmp/app.zip
RUN unzip -o /tmp/app.zip -d /app && rm /tmp/app.zip
RUN npm install --omit=dev
EXPOSE 3000
CMD ["npm","start"]
