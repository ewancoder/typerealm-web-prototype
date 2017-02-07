FROM node:latest

RUN npm install -g http-server
ADD package.json package.json
RUN npm install
ADD . .
RUN npm run build

EXPOSE 8080

CMD http-server ./dist
