import Vue from 'vue'
import vuetify from './plugins/vuetify'
import VueRouter from 'vue-router'

Vue.config.productionTip = false

Vue.use(VueRouter);

import App from './App.vue'
import HelloWorld from './views/HelloWorld.vue'

let router = new VueRouter({
  mode: 'history',
  base:'/',
  routes: [
      {
          path: '/',
          component: App,
          children: [
            {
              path: '/',
              component: HelloWorld,
            },
          ],
      }
  ]
});

export default router

new Vue({
  el: "#app",
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')