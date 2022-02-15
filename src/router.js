import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import Empleado from '@/views/Empleado'
import Error404 from '@/views/Error404'
import Materiales from '@/views/Materiales'
import Muebles from '@/views/Muebles'
import Nomina from '@/views/Nomina'
import Pedidos from '@/views/Pedidos'

Vue.use(Router)


export default new Router({
    mode: `history`,
    routes:[
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/Empleado',
            name: 'Empleado',
            component: Empleado
        },
        {
            path: '*',
            name: 'error404',
            component: Error404
        },
        {
            path: '/Materiales',
            name: 'Materiales',
            component: Materiales
        },
        {
            path: '/Muebles',
            name: 'Muebles',
            component: Muebles
        },
        {
            path: '/Nomina',
            name: 'Nomina',
            component: Nomina
        },
        {
            path: '/Pedidos',
            name: 'Pedidos',
            component: Pedidos
        }
    ]
})