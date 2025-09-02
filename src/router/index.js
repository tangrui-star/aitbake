import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Works from '../views/Works.vue'
import Tools from '../views/Tools.vue'
import Contact from '../views/Contact.vue'
import WorkDetail from '../views/WorkDetail.vue'
import ToolDetail from '../views/ToolDetail.vue'
import ProfileSettings from '../views/ProfileSettings.vue'
import ViewportTest from '../views/ViewportTest.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/works',
    name: 'Works',
    component: Works
  },
  {
    path: '/works/:id',
    name: 'WorkDetail',
    component: WorkDetail
  },
  {
    path: '/tools',
    name: 'Tools',
    component: Tools
  },
  {
    path: '/tools/:id',
    name: 'ToolDetail',
    component: ToolDetail
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/profile-settings',
    name: 'ProfileSettings',
    component: ProfileSettings
  },
  {
    path: '/viewport-test',
    name: 'ViewportTest',
    component: ViewportTest
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router 