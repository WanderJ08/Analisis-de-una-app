<center> <h1>Universidad Católica del Cibao</h1> </center>
<center><img src="./multimedia/logo.png" height="150" width="200"></center>

<center> <h2>Asignatura</h2> </center>
<center> <h4>Analisis De Sistemas</h4> </center>
<center> <h2>Facilitador</h2> </center>
<center> <h4>Lizandro Ramírez</h4> </center>
<center> <h2>Alumno</h2> </center>
<center> <h4>Wander Jerez</h4> </center>
<center> <h2>Matricula</h2> </center>
<center> <h4>2021-0990</h4> </center>

#
#


#
#

*Como estudiantes de ingeniería en sistemas es sin duda fundamental que conozcamos acerca de como se desarrolla una app, pero para saberlo tenemos primero que saber analizar el funcionamiento de algunas otras que ya estén creadas, para ayudarnos en esto nuestro maestro nos ha asignado el análisis de una pequeña app, análisis el cual presentaré a continuación:*

<center> <h2>Marco teorico</h2> </center>

**Las herramientas utilizadas en esta app fueron:**

**- Base de datos:** *la base de datos es una parte esencial de cualquier aplicación web. Almacenar y recuperar datos es fundamental para muchas funciones de la aplicación. En nuestra aplicación, utilizamos una base de datos SQL para almacenar información sobre los usuarios y sus datos.*

**- API Rest:** *la API Rest es una interfaz que permite a los usuarios interactuar con la aplicación a través de solicitudes HTTP. Nuestra aplicación utiliza una API Rest para permitir a los usuarios acceder a sus datos y realizar acciones en la aplicación.*

**- Cliente web con React:** *el cliente web es la parte de la aplicación que los usuarios ven y con la que interactúan directamente. En nuestra aplicación, utilizamos React para construir un cliente web dinámico y fácil de usar.*

**- Redis:** *Redis es una base de datos en memoria que se utiliza para almacenar datos en caché y acelerar la velocidad de la aplicación. En nuestra aplicación, utilizamos Redis para almacenar en caché algunos de los datos de los usuarios y reducir el tiempo de respuesta de la aplicación.*

**- Servicio worker:** *un servicio worker es un proceso en segundo plano que puede realizar tareas complejas en la aplicación sin afectar la interfaz de usuario. En nuestra aplicación, utilizamos un servicio worker para simular cálculos complejos en segundo plano y mejorar la velocidad y capacidad de respuesta de la aplicación.*

**- Package.json** *es un archivo que se utiliza en proyectos de Node.js para describir el proyecto y sus dependencias. Contiene información sobre el nombre del proyecto, la versión, el autor, la licencia, las dependencias y otros metadatos del proyecto. Este archivo es importante porque ayuda a los desarrolladores a especificar las dependencias necesarias para que la aplicación funcione correctamente.*

**- React** *es una biblioteca de JavaScript de código abierto que se utiliza para construir interfaces de usuario (UI) interactivas y reutilizables. Fue desarrollado por Facebook en 2011 y se ha convertido en una de las bibliotecas más populares para el desarrollo de aplicaciones web modernas. React utiliza un enfoque declarativo para la construcción de UI, lo que significa que los desarrolladores pueden especificar cómo se debe ver la interfaz de usuario en función del estado actual de la aplicación. React actualiza automáticamente la interfaz de usuario cuando cambia el estado de la aplicación.*

**- NGINX** *es un servidor web de código abierto que se utiliza para servir contenido web estático y dinámico. Fue creado por Igor Sysoev en 2002 y se ha convertido en uno de los servidores web más populares del mundo. NGINX se utiliza como un servidor proxy inverso para distribuir el tráfico web entre varios servidores web backend. También se utiliza como un balanceador de carga para distribuir el tráfico web entre varios servidores de aplicaciones. Además, NGINX se utiliza para la caché de contenido web, la autenticación y autorización de usuarios, la compresión de contenido y la configuración de seguridad web.*

**- Docker Compose** *es una herramienta que simplifica la creación, configuración y ejecución de aplicaciones Docker multi-contenedor al permitir que los desarrolladores definan y configuren todos los servicios de la aplicación en un solo archivo YAML. Esto facilita la creación de aplicaciones complejas y la configuración de múltiples entornos.*

**- JavaScript** *es un lenguaje de programación de alto nivel utilizado principalmente para crear aplicaciones web interactivas. Fue creado por Brendan Eich en 1995 y es un lenguaje interpretado que se ejecuta en el lado del cliente (navegador web) y en el lado del servidor (Node.js). JavaScript se utiliza para agregar interactividad y dinamismo a las páginas web, permitiendo a los desarrolladores crear efectos visuales, animaciones, validación de formularios y otras funcionalidades interactivas. También se utiliza para crear aplicaciones web complejas, incluyendo aplicaciones de una sola página (SPA) y aplicaciones de tiempo real.*

**- Node.js** *es un entorno de tiempo de ejecución de JavaScript de código abierto utilizado principalmente para crear aplicaciones web del lado del servidor. Es escalable, eficiente, rápido y cuenta con una gran cantidad de módulos y paquetes de código abierto para facilitar la creación de aplicaciones web complejas.*
#
#


<center> <h2>Prueba de funcionamiento</h2> </center>

*Acceda al enlace para ver el video de la prueba de funcionamiento con un posible caso de uso y un posible caso de error*

https://drive.google.com/file/d/15PXXjYmUi586qZ2XWd_awaXCLolO5vrL/view?usp=share_link
#

<center> <h2>Analisis de code</h2> </center>

*Si le interesa ver las partes "mas importante" del codigo utilizado comentadas y explicadas acceda a este enlace*

- [ANALISIS DE CODE](/.ANALISISDECODE.md)



<center> <h2>Conclusion</h2> </center>

*En conclusion podria decir que el analisis de esta app, me ha ayudado a conocer un poco acerca de poco se interconectan algunas herramientas para el desarrollo de una aplicacion web, tambien me ha ayudado a comprender que por lo general para el desarrollo de una app se requieren de varios lenguajes de programacion, y que una app "simple" requiere de mucho trasfondo.*
#


<center> <h2>Casos de mejora</h2> </center>

- Los campos no se actualizan automaticamente cuando enviamos unos nuevos indices o valores, tenemos que actualizar la pagina manualmente(En el video podrá notar que yo ya he hecho esa mejora en el código, simplemente agregando 2 funciones en una parte de código). Con este pequeño cambio cuando demos a enviar datos automaticamente los cambios se veran reflejados en la parte inferior sin necesidad de actualizar la pagina.

evidencia del codigo:
![evidencia](/multimedia/evidencia.jpg)

Las funciones han sido fetchValues y FetchIndexes
#


- Diseño muy simple

- Se puede agregar el mismo índice, por lo cual no existe cambio en la muestra de resultados, se debería de agregar un apartado para evitar que se pueda agregar un mismo índice




