import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Contact from './views/Contact.vue'
import './index.css'

const routes = [
    { path: '/', redirect: '/home' },
    { path: '/home', component: Home },
    { path: '/about', component: About },
    { path: '/contact', component: Contact },
]
const router = createRouter({
    history: createWebHistory(),
    routes,
})

createApp(App).use(router).mount('#app')
