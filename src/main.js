import Vue from 'vue'; // runtime不支持template 只支持render
import App from './App.vue';
import router from './router'
import notify from './plugin/notify.js';
Vue.use(notify,{
    delay:5000
}); //使用带有install的对象
// console.log(App);
//这样直接引用vue 引用的并不是vue.js 引用的是vue的runtime
// vue = compiler + runtime (compiler可以编译模版)
// compiler有6k
/* new Vue({
    // template:'<div>hello</div>'
    // render函数的作用是将虚拟dom渲染成真实的dom
    // createElement返回的是虚拟的dom
    // render:(h)=>h('h1',['hello', h('span','一则头条')])
    render:(h)=>h(App)
}).$mount('#app'); */
new Vue({
    el: "#app",
    router,
    render: h => h(App)
})