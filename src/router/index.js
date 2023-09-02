import {createRouter, createWebHistory} from "vue-router";
import Register from "../pages/Register.vue";
import Login from "../pages/Login.vue";
import Home from "../pages/Home.vue";
import Dashboard from "../pages/Dashboard.vue";

const router = createRouter({
    history: createWebHistory(),
    routes:[
        {
            path: '/register',
            name: 'register',
            component: Register
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        },
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/dashboard',
            name: 'dashboard',
            component: Dashboard
        }
    ]
})

export default router
