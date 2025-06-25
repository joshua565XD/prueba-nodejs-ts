# SpootyApp - Sistema de Registro de Alumnos

Este proyecto contiene:

- 📦 `back-end/`: API desarrollada con NestJS y MongoDB.
- 🎨 `front-end/`: Aplicación frontend en React usando Vite.

---

## 🔧 Cómo ejecutar

### Backend

1. Navega a la carpeta del backend:
    ```bash
    cd back-end
    ```

2. Instala las dependencias:
    ```bash
    npm install
    ```

3. Ejecuta el servidor en modo desarrollo:
    ```bash
    npm run start:dev
    ```

4. El backend correrá usualmente en [http://localhost:3000](http://localhost:3000).

---

### Frontend

1. Navega a la carpeta del frontend:
    ```bash
    cd front-end
    ```

2. Instala las dependencias:
    ```bash
    npm install
    ```

3. Ejecuta el servidor de desarrollo:
    ```bash
    npm run dev
    ```

4. El frontend se abrirá en [http://localhost:5173](http://localhost:5173) (o el puerto que Vite asigne).

---

## 🛠 Tecnologías utilizadas

- **Backend:**
  - NestJS
  - MongoDB
  - Mongoose
  - TypeScript
- **Frontend:**
  - React
  - Vite
  - TypeScript
  - Tailwind CSS (opcional, si lo usas)
- **Control de versiones:** Git + GitHub

---

## ⚙️ Funcionalidades

- Registro de alumnos con datos personales y académicos.
- Listado, edición y eliminación de alumnos.
- Autenticación básica para proteger las rutas API.

---

## 📁 Estructura del proyecto

prueba-nodejs-ts/
├── back-end/
│ ├── src/
│ ├── package.json
│ └── ...
├── front-end/
│ ├── src/
│ ├── package.json
│ └── ...
└── README.md


---

## 💡 Notas

- Asegúrate de tener MongoDB corriendo localmente o configurar la conexión en el backend.
- Las credenciales para autenticación básica por defecto son:  
  Usuario: `admin`  
  Contraseña: `secret123`

---

## 📚 Documentación

📚 Documentación del framework
NestJS (Back-end)
NestJS es un framework progresivo para construir aplicaciones Node.js escalables y eficientes. Está basado en TypeScript y utiliza conceptos de programación orientada a objetos, funcional y reactiva.

Documentación oficial: https://docs.nestjs.com/

Arquitectura modular que facilita la organización del código.

Uso de decorators para definir controladores, servicios y middleware.

Soporte integrado para validación, autenticación, seguridad y testing.

Compatible con múltiples bases de datos, en este proyecto usamos MongoDB con Mongoose.

React con Vite (Front-end)
React es una biblioteca para construir interfaces de usuario con componentes reutilizables. Vite es una herramienta de build rápida y ligera que acelera el desarrollo front-end con soporte nativo para ES Modules.

Documentación oficial React: https://reactjs.org/docs/getting-started.html

Documentación oficial Vite: https://vitejs.dev/guide/

Desarrollo con JSX y hooks para manejo de estado y efectos.

Vite proporciona un servidor de desarrollo ultra rápido y un sistema optimizado de build.

Integración con TypeScript para mejor experiencia de desarrollo.
---

## 🚀 Cómo contribuir

Si quieres contribuir, haz un fork del repositorio, crea tu rama de feature y luego un pull request.

---

## 📝 Licencia

Este proyecto está bajo la licencia MIT. Consulta el archivo LICENSE para más detalles.

