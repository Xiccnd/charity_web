import { createRouter, createWebHistory } from 'vue-router'
import volunteer_program from '../views/volunteer_program.vue'
import program from '../components/program.vue'
import default_index from '../views/default_index.vue'
const login = () => import("../views/volunteer_login.vue")
const login2 = () => import("../views/volunteer_login2.vue")
const register = () => import("../views/volunteer_register.vue")
const volunteer_team_register = () => import("../views/volunteer_team_register.vue")
const center = () => import("../views/volunteer_center.vue")
const volunteer_program_details = () => import("../views/volunteer_program_details.vue")

const volunteer_team = () => import("../views/volunteer_team.vue")
const volunteer_team_details = () => import("../views/volunteer_team_details.vue")
const media = () => import("../views/media.vue")
const style = () => import("../views/style.vue")
const information = () => import("../views/information.vue")
const research = () => import("../views/research.vue")
const policy = () => import("../views/policy.vue")
const notice = () => import("../views/notice.vue")
const guide = () => import("../views/guide.vue")

const myProject = () => import("../views/myProject.vue")
const myTeam = () => import("../views/myTeam.vue")

const updatePassword = () => import("../views/updatePassword.vue")
const waitProject = () => import("../views/waitProject.vue")
const waitTeam = () => import("../views/waitTeam.vue")
const news = () => import("../views/news.vue")
const styleinfonews = () => import("../views/styleinfonews.vue")
const researchvideo = () => import("../views/researchvideo.vue")
// 2. 定义一些路由
// 每个路由都需要映射到一个组件。
const routes = [
    { path: '/', component: default_index  },
    { path: '/default_index', component: default_index },
    {path:'/volunteer_program',component:volunteer_program },
    {path:'/volunteer_team',component:volunteer_team },
    {path:'/program',component:program},
    {path:'/center',component:center},
    {path:'/myProject',component:myProject},
    {path:'/myTeam',component:myTeam},
    {path:'/updatePassword',component:updatePassword},
    {path:'/waitProject',component:waitProject},
    {path:'/waitTeam',component:waitTeam},
    {path:'/style',component:style},
    {path:'/information',component:information},
    {path:'/research',component:research},
    {path:'/policy',component:policy},
    {path:'/notice',component:notice},
    {path:'/guide',component:guide},
    {path:'/news',component:news},
    {path:'/styleinfonews',component:styleinfonews},
    {path:'/researchvideo',component:researchvideo},
    {
     path: '/volunteer_login', 
     component: login
    },
    {
        path: '/volunteer_login2', 
        component: login2
       },
    {
        path: '/volunteer_register',
        component: register
    },
    {
        path: '/volunteer_center',
        component: center
    },
    {
        path: '/volunteer_program/volunteer_program_details',
        name: '/volunteer_program/volunteer_program_details',
        component: volunteer_program_details
    },
    {
        path: '/volunteer_team',
        component: volunteer_team
    },
    {
        path: '/volunteer_team/volunteer_team_details',
        component: volunteer_team_details
    },
    {
        path: '/media',
        component: media
    },
    {
        path: '/volunteer_team_register',
        component: volunteer_team_register
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
