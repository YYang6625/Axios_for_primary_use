// 该文件是整个文件的入口部分
import { createApp } from "vue";
import App from "./APP.vue";
// 在vue2全局事件总线，只需要在根组件$root上挂载一个%b，然后进行提交$emit，$on监听即可
// 但是在vue3中不再提供$on,$emit函数了，vue实例不再实现事件接口，而是推荐引入外部工具实现

// 1.可以使用Vue3-Eventbus 先安装包 vue3-eventbus，然后全局挂载使用即可
// import eventBus from 'vue3-eventbus';

// 2.安装引入官方推荐的mitt
const app = createApp(App);
app.mount("#app");
// 第一种方法(只是演示，尚未下载)
// app.use(eventBus)
// 然后再需要时的组件上引入
// import bus from 'vue3-eventbus'
// bus.emit('foo'，{a:b})

// 第二种方法引入官方推荐的mitt
