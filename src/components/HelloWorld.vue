<template>
  <div class="hello">
    Hello Vuejs
    <router-link to="/shengmingshixuanran" tag="div">
      <a href="#">下一节</a>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
