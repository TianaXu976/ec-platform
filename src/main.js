import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "./assets/styles/app.scss"
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import UUID from "vue-uuid";
 
Vue.config.productionTip = false

Vue.use(UUID);
Vue.use(ElementUI);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
