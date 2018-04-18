<template>
  <div class="zhu-jian-hua">
    <h2>组件化应用</h2>
    <ol>
      <todo-item v-for="(todo, index) in todos" :key="index" :todo="todo"></todo-item>
    </ol>
  </div>
</template>
<script>
  import Vue from 'vue'
  // 定义名为todo-item的新组件
  Vue.component('todo-item', {
    props: ['todo'],
    template: '<li :class="{finished: todo.finish}">{{todo.text}}</li>'
  })
  export default {
    data() {
      return {
        todos: [{
          text: 'vuejs',
          finish: false
        }, {
          text: 'ES6',
          finish: false
        }, {
          text: 'vue-router',
          finish: true
        }]
      }
    }
  }
</script>
<style scoped>
  .finished{
    text-decoration: line-through;
    color: yellowgreen;
  }
</style>

