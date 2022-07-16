# **Frontend English Platform**
Esta es la parte del frontend de la plataforma de inglés y francés para tomar exámenes.

## Pre-requisitos
Se puede instalar de dos formas la plataforma. La primera es teniendo [Node@16](https://nodejs.org/es/) instalado previamente. La segunda es teniendo [Docker](https://www.docker.com/get-started/) instalado.

### Instalación con Node

Para descargar la plataforma abre una línea de comandos y sigue los siguientes comandos:
```bash
git clone git@github.com:utm-platform/platform-frontend.git # Descarga el repositorio
cd platform-frontend # Entr a la carpeta del repositorio
npm install # o `yarn`
```

Hasta ahora ya hemos descargado el repositorio de la plataforma e instalado sus dependencias. Toca levantar el servidor, para ello existen diferentes formas dependiendo lo que quieras realizar.

1. Levantar el servidor en modo desarrollo
```bash
npm run dev # o `yarn dev`
```
2. Levantar el servidor en modo producción
Para esto primero tenemos que compilar el código con el siguiente comando:
```bash
npm run build # o `yarn build`
```
Cuando nuestro código se haya compilado ahora tenemos que levantar el servidor para el modo de producción con el comando:

```bash
npm start # o `yarn start`
```

### Instalación con Docker
Esta manera es mucho más sencilla, simplemente tienes que descargar la imagen en Docker Hub con el siguiente comando:

```bash
docker pull mrkrrot/frontend-english-platform:latest
```
Cuando tengamos descargada la imagen ahora lo único que falta es crear un contenedor con dicha imagen, para ello usaremos el siguiente comando:
```bash
docker run -d --name english-frontend -p 80:3000 mrkrrot/frontend-english-platform:latest
```
Y ya tendrás desplegado en modo producción la plataforma en el puerto 80. Para visitar el servidor abre un navegador y navega en `localhost` y deberá cargar el servidor. La configuración usada es la siguiente:

| Parámetro | Descripción |
|-----------|-------------|
| -d        | Ejecuta el contenedor se ejecute en segundo plano.|
| --name    | Agrega un nombre al contenedor (`english-frontend`) |
| -p        | `80:3000` hace que el puerto `3000` del contenedor se libere al puerto `80` de afuera, el cual podremos acceder a este.|

