import { createRouter, createWebHistory } from 'vue-router/dist/vue-router.esm-bundler'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue'),
    meta: {
      title: 'Accueil',
    },
  },
  {
    path: '/contact',
    name: 'About',
    meta: {
      title: 'Contact',
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/projets',
    name: 'Project',
    meta: {
      title: 'Projets',
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "project" */ '../views/Project.vue')
  },
  {
    path: '/404',
    alias: '/:pathMatch(.*)*',
    name: 'notfound',
    component: () => import(/* webpackChunkName: "notfound" */ '../views/NotFound.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.afterEach((to, from) => {
  console.log(from, to);
  document.title = to.meta.title;
})
export default router;
