export const state = () => ({
  showMenu: false,
})

export const mutations = {
  toogleMenu(state, payload) {
    state.showMenu = payload
  },
}
