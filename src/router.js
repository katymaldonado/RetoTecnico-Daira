import { createRouter, createWebHistory } from "vue-router";

import Formulario from "./components/Formulario/index.vue";
import Historial from "./components/Historial.vue";


const routes = [
    { path: '/', component: Formulario },
    { path: '/historial', component: Historial }
    
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router