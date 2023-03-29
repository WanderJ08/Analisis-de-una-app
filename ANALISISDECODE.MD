<center> <h1>ANALISIS DE SISTEMAS</h1> </center> 

#### En este documento markdown voy a mostrarles las partes del codigo que considero mas importantes de resaltar, de forma detallada y las que no sean mencionadas podran revisar para que sirve en el marco teorico del README.MD

**-Pero hay algunas notas que quisiera que leyeran acerca de algunas herramientas del code:**

- Los keys.js que se encuentran en la app se encargan de las variables de conexion para redis y las variables de conexion para postgre

- Postgre es una base de datos SQL y redis es una base de datos en la cache 

- Los docker file sirven para instalar todas las dependencias del programa

- El docker compose sirve para poder ejecutar los contenedores en la misma red interna y establecer las variables de conexion a las bases de datos

- La carpeta public contiene herramientas de diseño que fueron utilizadas, viene con react de forma predeterminada
#
#

**A continuacion veremos las partes de codigo comentadas y con su ubicacion en la parte superior de la imagen**
- default.conf: Se encuentra en la carpeta nginx

![foto1](/imagenes/1.jpg)

#

- index.js: Se encuentra en la carpeta worker

![foto2](/imagenes/2.jpg)

#

- index.js: Se encuentra en la carpeta server

![foto3](/imagenes/3.jpg)

![foto4](/imagenes/4.jpg)

#

- apps.js: Se encuentra en la carpeta src

![foto5](/imagenes/5.jpg)

#

- fib.js: Se encuentra en la carpeta src

![foto6](/imagenes/6.jpg)

![foto7](/imagenes/7.jpg)

#

- otherpage.js: Se encuentra en la carpeta src

![foto8](/imagenes/8.jpg)


