<template>
  <div class="tiao-jian-yu-xuan-huan">
    <h2 class="title">条件与循环</h2>
    <div>
      <p v-if="seen">现在你看到我了</p>
    </div>
    <div>
      <ul>
        <li v-for="(todo, index) in todos" :key="index">{{todo.text}}</li>
      </ul>
    </div>
    <router-link to="/chuLiYongHuShuRu" tag="div">
      <a href="#">下一节</a>
    </router-link>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        seen: true,
        todos: [{
          text: 'vueJs'
        },{
          text: 'javaScript'
        },{
          text: 'java'
        }]
      }
    }
  }
</script>
