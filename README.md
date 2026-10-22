# Trabajo Practico 06: Refactorizacion y Modularizacion

## Proyecto de partida y cambios
El proyecto de partida corresponde a la aplicacion del Trabajo Practico 05(gestion de reservas de salas de estudio en un unico archivo o estructura acoplada). Los cambios realizados consisten en la refactorizacion completa hacia una arquitectura modular utilizando CommonJS, separando la logica en controladores, rutas, servicios y middlewares dedicados.

## Instalacion y ejecucion
1. Clonar el repositorio:
   git clone <>
2. Instalar las dependencias del proyecto:
   npm install
3. Iniciar el servidor local:
   npm start
4. Acceder en el navegador a:
   http://localhost:3000

## Configuracion del entorno
La aplicacion utiliza commonJs(require y module.exports) para la gestion de modulos de Node.js. Los archivos estaticos se sirven desde la carpeta publica mediante el middleware nativo de Express(express.static), y las variables de configuracion y puertos se manejan de manera centralizada en la estructura del codigo.

## Mapa de modulos y dependencias
* public/: Carpeta de recursos estaticos(hojas de estilo CSS e imagenes).
* src/app.js: Archivo central que inicializa Express, configura los middlewares globales y enlaza las rutas principales.
* src/controladores/: Modulos responsables de recibir las peticiones HTTP, interactuar con los servicios y renderizar las vistas correspondientes.
* src/rutas/: Modulos que definen los endpoints y derivan las solicitudes hacia los controladores especificos.
* src/servicios/: Capa encargada de la logica de negocio y el manejo de los datos de reservas y solicitudes.
* src/middleware/: Funciones intermedias para el filtrado, validacion y control de flujo de las peticiones.
* src/views/: Plantillas EJS para la generacion dinamica de la interfaz de usuario.
* index.js: Punto de entrada principal para arrancar la aplicacion.

## Pipeline y contrato de rutas
El pipeline de procesamiento ejecuta middlewares globales de parseo y configuracion estatica, seguido por las rutas modulares. El contrato de endpoints verificado es el siguiente:
* GET/ - Pagina de bienvenida / inicio (Verificado)
* GET/reservas - Listado general de reservas (Verificado)
* GET/reservas/nueva - Formulario de creacion de reserva (Verificado)
* GET/reservas/:id - Detalle de una reserva especifica por su identificador (Verificado)
* GET/solicitudes/estado - Retorno del estado de solicitudes en formato JSON (Verificado)

## Matriz antes/despues
* Antes (TP 05): Arquitectura con rutas, logica de negocio y configuracion mezcladas en un archivo central o pocos componentes acoplados.
* Despues (TP 06): Arquitectura desacoplada en capas (rutas, controladores, servicios y middlewares), facilitando el mantenimiento, la escalabilidad y la lectura del codigo fuente.

## Formato y analisis estatico
El proyecto respeta las buenas practicas de desarrollo en Node.js, manteniendo una identacion estandar, nombres de archivos y carpetas descriptivos en minusculas con guiones medios, separacion por modulos y codigo limpio sin redundancias.

## Persistencia temporal y limites
La aplicacion utiliza persistencia basada en almacenamiento temporal en memoria / archivos JSON locales mediante la capa de servicios, operando bajo los limites estandar de una aplicacion local de Node.js sin bases de datos relacionales externas persistentes en esta etapa.

## Autor
* Nombre: Mario Valentin Rodriguez