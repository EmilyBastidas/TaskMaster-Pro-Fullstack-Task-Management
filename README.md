# Taskify

Taskify es una aplicación web de gestion de tareas diseñada para ayudar a los usuarios a organizar sus actividades diarias, aumentar su productividad y reducir el riesgo de olvidar tareas importantes.

La aplicación permite crear, visualizar y eliminar tareas mediante una interfaz intuitiva y una arquitectura Full Stack moderna basada en React, Express y PostgreSQL.

---

## Autor

Mi nombre es Emily Bastidas y soy desarrolladora Full Stack en formación, desarrollé Taskify como parte de mi proceso de aprendizaje en desarrollo web moderno, con el objetivo de profundizar mis conocimientos en:

- Desarrollo Frontend con React
- Desarrollo Backend con Node.js y Express
- Bases de datos relacionales con PostgreSQL
- Autenticación mediante JSON Web Tokens (JWT)
- Despliegue de aplicaciones en la nube
- Arquitectura cliente-servidor

Este proyecto representa una implementación completa de una aplicación Full Stack funcional desplegada en producción.

---

## Problema

La gestión del tiempo y la organización personal son desafíos comunes en la vida cotidiana.

Diversos estudios indican que una parte importante de las personas olvida tareas, compromisos o actividades importantes debido a la sobrecarga de información y a la falta de sistemas efectivos de seguimiento.

Según investigaciones sobre productividad y memoria prospectiva, entre un 40% y un 60% de las personas reportan olvidar regularmente tareas pendientes o compromisos programados.

Esta situación puede generar:

- Disminución de la productividad
- Estrés innecesario
- Retrasos en actividades importantes
- Dificultades para mantener hábitos organizados

Taskify nace como una solución simple para registrar, visualizar y gestionar tareas desde cualquier dispositivo con acceso a internet.

---

## Objetivos de la aplicación

- Centralizar la gestión de tareas personales.
- Permitir un acceso rápido desde cualquier navegador.
- Facilitar el seguimiento de actividades pendientes.
- Proporcionar una experiencia de usuario sencilla y eficiente.
- Aplicar buenas prácticas de desarrollo Full Stack.

---

## Características actuales

### Autenticación

- Registro de usuarios.
- Inicio de sesión seguro.
- Protección de rutas mediante JWT.
- Persistencia de sesión mediante token.

### Gestión de tareas

- Crear tareas.
- Visualizar tareas registradas.
- Eliminar tareas.
- Asociación de tareas con usuarios autenticados.

### Infraestructura

- Base de datos PostgreSQL.
- Backend desplegado en Render.
- Frontend desplegado en Vercel.
- Variables de entorno protegidas.

---

## Arquitectura del proyecto

### Frontend

Tecnologías utilizadas:

- React
- Vite
- Bootstrap 5.3
- React Router

Responsabilidades:

- Interfaz de usuario.
- Gestión de estado.
- Consumo de la API.
- Validación de formularios.
- Navegación protegida.

### Backend

Tecnologías utilizadas:

- Node.js
- Express
- JWT
- Bcrypt

Responsabilidades:

- Autenticación de usuarios.
- Validación de solicitudes.
- Gestión de tareas.
- Comunicación con la base de datos.

### Base de datos

Tecnología:

- PostgreSQL (Neon)

Entidades principales:

#### Users

| Campo    | Tipo    |
| -------- | ------- |
| id       | Integer |
| email    | String  |
| password | String  |

#### Tasks

| Campo   | Tipo    |
| ------- | ------- |
| id      | Integer |
| title   | String  |
| user_id | Integer |

Relación:

```text
User (1) -------- (N) Tasks
```

---

## Flujo de autenticación

```text
Usuario
    |
    v
Login
    |
    v
Backend (Express)
    |
    v
Validación de credenciales
    |
    v
JWT
    |
    v
Frontend
    |
    v
Acceso a rutas protegidas
```

---

## Estructura del proyecto

```text
todo_app
│
├── backend
│   ├── src
│   │   ├── controllers
│   │   ├── middleware
│   │   ├── routes
│   │   ├── services
│   │   ├── db
│   │   └── app.js
│   └── package.json
│
└── frontend
    ├── src
    │   ├── api
    │   ├── components
    │   ├── pages
    │   ├── assets
    │   └── main.jsx
    └── package.json
```

---

## Tecnologías utilizadas

### Frontend

- React
- Vite
- Bootstrap 5.3
- React Router DOM
- React Icons

### Backend

- Node.js
- Express
- JWT
- Bcrypt

### Base de datos

- PostgreSQL
- Neon

### Deploy

- Vercel
- Render

### Control de versiones

- Git
- GitHub

---

## Futuras mejoras

Actualmente me encuentro trabajando en nuevas funcionalidades para mejorar la experiencia del usuario y ampliar el alcance del proyecto.

### Dashboard de productividad

- Resumen de tareas completadas.
- Estadísticas de productividad.
- Indicadores visuales.
- Métricas de progreso.

### Gestión avanzada de tareas

- Edición de tareas.
- Estados personalizados.
- Prioridades.
- Categorías.

### Experiencia de usuario

- Modo oscuro.
- Diseño responsive mejorado.
- Animaciones e interacciones avanzadas.

### Seguridad

- Recuperación de contraseña.
- Verificación de correo electrónico.
- Renovación automática de tokens.

### Productividad

- Recordatorios.
- Fechas límite.
- Calendario integrado.
- Notificaciones.

---

## Estado del proyecto

Actualmente el proyecto se encuentra en desarrollo activo.

Las funcionalidades principales están implementadas y desplegadas en producción. Las próximas versiones incorporarán herramientas de análisis y seguimiento de productividad mediante un dashboard interactivo.

---

## Licencia

Este proyecto fue desarrollado con fines educativos, de aprendizaje y de portafolio profesional.
