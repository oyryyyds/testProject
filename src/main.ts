import { createApp } from "vue";

import App from './App.vue';
// 引入路由器
// import router from "./router";

// 引入pinia
import { createPinia } from "pinia";

const app = createApp(App)
// 使用路由器
// app.use(router)
// 挂在整个应用到app容器中


// 创建pinia
const pinia = createPinia()

app.use(pinia)

app.mount('#app')