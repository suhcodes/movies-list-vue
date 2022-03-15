import GatewayService from 'gateway'

// TODO: set those as var envs
const options = {
  env: 'development',
  url: 'my-vue-demo.com'
}

const Gateway = new GatewayService(options)
const GatewayInstance = Gateway

const cards = {
  state: {
    cards: []
  },
  getters: {
    cards (state) {
      return state.cards
    }
  },
  mutations: {
    setCards (state, value) {
      state.cards = value
    }
  },
  actions: {
    GET_CARDS ({ commit }) {
      commit('setCards', GatewayInstance.cards.getCards())
    }
  }
}

export default cards
