<template>
  <div id="app">
    <h1>---{{count}}</h1>
    <p>{{myCount}}</p>
    <router-view/>
  </div>
</template>

<script>
import {mapState, mapGetters} from 'vuex'

export default {
  name: 'App',
  computed: {
    ...mapState({
      count: state => state.app.count
    }),
    ...mapGetters(['myCount'])
  },
  methods: {
    loga () {
      console.log(this.count + '--------')
    }
  },
  created () {
    this.loga()
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
