import { createApp } from "vue";
import App from "./App.vue";
import axios from "axios";

createApp(App).mount("#app");

//默认全局设置
axios.defaults.baseURL = "http://123.207.32.32:8000";
//默认请求超时时间
axios.defaults.timeout = 5000;

axios
  .all([
    axios({
      //会基于baseURL再去进行请求处理
      url: "/home/multidata",
    }),
    axios({
      url: "/home/data",
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
