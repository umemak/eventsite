import { createRouter, createWebHistory } from 'vue-router'
import store from "@/store/index.js";
import { auth } from './firebase/config';


const routes = [
  {
    path: '/',
    name: 'Top',
    component: () => import('./views/Top.vue'),
  },
  {
    path: '/mypage',
    name: 'MyPage',
    component: () => import('./views/MyPage.vue'),
    meta: { requireAuth: true },
  },
  {
    path: '/cancel/:eventId',
    name: 'Cancel',
    component: () => import('./views/CancelConfirm.vue'),
    props: true,
    meta: { requireAuth: true },
  },
  {
    path: '/entry/:eventId',
    name: 'Entry',
    component: () => import('./views/EntryConfirm.vue'),
    props: true,
    meta: { requireAuth: true },
  },
  {
    path: '/event/:eventId',
    name: 'Event',
    component: () => import('./views/EventDetail.vue'),
    props: true,
    meta: { requireAuth: true },
  },
  {
    path: '/create',
    name: 'EventCreate',
    component: () => import('./views/EventCreate.vue'),
    meta: { requireAuth: true },
  },
  {
    path: '/edit/:eventId',
    name: 'EventEdit',
    component: () => import('./views/EventEdit.vue'),
    props: true,
    meta: { requireAuth: true },
  },
  {
    path: '/search',
    name: 'Search',
    component: () => import('./views/EventSearch.vue'),
    meta: { requireAuth: true },
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('./views/Login.vue')
  },
  {
    path: '/mypage',
    name: 'MyPage',
    component: () => import('./views/MyPage.vue'),
    meta: { requireAuth: true },
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

function getAuthenticatedUser() {
  return auth.getAuthenticatedUser()
    .then((data) => {
      if (data && data.signInUserSession) {
        store.commit("setUser", data);
        return data;
      }
    })
    .catch((e) => {
      console.error(e);
      store.commit("setUser", null);
      return null;
    });
}

let user;

router.beforeResolve(async (to, from, next) => {
  user = await getAuthenticatedUser();

  if (to.name === "Login" && user) {
    return next({ name: "MyPage" });
  }

  if (to.matched.some((record) => record.meta.requireAuth) && !user) {
    return next({ name: "Login" });
  }
  return next();
});

// onAuthUIStateChange((authState, authData) => {
//   if (authState === AuthState.SignedIn && authData) {
//     router.push({ name: "MyPage" });
//   }
//   if (authState === AuthState.SignedOut) {
//     router.push({ name: "Top" });
//   }
// });

export default router
