// import {createRouter, createWebHistory,} from 'vue-router'
import VueRouter from 'vue-router'
import Vue from "vue";


Vue.use(VueRouter)

const routes = [
    {
        path: "/home",
        name: "首页",
        component: () => import("../components/Home.vue")
    },
    {
        path: "/about",
        name: "关于",
        component: () => import("../components/About.vue")
    }
]

const router = new VueRouter({
    routes
})

export default router