# APLICACION PARA TIENDA DE PRODUCTOS CONGELADOS

Eccomerce para SG Congelados

Aplicación de caracter educativo para AYI Academy

Este proyecto fue construido con [Create React App](https://github.com/facebook/create-react-app).

## Paso a paso para utilizar la aplicación

### SERVIDOR

1- Descargar o clonar el proyecto realizado con Java para poder correr el servidor propio de la aplicación [Backend SG Congelados](https://github.com/NClemente91/BackendJavaSGCongelados.git)

2- Una vez descargado, abrir el proyecto con un ide y asegurarse de que se instalen todas las dependencias.

3- Se deberá tener instalado MySql y asegurarse de que este corriendo en su máquina. Además, desde alguna herramienta de gestión de base de datos, MySQL Workbench por ejemplo, crear un esquema de base de datos con el nombre de "sg_congelados_db". Asegurarse de que el nombre sea el correcto.

4- Correr el servidor configurando previamente las variables de entorno del proyecto como lo son DB_PORT=3306, DB_HOST=localhost, DB_USERNAME="tu usuario de base de datos", DB_PASSWORD="tu contraseña de base de datos" y DB_DATABASE=sg_congelados_db.

5- Controlar que el servidor este funcionando de manera correcta desde Postman o desde Swagger en el siguiente link [Swagger](http://localhost:8080/swagger-ui.html#!/). Se puede hacer una prueba con productos que ya vienen precargados.

### APLICACION

1- Descargar o clonar el proyecto realizado con React para poder correr la aplicación [Frontend SG Congelados](https://github.com/NClemente91/FrontendReactSGCongelados.git)

2- Una vez descargado, abrir el proyecto con un editor de código y desde la terminal ejecutar `npm i` o `npm install` para que descargue todas las dependencias.

3- Ejecutar la aplicación en modo de desarrollo con `npm start`. Abrir [http://localhost:3000](http://localhost:3000) para ver que se este ejecutando de manera correcta.

4- Ejecutar `npm run build` para generar la carpeta "build" desde donde se ejecutará la aplicacion.

5- Si no se tiene instalado el comando `serve`, hacerlo con el siguiente comando `npm i -g serve`

6- Correr la aplicación con `serve -s build`. Abrir [http://localhost:3000](http://localhost:3000) para ver la aplicación final.
