import axios from "axios";
// 在实际开发中,面对第三方库,比如axios等,我们要单独去创建封装到一个文件,保存在文件内进行调用维护等
// 有利于开发和后期的维护等等
// 比如学习ajax中就对ajax进行过封装
export default function request(config) {
  //config传递的参数
  // return new Promise(( const xx = axios.create({} ))=>{})  不需要多此一举
  const instance3 = axios.create({
    baseURL: "http://123.207.32.32:8000",
    timeout: 5000,
  });
  return instance3(config);
  //axios返回的一个promise对象,所以我们不需要创建一个new promise去用于return暴露使用
  // 直接在外面进入之后直接对axios的结果进行处理即可
}

