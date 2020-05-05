import Vue from 'vue'
import Router from 'vue-router'

//组件模块
// import Main from './App.vue'
import APIMain from './pages/apiMain.vue'
import APIProject from './pages/apiProject.vue'
import APISingle from './pages/apiSingle.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: APIMain
        },
        {
            path: '/apiProject',
            name: 'apiProject',
            component: APIProject
        },
        {
            path: '/apiSingle',
            name: 'apiSingle',
            component: APISingle
        }
    ]
})