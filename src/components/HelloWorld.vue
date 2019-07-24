<template>
  <div class="hello">
    <button @click="increse">+</button>
    <button @click="decrese">-</button>
  </div>
</template>

<script>
import { mapMutations, mapActions } from 'vuex'
import { INCREMENT, DECREMENT } from '../store/mutation-types.js'

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  created () {
    this.$http.get('/users/data').then(res => console.log(res))
  },
  methods: {
    ...mapMutations([INCREMENT, DECREMENT]),
    ...mapActions(['myIncrese', 'myDecrese']),
    async increse () {
      // this.increment()
      // this.$store.dispatch('myIncrese')
      console.log(await this.myIncrese({
        id: 1,
        name: '张三'
      }))
    },
    decrese () {
      // this.decrement()
      // this.$store.dispatch('myDecrese')
      this.myDecrese()
    }
  }
}
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
