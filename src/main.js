import { createApp } from 'vue'  
import { createPinia } from 'pinia'  
import './style.css'  
import App from './App.vue'  
  
import ElementPlus from 'element-plus'  
import 'element-plus/dist/index.css'  
  
import 'vue-toastification/dist/index.css'  
import toast, { POSITION } from 'vue-toastification';  
import router from './router'  
  
// 创建 Pinia store  
const pinia = createPinia()  
  
// 创建 Vue 应用实例  
const app = createApp(App)  
  
// 使用 Pinia  
app.use(pinia)  
  
// 使用 Element Plus  
app.use(ElementPlus)  
  
// 使用路由  
app.use(router)  

app.use(toast, {  
    position: POSITION.TOP_RIGHT,  
    // 其他配置...  
  }); 

// app.use(Toastification, {  
//     position: POSITION.TOP_RIGHT,  
//     hideProgressBar: false,  
//     closeOnClick: true,  
//     pauseOnHover: true,  
//     draggable: true,  
//     progress: undefined,  
//     // 你可以在这里添加更多配置选项  
//   });  

// 挂载 Vue 应用到 DOM  
app.mount('#app')
