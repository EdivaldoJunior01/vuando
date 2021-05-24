import Vue from 'vue';
import Router from 'vue-router'
import Home from './components/Home'
import Login from './components/Login'
import Register from './components/Register'

Vue.use(Router)

export default new Router({
    mode: 'history', //remove "!#" do link ex antes: http://localhost:8080/?!#login depois: http://localhost:8080/login
    routes:[
        {path: '/', component: Home},
        {path: '/login', component: Login},
        {path: '/register', component: Register}

    ]
})