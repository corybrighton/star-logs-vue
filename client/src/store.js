import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from './router'

Vue.use(Vuex)

let auth = axios.create({
  baseURL: 'http://localhost:3000/auth',
  withCredentials: true
})

let api = axios.create({
  baseURL: 'http://localhost:3000/api',
  withCredentials: true
})

export default new Vuex.Store({
  state: {
    user: {}
  },
  mutations: {
    SETUSER(state, user) {
      state.user = user
    }
  },
  actions: {
    login({ commit }, creds) {
      auth.post('login', creds)
        .then(res => {

          commit('SETUSER', res.data)
        })
        .catch(err => alert(err))

    },
    postLog({ commit }, log) {
      api.post('logs', log)
        .then(res => {
          console.log("getting a log")
        })
        .catch(err => {
          alert(err)
        })
    },
    authenticate({ commit }) {
      auth.get('authenticate')
        .then(res => {
          console.log(res.data);
          commit('SETUSER', res.data)
        })
        .catch(err => {
          router.push({ name: 'auth' })
        })
    },
    register({ commit }, creds) {
      auth.post('register', creds)
        .then(res => commit('SETUSER', res.data))
        .catch(err => alert(err))
    },
    logout({ commit }) {
      auth.delete('logout')
        .then(res => commit('SETUSER', {}))
    }
  }
})
