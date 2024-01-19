# Dashboard Server

Este es el servidor para el proyecto de dashboard. Proporciona una API para gestionar reservas, habitaciones, contactos y usuarios.

## Instalación

1. Clona el repositorio:

   ```bash
   git clone https://github.com/tu-usuario/dashboard-server.git
   ```

2. Instala las dependencias:

   ```bash
   cd dashboard-server
   npm install
   ```

3. Configura las variables de entorno:

   Crea un archivo `.env` en la raíz del proyecto y define las variables de entorno necesarias. Puedes seguir el formato de `.env.example` como guía.

## Uso

- Inicia el servidor en modo de desarrollo:

  ```bash
  npm start
  ```

- Ejecuta pruebas:

  ```bash
  npm test
  ```

- Compila el código TypeScript:

  ```bash
  npm run build
  ```

- Despliega en AWS Lambda con Serverless:

  ```bash
  npm run deploy
  ```

- Elimina la instancia desplegada:

  ```bash
  npm run remove
  ```

## Tecnologías Utilizadas

- Express: Framework web para Node.js.
- MongoDB: Base de datos NoSQL para almacenar datos.
- Serverless: Framework para desplegar aplicaciones serverless en la nube.
