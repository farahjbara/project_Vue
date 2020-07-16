import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import AdminUserList from '../views/AdminUserList.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/admin/users',
    name: 'admin-user-list',
    component: AdminUserList
  },
  {
    // Document title tag
    // We combine it with defaultDocumentTitle set in `src/main.js` on router.afterEach hook
    meta: {
      title: 'Dashboard'
    },
    path: '/',
    name: 'home',
    component: Home
  },
  {
    meta: {
      title: 'page initiale '
    },
    path: '/Login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    meta: {
      title: 'Tables'
    },
    path: '/tables',
    name: 'tables',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "tables" */ '../views/Tables.vue')
  },
  {
    meta: {
      title: 'Calendrier'
    },
    path: '/Calendar',
    name: 'Calendar',
    component: () => import('../views/Calendar.vue')
  },
  {
    meta: {
      title: 'Profile'
    },
    path: '/profile',
    name: 'profile',
    component: () => import(/* webpackChunkName: "profile" */ '../views/Profile.vue')
  },

  {
    meta: {
      title: 'Demande de congé'
    },
    path: '/conge',
    name: 'conge',
    component: () => import('../views/conge.vue')
  },
  {
    meta: {
      title: 'Demande de permission'
    },
    path: '/permission',
    name: 'permission',
    component: () => import('../views/permission.vue')
  },
  {
    meta: {
      title: 'mes projets '
    },
    path: '/projet',
    name: 'projet',
    component: () => import('../views/Projet.vue')
  },
  {
    meta: {
      title: 'Validation des demandes'
    },
    path: '/validation',
    name: 'Validation',
    component: () => import('../views/Validation.vue')
  },
  {
    meta: {
      title: 'Compteurs solde'
    },
    path: '/Solde',
    name: 'Solde',
    component: () => import('../views/Solde.vue')
  },
  {
    meta: {
      title: 'Liste des projets'
    },
    path: '/projets',
    name: 'projets',
    component: () => import('../views/Projets.vue')
  }
]
const router = new VueRouter({
  base: process.env.BASE_URL,
  routes,
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})

export default router
