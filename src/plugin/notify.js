import modal from './notify.vue';
let notify = {//需要在此对象中拥有一个install方法

};
notify.install = function (Vue, options = { delay: 3000 }) {
    Vue.prototype.$notify = function (message, opt = {}) {
        if (notify.el) return;
        options = { ...options, ...opt } //用自己调用插件时传递过来的属性 覆盖掉默认设置好的
        let V = Vue.extend(modal); //返回的是一个构造函数的子类,参数是包含组件选项的对象
        let vm = new V;
        console.log(V);
        let oDiv = document.createElement('div');//创建一个div将实例挂载到元素上
        vm.$mount(oDiv);
        vm.value = message;
        document.body.appendChild(vm.$el); //把当前实例这个真实对象扔到页面上
        notify.el = vm.$el;
        setTimeout(() => { //延迟多少秒 将dom元素移除掉
            document.body.removeChild(vm.$el);//将实例上的元素删除掉
            notify.el = null;
        }, options.delay)
    }
}
// 导出这个包含install的对象,如果使用vue.use就会调用这个install方法
export default notify;