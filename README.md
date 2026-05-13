# TaskMaster Pro: Fullstack Task Management

Es una plataforma integral para la gestión de productividad personal, permitiendo a los usuarios organizar sus tareas diarias bajo un entorno seguro con persistencia de datos y autenticación robusta.

# Tecnologías UtilizadasCapaTecnologíaPropósitoFrontendReact.js

(JSX)Interfaz de usuario dinámica y reactiva.

EstilosBootstrap v5.3 & CSS --- Diseño responsivo y componentes modernos.

Backend Python/Node -- API REST para la lógica de negocio.

SeguridadJWT (JSON Web Tokens)Manejo de sesiones y protección de rutas.

EstadoReact HooksuseState, useEffect, useContext para flujo de datos.

# Características Técnicas

Autenticación: Registro de usuarios, Login y generación de tokens.

Validaciones Dinámicas: Manejo de errores en inputs (campos vacíos, formato de email) tanto en Front como en Back.

Gestión de Estado Global: Uso de hooks para que el token de acceso esté disponible en toda la App.

CRUD Protegido: Operaciones (Crear, Editar, Eliminar) que solo se ejecutan si el token es válido.

Persistencia: Consumo de API propia creada desde cero.
