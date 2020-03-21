import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/home';
import mainPage from './views/mainPage';
import step from './views/step';
import personnel from './views/personnel';
import permision from './views/permision';
import login from './views/login';
import test from './views/test';
Vue.use(Router);

export default new Router({
    routes:[
       
        {
            path:'/step',
            name:'step',
            component:step
        },
        {
            path:'/mainPage',
            name:'mainPage',
            component:mainPage
        },
        {
            path:'/home',
            name:'home',
            component:Home
        },
        {
            path:'/personnel',
            name:'personnel',
            component:personnel
        },
        {
            path:'/permision',
            name:'permision',
            component:permision
        },
        {
            path:'/test',
            name:'test',
            component:test
        },
        {
            path:'/login',
            name:'login',
            component:login
        },
        {
            path:'*',
            name:'error',
            component:test
        }
    ]
})