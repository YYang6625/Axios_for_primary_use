import { createApp } from "vue";
import App from "./App.vue";
import axios from "axios";
import request from "./request";

createApp(App).mount("#app");

//默认全局设置
// axios.defaults.baseURL = "http://123.207.32.32:8000";
//默认请求超时时间
// axios.defaults.timeout = 5000;

// 当请求的服务器地址有多个时，默认全局url就不太合适了
// 此时我们一般会创建实例来设置各自的默认default
// 针对每一个服务器单独设置(业务复杂时)
const instance1 = axios.create({
  baseURL: "http://123.207.32.32:8000",
  timeout: 5000,
});
// axios拦截器.将拦截发出去的请求,可查看发情的信息参数数据
instance1.interceptors.request.use((config) => {
  console.log(config); //请求成功之后会获取,
  //1.可以对数据进行修改转化等操作
  //2.显示正在加载的一写dom元素等
  //3.某些网络请求(比如登录(token)),携带一些特殊信息
  return config; //拦截之后需要返回出去不然报错
}),
  (err) => {
    console.log(err);
  };
// 同样的我们也可以对结果进行拦截,当然我们也需要返回结果data
// instance1.interceptors.response.use(()=>{})

instance1({
  url: "/home/multidata",
}).then((res) => {
  console.log(res);
});
instance1({
  url: "/home/data",
  params: {
    type: "pop",
    page: 1,
  },
}).then((res) => {
  console.log(res);
});
// // 第二个服务器网络地址进行单独设置
// const instance2 = axios.create({
//   baseURL: "http://111.222.33.33:8000",
//   timeout: 5000,
// });
// instance2({
//   url: "/home/data",
// });

// 在实际开发中,面对第三方库,比如axios等,我们要单独去创建封装到一个文件,保存在文件内进行调用维护等
// 在外部封装之后引入使用
request({
  url: "/home/multidata",
})
  .then((res) => {
    //成功打印,说明封装成功
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
