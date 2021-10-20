import Vue from "vue";
import VueRouter from "vue-router";


Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "login",
    component: () => import(/* webpackChunkName: "auth" */ '@/views/Auth/Login.vue'),
  },
  {
    path: "/forgot-password",
    name: "forgot-password",
    component: () => import(/* webpackChunkName: "auth" */ '@/views/Auth/ForgotPassword.vue'),
  },
  {
    path: "/register",
    name: "register",
    component: () => import(/* webpackChunkName: "auth" */ '@/views/Auth/Register.vue'),
  },
  {
    path: "",
    component: () => import(/* webpackChunkName: "homepage" */ '@/views/Auth/AfterLogin.vue'),
    meta: { requiresAuth: true },
    children: [
      {
        path: "/dashboard",
        name: "Dashboard",
        component: () => import(/* webpackChunkName: "homepage" */ '@/views/Dashboard/Dashboard.vue'),
      },
      {
        path: "/profile",
        name: "profile",
        component: () => import(/* webpackChunkName: "user" */ '@/views/User/Profile.vue'),
      },
      {
        path: "/calendar",
        name: "calendar",
        component: () => import(/* webpackChunkName: "calendar" */ '@/views/Calendar/Calendar.vue'),
      },
      {
        path: "/inbox",
        name: "inbox",
        component: () => import(/* webpackChunkName: "inbox" */ '@/views/Inbox/Summary/Summary.vue'),
      },
      {
        path: "/inbox/read",
        name: "inbox-read",
        component: () => import(/* webpackChunkName: "inbox" */ '@/views/Inbox/Read/Read.vue'),
      },
      {
        path: "/inbox/compose",
        name: "inbox-compose",
        component: () => import(/* webpackChunkName: "inbox" */ '@/views/Inbox/Compose/Compose.vue'),
      },
      {
        path: "/project",
        name: "project-summary",
        component: () => import(/* webpackChunkName: "project" */ '@/views/Project/Summary/ProjectSummary.vue'),
      },
      {
        path: "/project/add",
        name: "project-add",
        component: () => import(/* webpackChunkName: "project" */ '@/views/Project/Add/ProjectAdd.vue'),
      },
      {
        path: "/project/detail",
        name: "project-detail",
        component: () => import(/* webpackChunkName: "project" */ '@/views/Project/Detail/ProjectDetail.vue'),
      },
      {
        path: "/project/edit",
        name: "project-edit",
        component: () => import(/* webpackChunkName: "project" */ '@/views/Project/Edit/ProjectEdit.vue'),
      },
      {
        path: "/project/kanban",
        name: "project-kanban",
        component: () => import(/* webpackChunkName: "project" */ '@/views/Project/Kanban/ProjectKanban.vue'),
      },
      {
        path: "/user-list",
        name: "user-list",
        component: () => import(/* webpackChunkName: "list" */ '@/views/User/List.vue'),
        props: { uriProp: "http://localhost:3000/user" },
      },
      {
        path: "/admin-list",
        name: "admin-list",
        component: () => import(/* webpackChunkName: "list" */ '@/views/User/List.vue'),
        props: { uriProp: "http://localhost:3000/admin" },
      },
    ],
  },
  {
    path: "*",
    name: "404",
    component: () => import(/* webpackChunkName: "404" */ '@/views/404/404.vue'),
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(route => route.meta.requiresAuth)) {
    if (!window.localStorage.getItem("user") && to.name !== "login") next({ name: "login" });
    else next();
  } else next();
})

export default router;
