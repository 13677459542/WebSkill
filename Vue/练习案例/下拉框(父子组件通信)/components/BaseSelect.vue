<template>
  <div>
    <!-- <select :value="selectId" @change="selectCity">
      <option value="101">北京</option>
      <option value="102">上海</option>
      <option value="103">武汉</option>
      <option value="104">广州</option>
      <option value="105">深圳</option>
    </select> -->

     <select :value="value" @change="selectCity">
      <option value="101">北京</option>
      <option value="102">上海</option>
      <option value="103">武汉</option>
      <option value="104">广州</option>
      <option value="105">深圳</option>
    </select>
  </div>
</template>

<script>
export default {
  props: {
    // selectId: String,//此处使用props接收来自父组件传输的selectId，用来绑定下拉框的值 :value="selectId" 属于单项绑定，选择其他数据时不会修改父组件数据
    value: String
  },
  methods: {
    selectCity(e) {
      this.$emit('changeCity', e.target.value) //此处给下拉框加上了一个change事件，当下拉框change事件触发时使用 $emit 通知父组件修改对应的 selectId 的值。形成父子组件之间的数据双向绑定
    },
  },
}
</script>

<style>
</style>