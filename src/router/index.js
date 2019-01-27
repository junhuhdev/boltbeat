import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home.vue'
import Profile from '@/pages/Profile.vue'
import Settings from '@/pages/Settings.vue'

Vue.use(Router)

const base =
  process.env.NODE_ENV === "production"
    ? "/boltbeat/"
    : "/";

export default new Router({
  mode: 'history',
  base,
  routes: [
    {
      path: '/',
      name: 'Home',
      // meta: { layout: 'sidebar' },
      component: Home
    },
    {
      path: '/profile',
      name: 'Profile',
      // meta: { layout: 'sidebar' },
      component: Profile
    },
    {
      path: '/settings',
      name: 'Settings',
      // meta: { layout: 'sidebar' },
      component: Settings
    }
  ]
})
