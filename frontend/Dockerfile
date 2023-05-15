FROM node:19.2-alpine3.16 AS build
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build --prod


FROM nginx:alpine AS Produccion
COPY --from=build /app/dist/frontend /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
