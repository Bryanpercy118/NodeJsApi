---
# API de Gestión de Estudiantes

Esta API en Node.js proporciona operaciones básicas CRUD (Crear, Leer, Actualizar y Borrar) para gestionar datos de estudiantes. Utiliza Express.js para el enrutamiento y el manejo de solicitudes HTTP.

## Funcionalidades

- **Obtener mensaje de bienvenida**: Accede a la ruta raíz (`/`) para recibir un mensaje de bienvenida.

- **Obtener lista de estudiantes**: Realiza una solicitud GET a `/api/students` para obtener la lista completa de estudiantes almacenados.

- **Buscar estudiante por ID**: Utiliza una solicitud GET a `/api/students/:id` para buscar un estudiante por su ID. Si se encuentra el estudiante, se devuelve un mensaje indicando que fue encontrado; de lo contrario, se devuelve un mensaje de error.

- **Agregar nuevo estudiante**: Envía una solicitud POST a `/api/students` con los datos del estudiante en formato JSON para agregar un nuevo estudiante a la lista.

- **Eliminar estudiante por ID**: Utiliza una solicitud DELETE a `/api/students/:id` para eliminar un estudiante según su ID. Si se encuentra el estudiante, se elimina de la lista y se devuelve un mensaje indicando que fue eliminado; de lo contrario, se devuelve un mensaje de error.

## Datos de Estudiantes

La API utiliza una matriz llamada `students` para almacenar los datos de los estudiantes. Cada estudiante tiene los siguientes campos:
- ID: Identificador único del estudiante.
- Nombre: Nombre del estudiante.
- Edad: Edad del estudiante.
- Matrícula: Estado de matrícula del estudiante.

## Uso

1. Clona este repositorio en tu máquina local.
2. Instala las dependencias utilizando `npm install`.
3. Inicia el servidor ejecutando `npm start`.
4. Realiza las solicitudes HTTP a las rutas mencionadas anteriormente para interactuar con la API.

## Contribución

¡Siéntete libre de contribuir con mejoras a esta API! Puedes enviar un pull request con tus cambios o sugerencias.

## Contacto

Si tienes alguna pregunta o comentario, no dudes en ponerte en contacto con el equipo de desarrollo en [bryanpercy118@gmail.com](mailto:bryanpercy118@gmail.com).

--- 
