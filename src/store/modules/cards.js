

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
      commit('setCards', cards)
    }
  }
}

export default cards
