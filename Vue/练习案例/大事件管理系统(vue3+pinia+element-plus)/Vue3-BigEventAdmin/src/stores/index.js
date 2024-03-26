// 导入 pinia 插件并从中解构出 createPinia
import { createPinia } from 'pinia'
// 导入pinia持久化插件
import persist from 'pinia-plugin-persistedstate'

const pinia = createPinia().use(persist)

export default pinia

// import { useUserStore } from './modules/user'
// export { useUserStore }
export * from './modules/user'
export * from './modules/counter'
