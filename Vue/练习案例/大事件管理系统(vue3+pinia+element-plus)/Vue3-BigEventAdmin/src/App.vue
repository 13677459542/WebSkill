<script setup>
// 在 Vue3 CompositionAPI 中
// 1. 获取路由对象 router  useRouter
//    const router = useRouter()
// 2. 获取路由参数 route   useRoute
//    const route = useRoute()

// import { useRoute, useRouter } from 'vue-router'
// import { useUserStore, useCountStore } from '@/stores'
// const router = useRouter()
// const route = useRoute()
// const goList = () => {
//   router.push('/list')
//   console.log(route, router)
// }

// const userStore = useUserStore()
// const countStore = useCountStore()
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
</script>

<template>
  <!-- App.vue只需要留一个路由出口 router-view即可 -->
  <el-config-provider :locale="zhCn">
    <router-view></router-view>
  </el-config-provider>
</template>

<style scoped></style>
