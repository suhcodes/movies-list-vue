import GatewayService from 'gateway'

// TODO: set those as var envs
const options = {
  env: 'development',
  url: 'my-vue-demo.com'
}

const GatewayInstance = new GatewayService(options)

const cards = {
  state: {
    cards: [{
      content: {
        title: 'My title',
        text: 'My paragraph for this cards.'
      }
    }]
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
      const cards = []
      GatewayInstance.cards.getCards()
        .then(() => commit('setCards', cards))
        .catch(err => err)
    }
  }
}

export default cards
