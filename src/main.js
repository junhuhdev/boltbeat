import Vue from 'vue'
import router from './router'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import App from './App'
// Layouts
import Sidebar from './layouts/Sidebar.vue'
import Default from './layouts/Default.vue'

Vue.config.productionTip = false

Vue.use(Element)

Vue.component('default-layout', Default)
Vue.component('sidebar-layout', Sidebar)

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
