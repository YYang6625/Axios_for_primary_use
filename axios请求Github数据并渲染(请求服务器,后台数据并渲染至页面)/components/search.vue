<!-- 组件文件，将组件分离 -->
<template>
  <!-- 组件结构 -->
  <section class="search">
    <h2>
      搜索GitHub用户(请求后台/服务器数据并进行展示以进入用户界面的实际应用)
    </h2>
    <input type="text" placeholder="请输入关键词" v-model="keyWord" />
    <button @click="searchUsers">Search</button>
  </section>
</template>
<script>
import axios from "axios";
import emmitt from "../../plugins/event";
export default {
  // 组件名
  name: "search",
  data() {
    return {
      keyWord: "",
    };
  },
  methods: {
    searchUsers() {
      // 异步请求前的一些样式显示与隐藏
      emmitt.emit("updateListData", {
        isLoading: true,
        users: [],
        isFirst: false,
      });

      // axios异步请求GitHub服务器数据（GitHub解决了跨域问题，不要考虑跨域）
      axios
        .get(`https://api.github.com/search/users?q=${this.keyWord}`)
        .then(
          (response) => {
            console.log("请求数据成功");
            // 请求数据在response内的data中
            // 请求成功没有err信息，也不需要更改 欢迎样式的状态 将必要数据传递过去进行解构覆盖即可
            emmitt.emit("updateListData", {
              isLoading: false,
              users: response.data.items,
              errMsg: "", //这里再编写时出错，因为请求成功是没有error错误信息的，斜率写了error就会显示error未定义
            });
          },
          (error) => {
            console.log("请求失败");
            // 失败信息将存放在error中的message中
            emmitt.emit("updateListData", {
              isLoading: false,
              users: [], //请求失败需要将数据变成空 否则上次请求将遗留并渲染在页面
              errMsg: error.message,
            });
          }
        )
        // 捕获失败
        .catch((error) => {
          console.error(error.message);
          emmitt.emit("updateListData", {
            isLoading: false,
            users: [], //请求失败需要将数据变成空 否则上次请求将遗留并渲染在页面
            errMsg: error.message,
          });
        });
    },
  },
};
</script>
<style scoped>
.search {
  margin: 0 auto;
  text-align: center;
}
input {
  width: 450px;
  height: 30px;
}
button {
  background-color: orange;
  color: #fff;
  height: 36px;
  border: 1px solid orange;
  cursor: pointer;
}
</style>
