<template>
  <div class="sheng-ming-shi-xuan-ran">
    <h2 class="title">声明式渲染</h2>
    <div>
      {{message}}
    </div>
    <div>
      <span :title="message">
        鼠标悬停几秒钟查看此处动态绑定的提示信息！
      </span>
    </div>
    <router-link to="/tiaoJianYuXunHuan" tag="div">
      <a href="#">下一节</a>
    </router-link>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        message: 'Hello Vue'
      }
    }
  }
</script>
