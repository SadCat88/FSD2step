export default {
    state: {
        message: '- Hello, i\'m Vuex! (from store message)'
    },
    mutations: {},
    actions: {},
    getters: {
        getMessage(state) {
            return state.message
        }
    }
}