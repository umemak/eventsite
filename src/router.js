import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Top',
    component: () => import('./views/Top.vue')
  },
  {
    path: '/mypage',
    name: 'MyPage',
    component: () => import('./views/MyPage.vue')
  },
  {
    path: '/cancel',
    name: 'Cancel',
    component: () => import('./views/CancelConfirm.vue')
  },
  {
    path: '/entry',
    name: 'Entry',
    component: () => import('./views/EntryConfirm.vue')
  },
  {
    path: '/event',
    name: 'Event',
    component: () => import('./views/EventDetail.vue')
  },
  {
    path: '/create',
    name: 'EventCreate',
    component: () => import('./views/EventCreate.vue')
  },
  {
    path: '/edit',
    name: 'EventEdit',
    component: () => import('./views/EventEdit.vue')
  },
  {
    path: '/search',
    name: 'Search',
    component: () => import('./views/EventSearch.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('./views/Login.vue')
  },
  {
    path: '/mypage',
    name: 'MyPage',
    component: () => import('./views/MyPage.vue')
  }
]

const router = createRouter({
  history:createWebHistory(process.env.BASE_URL),
  routes
})

export default router
