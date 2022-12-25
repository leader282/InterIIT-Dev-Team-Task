FROM node:15.13-alpine
WORKDIR /smoothsearch
ENV PATH = "./node_modules/.bin:$PATH"
COPY . .
RUN npm install && npm run build
CMD ["npm", "start"]