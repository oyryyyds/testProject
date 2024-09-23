import {createRouter,createWebHistory} from 'vue-router'

// 引入组件
import Home from '@/pages/Home.vue'
import About from '@/pages/About.vue'
import News from '@/pages/News.vue'
import Detail from '@/pages/Detail.vue'

const router = createRouter({
    history:createWebHistory(),
    routes:[
        {
            name:'zhuye',
            path:'/home',
            component: Home
        },
        {
            name:'about',
            path:'/about',
            component: About
        },
        {
            name:'news',
            path:'/news',
            component: News,
            children: [
                {
                    name:'detail',
                    path:'detail',
                    component:Detail
                }
            ]
        }
    ]
})

// 暴露完 去main.ts 引用
export default router