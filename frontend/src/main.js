import { createApp } from 'vue'
import App from './App.vue'
import * as VueRouter from 'vue-router'
import ProductsPage from './pages/ProductsPage.vue'
import ProductDetailsPage from './pages/ProductDetailsPage.vue'
import ShoppingCartPage from './pages/ShoppingCartPage.vue'
createApp(App)
.use(VueRouter.createRouter({
    history: VueRouter.createWebHistory(process.env.BASE_URL),
    routes: [
        {
            path: '/',
            component: ProductsPage
        },
        {
            path: '/products',
            component: ProductsPage
        },
        {
            path: '/products/:productId',
            component: ProductDetailsPage
        },
        {
            path: '/cart',
            component: ShoppingCartPage
        }
    ]
}))
.mount('#app')
