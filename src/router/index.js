import { createRouter, createWebHistory } from 'vue-router'
import volunteer_program from '../components/volunteer_program.vue'
import volunteer_team from '../components/volunteer_team.vue'
import user from '../components/user.vue'
import program from '../components/program.vue'
import team from '../components/team.vue'
import media from '../components/media.vue'
import volunteer_program_details from '../components/volunteer_program_details.vue'
import volunteer_team_details from '../components/volunteer_team_details.vue'
const login = () => import("../views/login.vue")
// 2. 定义一些路由
// 每个路由都需要映射到一个组件。
// 我们后面再讨论嵌套路由。
const routes = [
    { path: '/', component:volunteer_program  },
    {path:'/volunteer_program',component:volunteer_program },
    {path:'/volunteer_team',component:volunteer_team },
    {path:'/user',component:user},
    {path:'/team',component:team},
    {path:'/program',component:program},
    {path:'/media',component:media},
    {path:'/volunteer_program_details',component:volunteer_program_details},
    {path:'/volunteer_team_details',component:volunteer_team_details},
    {
     path: '/volunteer_login', 
     component: login
    }
]

// 3. 创建路由实例并传递 `routes` 配置
// 你可以在这里输入更多的配置，但我们在这里
// 暂时保持简单
const router = createRouter({
    // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
    history: createWebHistory(),
    routes, // `routes: routes` 的缩写
})

export default router
