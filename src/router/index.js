import { createRouter, createWebHistory } from 'vue-router';
import InicioVista from '../components/IndexVista.vue';
import AcercaVista from '../components/AcercaVista.vue';
import DetalleVista from '../components/DetalleVista.vue';
import DetalleClimaVista from '../components/DetalleClimaVista.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    
    routes: [
        {
            path: '/',
            redirect: '/inicio'
        },
        {
            path: '/inicio',
            name:'inicio',
            component: InicioVista
        },
        {
            path: '/acerca',
            name:'acerca',
            alias:['/nosotros','/somos'],
            component: AcercaVista
        },
        {
            path: '/clima/:id/detalle',
            name: 'detalleClima',
            component: DetalleClimaVista,
            props: true
        },
        {
            path: '/clima/detalle',
            name: 'detalle',
            component: DetalleVista,
            props: true
        }
    ]
});

export default router;