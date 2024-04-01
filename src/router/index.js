import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const scrollBehavior = (to, from, savedPosition) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            if (savedPosition) {
                resolve(savedPosition)
            } else {
                resolve({ x: 0, y: 0 })
            }
        }, 100)
    })
}

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'Home',
            component: HomeView,
        },
        {
            path: '/search',
            name: 'Search',
            component: () => import('../views/SearchView.vue'),
        },
        {
            path: '/show/:id',
            name: 'Show',
            component: () => import('../views/ShowView.vue'),
            props: true,
        },
    ],
    scrollBehavior,
})

export default router
