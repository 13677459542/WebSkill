import Vue from 'vue'
import VueRouter from "vue-router";
import Layout from "@/views/Layout";
import Article from "@/views/Article";
import Collect from "@/views/Collect";
import Like from "@/views/Like";
import User from "@/views/User";
import ArticleDetail from "@/views/ArticleDetail";
Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path:'/',
      component:Layout,
      // 通过 children 配置项，可以以配置嵌套子路由
      // 1.在children配置项中，配规则
      // 2.准备二级路由出口
      redirect:'/article',//重定向article。相当于默认打开article
      children:[
        {path:'/article',component:Article},
        {path:'/collect',component:Collect},
        {path:'/like',component:Like},
        {path:'/user',component:User}
      ]
    },
    {path:'/detail/:id',component:ArticleDetail}
  ]
})

export default router