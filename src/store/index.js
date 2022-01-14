import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
      counter: 0,
      colorCode: 'RGB(65,184,131)'
  },
  mutations: {
    decreaseCounter(state) {
      state.counter--
    },
    increaseCounter(state) {
      state.counter++
    },
    decreaseRandomCounter(state, randomNumber) {
      state.counter -= randomNumber
    },

    increaseRandomCounter(state, randomNumber) {
      state.counter += randomNumber
    },

    setColorCode(state, newValue) {
      state.colorCode = newValue
    }

  },
  actions: {

    decreaseRandomCounter({ commit }) {
      console.log('decreaseRandomCounter (action)')
      axios('https://www.random.org/integers/?num=1&min=1&max=6&col=1&base=10&format=plain&rnd=new').then(response => {
        commit('decreaseRandomCounter', response.data)
      })
    },

    increaseRandomCounter({ commit }) {
      console.log('increaseRandomCounter (action)')
      axios('https://www.random.org/integers/?num=1&min=1&max=6&col=1&base=10&format=plain&rnd=new').then(response => {
        commit('increaseRandomCounter', response.data)
      })
    },

    setColorCode({ commit }, newValue) {
      commit('setColorCode', newValue)
    }

  },
  getters: {
    counterSquared(state) {
      return state.counter * state.counter
    }
  },
  modules: {
  }
})
