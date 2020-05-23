import VueVercode from './src/VueVercode/index.vue';

//注册组件
const install = Vue => Vue.component(VueVercode.name, VueVercode);

/* 支持使用标签的方式引入 Vue是全局变量时，自动install */
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

export default VueVercode;