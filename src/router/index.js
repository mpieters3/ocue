import Vue from 'vue'
import VueRouter from 'vue-router'
import goTo from 'vuetify/es5/services/goto'
import Missing from '../views/404.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'LandingHome',
        meta: {
            title: 'OCUE - Orange County Underwater Explorers'
        },
        component: () =>
            import ('../views/Home.vue')
    },
    {
        path: '*',
        component: Missing,
        meta: {
            title: '404 - OCUE'
        },
    }
]

const router = new VueRouter({
    base: '/',
    routes,
    scrollBehavior: (to, from, savedPosition) => {
        let scrollTo = 0

        if (to.hash) {
            scrollTo = to.hash
        } else if (savedPosition) {
            scrollTo = savedPosition.y
        }

        return goTo(scrollTo)
    },
})

router.beforeEach((to, from, next) => {
    document.title = to.meta.title
    next()
})


export default router