<template>
  <div class="chu-li-yong-hu-shu-ru">
    <h2>处理用户输入</h2>
    <div>
      <p>{{message}}</p>
      <button @click="reverseMessage">逆转消息</button>
      <p>
        <input v-model="message">
      </p>
      <router-link tag="div" to="/zhuJianHuaYingYong">
        <a>下一节</a>
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      message: "Hello Vue"
    };
  },
  methods: {
    reverseMessage() {
      this.message = this.message
        .split("")
        .reverse()
        .join("");
    }
  }
};
</script>
