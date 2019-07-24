import { INCREMENT, DECREMENT } from './mutation-types'

const app = {
  state: {
    count: 0,
    user: {}
  },

  getters: {
    myCount (state) {
      return `current count is ${state.count}`
    }
  },

  mutations: {
    [INCREMENT] (state, obj) {
      state.count += 5
      state.user = obj
      console.log(obj)
      console.log(state.user)
    },
    [DECREMENT] (state) {
      state.count -= 1
    }
  },

  actions: {
    async myIncrese (context, obj) {
      // console.log(obj)
      context.commit(INCREMENT, obj)
      return '哈哈哈'
    },
    myDecrese (context) {
      context.commit(DECREMENT)
    }
  }
}
export default app
