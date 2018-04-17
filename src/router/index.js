import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)
const shengMingShiXuanRan = () => import('../pages/vuejs/jichu/sheng-ming-shi-xuan-ran.vue')
const tiaoJianYuXunHuan = () => import('../pages/vuejs/jichu/tiao-jian-yu-xuan-huan.vue')
const chuLiYongHuShuRu = () => import('../pages/vuejs/jichu/chu-li-yong-hu-shu-ru.vue')
export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/shengmingshixuanran',
      component: shengMingShiXuanRan
    },
    {
      path: '/tiaoJianYuXunHuan',
      component: tiaoJianYuXunHuan
    },
    {
      path: '/chuLiYongHuShuRu',
      component: chuLiYongHuShuRu
    }
  ]
})
