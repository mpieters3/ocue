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
            import ('../views/all-home-version/LandingDarkPortfolio.vue')
    },
    {
        path: '/about',
        name: 'About',
        meta: {
            title: 'About - VueJS Creative Agency and Portfolio Template'
        },
        component: () =>
            import ('../views/About.vue')
    },
    {
        path: '/main-demo',
        name: 'MainDemo',
        meta: {
            title: 'Main Demo - VueJS Creative Agency and Portfolio Template'
        },
        component: () =>
            import ('../views/all-home-version/MainDemo.vue')
    },
    {
        path: '/main-demo-dark',
        name: 'MainDemoDark',
        meta: {
            title: 'Main Demo Dark - VueJS Creative Agency and Portfolio Template'
        },
        component: () =>
            import ('../views/all-home-version/MainDemoDark.vue')
    },
    {
        path: '/creative-agency',
        name: 'CreativeAgency',
        meta: {
            title: 'Creative Agency - VueJS Creative Agency and Portfolio Template'
        },
        component: () =>
            import ('../views/all-home-version/CreativeAgency.vue')
    },
    {
        path: '/digital-agency',
        name: 'DigitalAgency',
        meta: {
            title: 'Digital Agency - VueJS Creative Agency and Portfolio Template'
        },
        component: () =>
            import ('../views/all-home-version/DigitalAgency.vue')
    },
    {
        path: '/business',
        name: 'Business',
        meta: {
            title: 'Business - VueJS Creative Agency and Portfolio Template'
        },
        component: () =>
            import ('../views/all-home-version/Business.vue')
    },
    {
        path: '/corporate-business',
        name: 'CorporateBusiness',
        meta: {
            title: 'Corporate Business - VueJS Creative Agency and Portfolio Template'
        },
        component: () =>
            import ('../views/all-home-version/CorporateBusiness.vue')
    },
    {
        path: '/startup',
        name: 'StartUp',
        meta: {
            title: 'Start Up - VueJS Creative Agency and Portfolio Template'
        },
        component: () =>
            import ('../views/all-home-version/StartUp.vue')
    },
    {
        path: '/creative-portfolio',
        name: 'CreativePortfolio',
        meta: {
            title: 'Creative Portfolio - VueJS Creative Agency and Portfolio Template'
        },
        component: () =>
            import ('../views/all-home-version/CreativePortfolio.vue')
    },
    {
        path: '/minimal-portfolio',
        name: 'MinimalPortfolio',
        meta: {
            title: 'Minimal Portfolio - VueJS Creative Agency and Portfolio Template'
        },
        component: () =>
            import ('../views/all-home-version/MinimalPortfolio.vue')
    },
    {
        path: '/landing-home-particle',
        name: 'LandingHomeParticle',
        meta: {
            title: 'Landing Home Particle - VueJS Creative Agency and Portfolio Template'
        },
        component: () =>
            import ('../views/all-home-version/LandingHomeParticle.vue')
    },
    {
        path: '/landing-creative-agency',
        name: 'LandingCreativeAgency',
        meta: {
            title: 'Landing Creative Agency - VueJS Creative Agency and Portfolio Template'
        },
        component: () =>
            import ('../views/all-home-version/LandingCreativeAgency.vue')
    },
    {
        path: '/landing-interior',
        name: 'LandingInterior',
        meta: {
            title: 'Landing Interior - VueJS Creative Agency and Portfolio Template'
        },
        component: () =>
            import ('../views/all-home-version/LandingInterior.vue')
    },
    {
        path: '/landing-personal-portfolio',
        name: 'LandingPersonalPortfolio',
        meta: {
            title: ' Personal Portfolio Landing - VueJS Creative Agency and Portfolio Template'
        },
        component: () =>
            import ('../views/all-home-version/LandingPersonalPortfolio.vue')
    },
    {
        path: '/landing-dark-portfolio',
        name: 'LandingDarkPortfolio',
        meta: {
            title: 'Personal Portfolio Landing - VueJS Creative Agency and Portfolio Template'
        },
        component: () =>
            import ('../views/all-home-version/LandingDarkPortfolio.vue')
    },
    {
        path: '/personal-portfolio',
        name: 'PersonalPortfolio',
        meta: {
            title: 'Personal Portfolio - VueJS Creative Agency and Portfolio Template'
        },
        component: () =>
            import ('../views/all-home-version/PersonalPortfolio.vue')
    },
    {
        path: '/designer-portfolio',
        name: 'DesignerPortfolio',
        meta: {
            title: 'Designer Portfolio - VueJS Creative Agency and Portfolio Template'
        },
        component: () =>
            import ('../views/all-home-version/DesignerPortfolio.vue')
    },
    {
        path: '/studio-agency',
        name: 'StudioAgency',
        meta: {
            title: 'Studio Agency - VueJS Creative Agency and Portfolio Template'
        },
        component: () =>
            import ('../views/all-home-version/StudioAgency.vue')
    },
    {
        path: '/service',
        name: 'Service',
        meta: {
            title: 'Service - VueJS Creative Agency and Portfolio Template'
        },
        component: () =>
            import ('../views/service/Service.vue')
    },
    {
        path: '/service-details',
        name: 'ServiceDetails',
        meta: {
            title: 'Service Details - VueJS Creative Agency and Portfolio Template'
        },
        component: () =>
            import ('../views/service/ServiceDetails.vue')
    },
    {
        path: '/blog',
        name: 'Blog',
        meta: {
            title: 'Blog - VueJS Creative Agency and Portfolio Template'
        },
        component: () =>
            import ('../views/blog/Blog.vue')
    },
    {
        path: '/blog-details',
        name: 'BlogDetails',
        meta: {
            title: 'Blog Details - VueJS Creative Agency and Portfolio Template'
        },
        component: () =>
            import ('../views/blog/BlogDetails.vue')
    },
    {
        path: '/portfolio',
        name: 'Portfolio',
        meta: {
            title: 'Portfolio - VueJS Creative Agency and Portfolio Template'
        },
        component: () =>
            import ('../views/portfolio/Portfolio.vue')
    },
    {
        path: '/portfolio-details',
        name: 'PortfolioDetails',
        meta: {
            title: 'Portfolio Details - VueJS Creative Agency and Portfolio Template'
        },
        component: () =>
            import ('../views/portfolio/PortfolioDetails.vue')
    },
    {
        path: '/team',
        name: 'Team',
        meta: {
            title: 'Team - VueJS Creative Agency and Portfolio Template'
        },
        component: () =>
            import ('../views/Team.vue')
    },
    {
        path: '/pricing-plan',
        name: 'PricingPlan',
        meta: {
            title: 'Pricing Plan - VueJS Creative Agency and Portfolio Template'
        },
        component: () =>
            import ('../views/PricingPlan.vue')
    },
    {
        path: '/testimonial',
        name: 'Testimonial',
        meta: {
            title: 'Tesimonial - VueJS Creative Agency and Portfolio Template'
        },
        component: () =>
            import ('../views/Testimonial.vue')
    },
    {
        path: '/column',
        name: 'Column',
        meta: {
            title: 'Column - VueJS Creative Agency and Portfolio Template'
        },
        component: () =>
            import ('../views/Column.vue')
    },
    {
        path: '/contact-form',
        name: 'ContactForm',
        meta: {
            title: 'Contact Form - VueJS Creative Agency and Portfolio Template'
        },
        component: () =>
            import ('../views/ContactForm.vue')
    },
    {
        path: '/video-popup',
        name: 'VideoPopup',
        meta: {
            title: 'Video Popup - VueJS Creative Agency and Portfolio Template'
        },
        component: () =>
            import ('../views/VideoPopup.vue')
    },
    {
        path: '/brand',
        name: 'Brand',
        meta: {
            title: 'Brand - VueJS Creative Agency and Portfolio Template'
        },
        component: () =>
            import ('../views/Brand.vue')
    },
    {
        path: '/counter',
        name: 'Counter',
        meta: {
            title: 'Counter - VueJS Creative Agency and Portfolio Template'
        },
        component: () =>
            import ('../views/Counter.vue')
    },
    {
        path: '/contact',
        name: 'Contact',
        meta: {
            title: 'Contact - VueJS Creative Agency and Portfolio Template'
        },
        component: () =>
            import ('../views/Contact.vue')
    },
    {
        path: '/gallery',
        name: 'Gallery',
        meta: {
            title: 'Gallery - VueJS Creative Agency and Portfolio Template'
        },
        component: () =>
            import ('../views/Gallery.vue')
    },
    {
        path: '/progressbar',
        name: 'Progressbar',
        meta: {
            title: 'Progressbar - VueJS Creative Agency and Portfolio Template'
        },
        component: () =>
            import ('../views/Progressbar.vue')
    },
    {
        path: '/button',
        name: 'Button',
        meta: {
            title: 'Progressbar - VueJS Creative Agency and Portfolio Template'
        },
        component: () =>
            import ('../views/Button.vue')
    },
    {
        path: '/office-location',
        name: 'Office Locaiton',
        meta: {
            title: 'Office Location - VueJS Creative Agency and Portfolio Template'
        },
        component: () =>
            import ('../views/Map.vue')
    },
    {
        path: '*',
        component: Missing,
        meta: {
            title: '404 - VueJS Creative Agency and Portfolio Template'
        },
    }
]

const router = new VueRouter({
    base: '/ocue/',
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