import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './components/Home.vue'
import Carrinho from './components/Carrinho.vue'
import Filme from './components/Filme.vue'
import Editar from './components/Editar.vue'

Vue.use(VueRouter)

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/carrinho',
            name: 'carrinho',
            component: Carrinho
        },
        {
            path: '/filme/:id',
            name: 'filme',
            component: Filme,
            children: [
                {
                    path: 'edit',
                    name: 'editar-filme',
                    component: Editar
                }
            ]
        }
    ]
})