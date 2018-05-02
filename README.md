

# Recordatorio paso a paso para la creación de la API (borrador inicial)
https://github.com/CesarHtea/personal-tiny-api 

## Set up inicial

0000. Instalar node en la terminal
  http://install-party-18018.surge.sh/ 
  // para instalar node, el cual nos ayuda a escribir JS y hacer la API

0005. Crear carpeta de proyecto y repositorio en github

0010. 
   $ npm install // genera la carpeta node_modules

0015. Crear archivo .gitignore
  $ touch .gitignore 
  y dentro escribir en la línea 1: node_modules

0017. Crear archivo server.js en la carpeta de proyecto
  $ touch server.js

https://github.com/CesarHtea/personal-tiny-api/commit/d06dda69433e17685796d48c02f2dfb30f271023

https://github.com/CesarHtea/personal-tiny-api/commit/da3f5d8974b5bb4b8d4a5515ae133ee96aa2e940


0018. Crear estructura de carpetas
    /src/
         /views/
         /routes/
         /models/
         /database/
             /migrations/
             /seeds/
    /public/
         /css/
         /images/
         /.../


## Instalar dependencias y librerías

0020. Crear archivo package.json
  $ npm init --yes // para crear archivo package.json

0025. Instalar express
  $ npm install --save express // nos ayuda a construir la API

0030. Instalar nodemon y modificar package.json
  $ npm install nodemon // sirve para reiniciar el servidor con cada cambio
  Modificar en package.json:
   "scripts": { 
            ...
    "start": "nodemon server.js",
            ...
   },

0035. Instalar ejs
  $ npm i --save-dev ejs // esto tiene relación con las vistas

0040. Instalar body parser
  $ npm install --save body-parser // sirve para leer peticiones    

0050. Instalar morgan y corse
  $ npm install morgan // es para hacer un logger    
  $ npm install cors

0060. Instalar knex + driver mysql
  $ npm install -g knex@0.13
  $ npm install --save mysql // driver de mysql
  $ npm install --save knex@0.13

0065. Instalar objection
  $ npm install --save objection // sirve para crear relaciones entre modelos

0070. Authentication
  $ npm install --save react-router-dom
  $ npm install -g yo
  $ npm install -g generator-nxkplus
  $ yo nxkplus
  $ yo nxkplus:auth

https://github.com/CesarHtea/personal-tiny-api/commit/ee522f0c66f47e3a36f4bc45a5a5ea7344cc63f1


## Base de datos en mysql

0075. Crear manualmente base de datos en mysql
  $ mysql -u<<user>> -p<<password>>
  $ CREATE DATABASE <<nombre>>


## Archivos de apoyo

0080. Crear knexfile.js a la misma altura que server.js , y configurarlo.
   $ touch knexfile.js // controla asuntos de base de datos

https://github.com/CesarHtea/personal-tiny-api/commit/18dca7a880b8832fb442408c8e865fb8c923f81e

0085. Crear archivo connection.js dentro de /src/database

https://github.com/CesarHtea/personal-tiny-api/commit/6795dbe04131e91992adc98879f5c47fc4173bbd


## Migrations and Seeds

0090. Crear migraciones y ejecutarlas
  $ knex migrate:make <<nombreDescriptivo.js>>
  $ knex migrate:latest
  $ knex migrate:rollback // para eliminar la migracion

095. Crear archivos seed y ejecutarlos
  $ touch /seeds/<<nombre>>.js
  $ knex seed:run

https://github.com/CesarHtea/personal-tiny-api/commit/c25a96349b0609c57e5c860b0547cd529eef2f09


## Models

0100. Crear los modelos dentro de la carpeta src/models
    $ touch src/models/<<Nombre>>.js 

https://github.com/CesarHtea/personal-tiny-api/commit/a2096d68885c8ca10f6b2f369c047e5d269b6b92


## Configurar primera conexión a la API

0110. Crear archivo apiRoutes. en src/routes
0115. Configurar server.js
0120. Probar en postman: GET http://localhost:3000/api/tweets

https://github.com/CesarHtea/personal-tiny-api/commit/b42f3b05794bd2c38d05bd30d320eb19d9ba55ae


## Configurar CRUD (Create, Read, Update, Delete)

0130. Modificar archivo apiRoutes.js
0135. Configurar bodyParser en server.js
0140. Probar en postman: 
    GET http://localhost:3000/api/tweets/2
    POST http://localhost:3000/api/tweets
          Body
          Raw
              {
                  “description”: “Retrieve the new tweet”,
                  “likes”: 20,
                  “retweets”: 4,
                  “listId”: 1
              }
    PUT http://localhost:3000/api/tweets/2
          Body
          Raw
              {
                  “description”: “Updated using Postman App”
              }
    DELETE http://localhost:3000/api/tweets/2

https://github.com/CesarHtea/personal-tiny-api/commit/f7f8148c8b25cb1bf24eb52cc44ddf9dc4ce97ff

0145. Ampliar archivo apiRoutes.js
0140. Probar en postman: 
    GET http://localhost:3000/api/lists

https://github.com/CesarHtea/personal-tiny-api/commit/2ea13973d19ea38cc67ef26718e98c94566194a6

## Crear Vistas

0150. Crear archivos extensión ejs y formato html en carpeta src/views 
    $ touch src/views/home.ejs
    $ touch src/views/404.ejs
0153. Crear archivo styles.css en carpeta public/css/
0155. Configurar en server.js el EJS Engine setup
0160. Configurar en server.js el setup static files para poder acceder a los archivos de la carpeta public
0170. Crear pageRoutes.js en src/routes

https://github.com/CesarHtea/personal-tiny-api/commit/0baa42b87bd847689c6247eddc154520d6674413

## Complementando server.js

0180. Configurar cors en server.js // para que otras personas se puedan conectar a la API localhost
0183. Configurar morgan en server.js // para hacer un log de las peticiones que se realizan

https://github.com/CesarHtea/personal-tiny-api/commit/4a70bbdd677ec552cd83a97ebc0a3faf6101be7f


## Refactorizando tweeter API en torombolo API

0200. Limpiar la base de datos
    $ knex migrate:rollback // para revertir la creacion de tablas realizada
0210. Modificar carpetas migrations, seeds, models, apiRouter.js, styles.css, et. al.
