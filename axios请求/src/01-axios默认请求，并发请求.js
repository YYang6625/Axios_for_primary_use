import { createApp } from "vue";
import App from "./App.vue";
import axios from "axios";

createApp(App).mount("#app");

axios({
  //返回的使一个promise对象
  //默认是get请求
  url: "http://123.207.32.32:8000/home/multidata",
}).then((res) => {
  console.log(res);
});

// 网络测试网站:https://httpbin.org

// 并发请求,同时发送多个请求，获取多个请求数据后处理结果
axios
  .all([
    axios({
      url: "http://123.207.32.32:8000/home/multidata",
    }),
    axios({
      url: "http://123.207.32.32:8000/home/data",
      params: {
        type: "sell",
        page: 5,
      },
    }),
  ])
  .then((results) => {
    console.log(results);
    // console.log(results[0]);
    // console.log(results[1]);
  });
//也可以将结果单独处理
//   .then(axios.spread（(res1,res2) => {
//     console.log(res1);
//     console.log(res2);
//   });
