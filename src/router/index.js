import {createRouter, createWebHistory} from "vue-router";
import Register from "../pages/Register.vue";
import Login from "../pages/Login.vue";
import Home from "../pages/Home.vue";
import Dashboard from "../pages/Dashboard.vue";
import Profile from "../pages/Profile.vue";

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
            component: Home
        },
        {
            path: '/dashboard',
            name: 'dashboard',
            component: Dashboard
        },
        {
            path: '/profile',
            name:'profile',
            component: Profile
        }
    ]
})

export default router
