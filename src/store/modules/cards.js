const cards = {
  state: {
    cards: []
  },
  getters: {
    user(state) {
      return state.cards
    }
  },
  mutations: {
    setCards(state, value) {
      state.cards = value
    }
  },
  actions: {
    GET_CARDS({ commit }) {
      const cards = []
      commit('setCards', cards)
    }
  }
}

export default cards
