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

## Desafíos técnicos enfrentados

Durante el desarrollo de Taskify se resolvieron distintos desafíos técnicos relacionados con:

- Implementación de autenticación basada en JWT.
- Protección de rutas privadas.
- Integración entre frontend y backend.
- Persistencia de datos en PostgreSQL.
- Manejo de estados en React.
- Configuración de variables de entorno para distintos entornos.
- Despliegue Full Stack utilizando Vercel, Render y Neon.
- Gestión de credenciales y seguridad básica de la aplicación.

---

## Problema

La gestión del tiempo y la organización personal representan uno de los principales desafíos de productividad en la vida cotidiana.

Diversas investigaciones sobre memoria prospectiva (la capacidad de recordar realizar acciones planificadas en el futuro) indican que las personas suelen olvidar entre el 50% y el 80% de las intenciones que no registran en sistemas externos de organización.

Además, estudios publicados por la American Psychological Association (APA) y diversos investigadores en psicología cognitiva muestran que la sobrecarga de información, las interrupciones constantes y la multitarea incrementan significativamente la probabilidad de olvidar tareas y compromisos importantes.

Las consecuencias más frecuentes incluyen:

- Disminución de la productividad.
- Retrasos en actividades importantes.
- Estrés y carga mental innecesaria.
- Dificultad para mantener hábitos organizados.

Taskify fue desarrollado como una herramienta sencilla y accesible para ayudar a las personas a registrar, organizar y completar sus tareas de manera eficiente desde cualquier dispositivo con acceso a internet.

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

## Arquitectura general

```text
┌─────────────┐
│   React     │
│  Frontend   │
└──────┬──────┘
       │ HTTP / JSON
       ▼
┌─────────────┐
│   Express   │
│   Backend   │
└──────┬──────┘
       │ SQL
       ▼
┌─────────────┐
│ PostgreSQL  │
│    Neon     │
└─────────────┘
```

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

## Roadmap

### Versión 1.1

- Edición de tareas.
- Filtros por estado.
- Contador dinámico de tareas completadas.

### Versión 1.2

- Dashboard de productividad.
- Gráficos y estadísticas.
- Métricas semanales y mensuales.

### Versión 1.3

- Fechas límite.
- Recordatorios.
- Notificaciones.

### Versión 2.0

- Colaboración entre usuarios.
- Equipos y proyectos compartidos.
- Aplicación móvil.

## Estado del proyecto

Actualmente el proyecto se encuentra en desarrollo activo.

Las funcionalidades principales están implementadas y desplegadas en producción. Las próximas versiones incorporarán herramientas de análisis y seguimiento de productividad mediante un dashboard interactivo.

---

## Demo

Frontend:
https://task-master-pro-fullstack-task-management-l0oqugrag.vercel.app

Backend API:
https://taskmaster-pro-fullstack-task-management-m920.onrender.com

## Licencia

Este proyecto fue desarrollado con fines educativos, de aprendizaje y de portafolio profesional.

## Referencias

- American Psychological Association (APA)
- Einstein, G. O., & McDaniel, M. A. (Prospective Memory Research)
- Journal of Applied Psychology
- Harvard Business Review – Productivity and Task Management Studies
