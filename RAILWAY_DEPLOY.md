# Despliegue en Railway - Guía Paso a Paso

## 📦 Parte 1: Desplegar Backend (WebSocket Server)

### 1️⃣ Crear repositorio en GitHub

```bash
cd c:\AppServ\www\bot
git init
git add .
git commit -m "WebSocket bot server for Railway"
```

### 2️⃣ Subir a GitHub
1. Ve a https://github.com y crea un nuevo repositorio llamado `websocket-bot-server`
2. NO inicialices con README
3. Copia los comandos y ejecuta:

```bash
git remote add origin https://github.com/TU_USUARIO/websocket-bot-server.git
git branch -M main
git push -u origin main
```

### 3️⃣ Desplegar en Railway
1. Ve a https://railway.app
2. Click en **"Login"** → Inicia sesión con GitHub
3. Click en **"New Project"**
4. Selecciona **"Deploy from GitHub repo"**
5. Autoriza Railway para acceder a GitHub
6. Selecciona el repositorio `websocket-bot-server`
7. Railway detectará PHP automáticamente
8. Espera que termine el despliegue (2-3 minutos)

### 4️⃣ Obtener URL del WebSocket
1. En Railway, click en tu proyecto
2. Ve a la pestaña **"Settings"**
3. Busca **"Domains"** → Click en **"Generate Domain"**
4. Copia la URL (ejemplo: `websocket-bot-server-production.up.railway.app`)
5. Tu WebSocket estará en: `wss://websocket-bot-server-production.up.railway.app`

---

## 🌐 Parte 2: Configurar Frontend (Vercel)

### 1️⃣ Actualizar repositorio del portafolio

```bash
cd "C:\Users\Antonio Dimas\Documents\portafolio"
git add .
git commit -m "Add WebSocket chat bot with Railway integration"
git push
```

### 2️⃣ Configurar variable de entorno en Vercel
1. Ve a https://vercel.com/dashboard
2. Selecciona tu proyecto del portafolio
3. Ve a **"Settings"** → **"Environment Variables"**
4. Agrega nueva variable:
   - **Name:** `VITE_WEBSOCKET_URL`
   - **Value:** `wss://TU-URL-DE-RAILWAY.up.railway.app` (la que copiaste)
   - **Environment:** Production, Preview, Development (selecciona todas)
5. Click en **"Save"**

### 3️⃣ Redesplegar en Vercel
1. Ve a **"Deployments"**
2. Click en el último deployment → **"..."** → **"Redeploy"**
3. O simplemente haz push a tu repo y se desplegará automáticamente

---

## ✅ Verificar que funciona

### Backend (Railway)
1. En Railway, ve a **"Deployments"** → Click en el activo
2. Ve a **"View Logs"**
3. Deberías ver: `🚀 Servidor WebSocket iniciado en ws://0.0.0.0:XXXX`

### Frontend (Vercel)
1. Abre tu portafolio en producción
2. Haz clic en el botón flotante del chat
3. Debería mostrar **"Conectado"** en verde
4. Escribe "Hola" → El bot debe responder

---

## 🐛 Troubleshooting

### El bot no se conecta:
- Verifica que Railway muestre el servidor corriendo en los logs
- Verifica que la URL en Vercel sea correcta (debe empezar con `wss://`)
- Asegúrate de haber redeployado después de agregar la variable

### Error de CORS:
- Railway maneja CORS automáticamente para WebSockets
- Si tienes problemas, el servidor ya está configurado correctamente

### El servidor se detiene:
- Railway puede reiniciar servicios inactivos
- Considera el plan Pro de Railway para mejor uptime ($5/mes)

---

## 💰 Costos

- **Railway:** Gratis hasta 500 horas/mes (suficiente para un bot)
- **Vercel:** Gratis para proyectos personales
- **Total:** $0/mes 🎉

---

## 📊 Monitoreo

### Railway:
- Ve a **"Metrics"** para ver uso de CPU/RAM
- Ve a **"Logs"** para debug

### Vercel:
- Ve a **"Analytics"** para ver tráfico
- Ve a **"Functions"** logs si tienes errores

---

¡Listo! Tu bot estará funcionando en producción 🚀
