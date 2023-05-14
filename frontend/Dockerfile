# Utiliza una imagen base de Node.js
FROM node:node:19.2-alpine3.16 AS build
# Establece el directorio de trabajo
WORKDIR /app
# Copia los archivos del proyecto al contenedor
COPY . .
# Instala las dependencias del proyecto
RUN npm install
# Compila la aplicación
RUN npm run build --prod


# Usa una imagen de servidor web ligero como la base
FROM nginx:alpine AS Produccion
# Copia el archivo de configuración del servidor
COPY nginx.conf /etc/nginx/nginx.conf
# Copia la aplicación compilada al servidor web
COPY --from=build /app/dist/frontend /usr/share/nginx/html
# Exponer el puerto 80
EXPOSE 80
# Iniciar el servidor web de Nginx
CMD ["nginx", "-g", "daemon off;"]
