import Vuex from 'vuex'
import Vue from 'vue'
import axios from 'axios'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        filmes: {}
    },
    mutations: {
        SET_STORE: (state, filmes) => {
            state.filmes = filmes
        }
    },
    actions: {
        INICIALIZAR_STORE: ({ commit }) => {
            axios.get('static/filmes.json').then((response) => {
                console.log(response.data.filmes)
                commit('SET_STORE', response.data.filmes)
            })
        }
    },
    getters: {
        filmes: state => state.filmes
    }
})