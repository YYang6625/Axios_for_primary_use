<!-- 组件文件，将组件分离 -->
<template>
  <!-- 组件结构 -->
  <div class="demo">
    <!-- 当用户为0，不显示内容 -->
    <!-- login是请求数据的id号，有唯一性 -->
    <!-- 我们需要动态的获取各个数据只需要在属性前加上 ：即可 -->
    <div
      class="card"
      v-show="info.users.length"
      v-for="user in info.users"
      :key="user.login"
    >
      <!-- 跳转至新页面 -->
      <a :href="user.html_url" target="_blank">
        <img :src="user.avatar_url" alt="" />
      </a>
      <p class="card-text">{{ user.login }}</p>
    </div>
  </div>
  <h1 v-show="info.isFirst">欢迎使用！</h1>
  <!-- 展示加载中 -->
  <h1 v-show="info.isLoad">Loading....</h1>
  <!-- 展示错误信息 -->
  <h1>{{ info.errMsg }}</h1>
</template>
<script>
import emmitt from "../../plugins/event";
export default {
  // 组件名
  name: "list",
  data() {
    return {
      // 使用一个对象来存储这个组件的数据
      info: {
        users: [], //存储用户数据
        isFirst: true, //展示欢迎界面
        isLoading: false, //显示加载信息
        errMsg: "", //接收错误信息
      },
    };
  },
  // 后台返回数据更新页面，模板获取新数据进行挂载
  mounted() {
    emmitt.on("updateListData", (dataObj) => {
      //在利用解构...合并数组时，后面的数据覆盖前面的数据
      //优点:可以减少一些不必要的参数更新 (比如isFirst在后台的更新调用)
      this.info = { ...this.info, ...dataObj };
    });
  },
};
</script>
<style scoped>
body {
  display: flex;
  justify-content: space-around;
}
img {
  width: 100%;
}
h1 {
  margin-top: 300px;
  transform: translate(50%, 0) translateX(-30px);
}
.card {
  float: left;
  margin: 20px 30px;
  width: 200px;
  height: 225px;
  text-align: center;
}
.card-text {
  padding: 5px;
  font-size: 16px;
}
</style>
