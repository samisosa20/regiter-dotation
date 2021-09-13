# Registro de dotación

Aplicación para asignar equipos tecnologicos a los empleados de una empresa, usando ReactJs para front y Express para el Back, usando MYSQL para almacenar la informacion, se opta MYSQL para facilitar el desarrollo de la aplicacion .
Se usa una arquitectura MVC para trabajar la modularidad y facilitar su escabilidad.

## Instalación

Para hacer la instalacion de la aplicaicon de forma local, por favor seguir los siguientes pasos:

`git clone https://github.com/samisosa20/regiter-dotation.git`

`cd regiter-dotation`

`npm i` or `npm install`

`cd api`

`npm i` or `npm install`

NOTA: importe la base de datos ubicado en `/regiter-dotation/api/src/model/asignaciones`

## Modo dev

para ejecutar en modo desarrollador primero deberas de correr el back que se encuentra ubicado en la carpeta api en la raiz del proyecto

`cd /regiter-dotation/api`

`npm run dev`

despues abres otra terminal y corres el front en la raiz del proyecto

`cd /regiter-dotation`

`npm start`

## Correr test

Una vez que tengas instalado las dependencias y la base de datos lista ejecuta el siguente comando dentro de la siguiente ruta `/regiter-dotation/api`

`npm run test`

## Autor

[Sammy Guttman L](https://github.com/samisosa20)
