<template>
  <!-- 使用引入的组件标签 -->
  <div class="container">
    <search />
    <list />
  </div>
</template>

<script>
// 引入组件23-单文件组件创建的vue
import list from "./components/list.vue";
import search from "./components/search.vue";
export default {
  name: "App",
  components: {
    search,
    list,
  },
};
</script>

<style></style>
