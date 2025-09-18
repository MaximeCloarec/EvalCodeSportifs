import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            name: "home",
            component: () => import("../pages/home.vue"),
        },
        {
            path: "/exo",
            name: "Exercice",
            component: () => import("../pages/exercice.vue"),
        },
        {
            path: "/contact",
            name: "Contact",
            component: () => import("../pages/contact.vue"),
        },
    ],
});

export default router;
