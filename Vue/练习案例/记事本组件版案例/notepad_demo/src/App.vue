<template>
  <!-- 主体区域 -->
  <section id="app">
    <TodoHeader @add="handleAdd"></TodoHeader>
    <TodoMain :list="list" @del="handelDel"></TodoMain>
    <TodoFooter :list="list" @clear="clear"></TodoFooter>
  </section>
</template>

<script>
//声明组件
import TodoHeader from './components/TodoHeader.vue'
import TodoMain from './components/TodoMain.vue'
import TodoFooter from './components/TodoFooter.vue'

// 渲染功能：
// 1.提供数据： 提供在公共的父组件 App.vue
// 2.通过父传子，将数据传递给TodoMain
// 3.利用 v-for渲染

// 添加功能：
// 1.手机表单数据  v-model
// 2.监听事件（回车+点击都要添加）
// 3.子传父，讲任务名称传递给父组件 App.vue
// 4.进行添加 unshift（自己的数据自己负责）
// 5.清空文本框输入的内容
// 6.对输入的空数据 进行判断

// 删除功能
// 1.监听事件（监听删除的点击） 携带id
// 2.子传父，讲删除的id传递给父组件的App.vue
// 3.进行删除filter（自己的数据 自己负责）

// 底部合计：父传子  传list 渲染
// 清空功能：子传父  通知父组件 → 父组件进行更新
// 持久化存储：watch深度监视list的变化 -> 往本地存储 ->进入页面优先读取本地数据
export default {
  data() {
    return {
      list: JSON.parse(localStorage.getItem('list')) || [
        { id: 1, name: '打篮球' },
        { id: 2, name: '看电影' },
        { id: 3, name: '逛街' },
      ],//从本地取存储的数据，如果不存在就取后面写好的数据。
    }
  },
  components: { //以下是为组件进行局部注册
    TodoHeader,
    TodoMain,
    TodoFooter,
  },
  watch: {
    list: {//监听data节点里面的list
      deep: true,//深度监视
      handler(newVal) {//一旦数据发生变化，就更改本地存储的数据
        localStorage.setItem('list', JSON.stringify(newVal))
      },
    },
  },
  methods: {
    handleAdd(todoName) {
      // console.log(todoName)
      this.list.unshift({
        id: +new Date(),
        name: todoName,
      })//list最前面添加一个对象到集合中
    },
    handelDel(id) {
      // console.log(id);
      this.list = this.list.filter((item) => item.id !== id)//取出除指定条件外的数据，重新赋值给list
    },
    clear() {
      this.list = [] //list直接赋值为空
    },
  },
}
</script>

<style>
</style>