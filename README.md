# SUMA EMPA

## ¿Qué es SUMA EMPA?
SUMA EMPA es el Sistema Unificado de Material para Alumnos de la EMPA (Escuela de Música Popular de Avellaneda). En este sitio vas a encontrar material útil para seguir cualquiera de las carreras que se dictan en la EMPA.

Este sitio está consruido por y para alumnos y no posee afiliación oficial con la EMPA.

## Cómo colaborar
Si tenes material y querés que sea agregado al sitio, te recomendamos acercarte al grupo [**EMPA Biblioteca**](https://t.me/joinchat/DFRadxWqsZ9eX8BRqst6rA) en Telegram. De paso podés visitar el resto de los grupos para alumnos disponibles. Para mas información podes visitar la página de [EMPA en Telegram](https://empaentelegram.github.io/).

Otra forma de colaborar es abriendo issues desde la página de github o mandando pull requests si sabes como hacerlo. Mas información abajo.

## Formato del material disponible
El sutio SUMA EMPA no almacena ningún archivo y por lo tanto requiere de servidores de terceros para alojar los contenidos. Recomendamos usar algún servicio confiable como [Google Drive](https://drive.google.com/) o similar para garantizar la disponibilidad del material para tus compañeros.

Para cargar el material al sitio es necesario crear un nuevo archivo en formato [yaml](https://es.wikipedia.org/wiki/YAML) y guardarlo en la carpeta **material**. Puede estar en cualquier subcarpeta, es conveniente elegir su ubicación de forma organizada.

A modo de ejemplo se muestra un posible archivo de material:

``` yml
nombre: Cuadernillo numero 1 - Piano
descripcion: Cuadernillo básico de la primer práctica de piano para el segundo nivel.
materias:
  - foba2/piano
instrumentos:
  - piano
tipo: apunte
icono: pdf
url: http://www.link_al_archivo.com/archivo.pdf
```

