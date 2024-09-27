// Archivo de creación y configuración del Router.
import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router';
import Home from '../pages/Home.vue';
import Chat from '../pages/Chat.vue';
import Login from '../pages/Login.vue';
import Register from '../pages/Register.vue';
import MyPerfil from '../pages/MyProfile.vue';
import MyPerfilEditar from '../pages/MyperfileEdit.vue';

// Definimos las rutas.
const routes = [
    { path: '/',                    component: Home, },
    { path: '/chat',                component: Chat, },
    { path: '/iniciar-sesion',      component: Login, },
    { path: '/registrarse',         component: Register, },
    {path: '/mi-perfil',            component: MyPerfil,},
    {path: '/mi-perfil/editar',     component: MyPerfilEditar,},
];

// Creamos el router.
// createRouter() recibe un objeto con al menos dos propiedades: routes y
//  history.
// Para history, Vue Router incluye dos opciones:
// - createWebHashHistory()
//  Utiliza el hash ("#") para indicar la ruta a mostrar.
// - createWebHistory()
//  Utiliza la API de History de JS.
// ¿Cuál conviene?
// Desde el punto de vista del SEO, createWebHistory es infinitamente mejor.
// Por esto, de poder usarlo, es lejos la mejor opción.
// ¿Por qué "de poder usarlo"?
// Porque para que funcione adecuadamente en una web, es necesario configurar
// el servidor de una manera especial.
const router = createRouter({
    // routes: routes,
    routes,
    history: createWebHashHistory(),
    // history: createWebHistory(),
});

export default router;