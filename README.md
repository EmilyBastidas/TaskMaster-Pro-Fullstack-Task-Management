# TaskMaster Pro: Fullstack Task Management

Es una plataforma integral para la gestión de productividad personal, permitiendo a los usuarios organizar sus tareas diarias bajo un entorno seguro con persistencia de datos y autenticación robusta.

## Tecnologías Utilizadas

## Frontend

vite

(JSX)Interfaz de usuario dinámica y reactiva.

EstilosBootstrap v5.3.8 & CSS

EstadoReact HooksuseState, useEffect, useContext para flujo de datos.

## Backend

- Node.js : será el cerebro del proyecto:

* dependencias
* scripts
* metadata

npm init -y

- Seguridad JWT (JSON Web Tokens)Manejo de sesiones y protección de rutas.

- Express: Node solo puede crear servidores de forma muy manual, simplifica y hace la API más ligera:

* rutas
* requests
* responses
* middleware

npm install express

- Nodemon: Reinicia el servidor automáticamente cuando guardo cambios

npm install -D nodemon

# DB

- PostgreSQL (neon)

## Rutas o archivos

-todo_app

backend/app.js
frontend/src/components/views

## Características Técnicas

Autenticación: Registro de usuarios, Login y generación de tokens.

Validaciones Dinámicas: Manejo de errores en inputs (campos vacíos, formato de email) tanto en Front como en Back.

Gestión de Estado Global: Uso de hooks para que el token de acceso esté disponible en toda la App.

CRUD Protegido: Operaciones (Crear, Editar, Eliminar) que solo se ejecutan si el token es válido.

Persistencia: Consumo de API propia creada desde cero.

# Arquitectura de mi proyecto:

todo-list-app/
│
├── backend/
│ ├── src/
│ │ ├── routes/
│ │ ├── controllers/
│ │ ├── services/
│ │ ├── db/
│ │ └── app.js
│ ├── package.json
│ └── .env
│
├── frontend/
│ ├── src/
│ │ ├── api/
│ │ ├── components/
│ │ ├── pages/
│ │ ├── hooks/
│ │ └── App.jsx
│ ├── package.json
│ └── .env
│
├── README.md
└── .gitignore
