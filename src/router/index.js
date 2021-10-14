import Vue from "vue";
import VueRouter from "vue-router";
import Login from "@/views/Auth/Login.vue";
import ForgotPassword from "@/views/Auth/ForgotPassword.vue";
import Register from "@/views/Auth/Register.vue";
import AfterLogin from "@/views/Auth/AfterLogin.vue";
import Calendar from "@/views/Calendar/Calendar.vue";
import ProjectAdd from "@/views/Project/Add/ProjectAdd.vue";
import ProjectDetail from "@/views/Project/Detail/ProjectDetail.vue";
import ProjectEdit from "@/views/Project/Edit/ProjectEdit.vue";
import ProjectKanban from "@/views/Project/Kanban/ProjectKanban.vue";
import ProjectSummary from "@/views/Project/Summary/ProjectSummary.vue";
import InboxCompose from "@/views/Inbox/Compose/Compose.vue";
import InboxRead from "@/views/Inbox/Read/Read.vue";
import InboxSummary from "@/views/Inbox/Summary/Summary.vue";
import Dashboard from "@/views/Dashboard/Dashboard.vue";
import UserList from "@/json/UserList.json";
import AdminList from "@/json/AdminList.json";
import UserProfile from "@/views/User/Profile.vue";
import List from "@/views/User/List.vue";
// import AppTest from '@/App2.vue'
import Box from "@/views/Dashboard/Box-sm-3.vue"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "login",
    component: Login,
  },
  {
    path: "/forgot-password",
    name: "forgot-password",
    component: ForgotPassword,
  },
  {
    path: "/register",
    name: "register",
    component: Register,
  },
  {
    path: "",
    component: AfterLogin,
    children: [
      {
        path: "/dashboard",
        name: "Dashboard",
        component: Dashboard,
      },
      {
        path: "/profile",
        name: "profile",
        component: UserProfile,
      },
      {
        path: "/calendar",
        name: "calendar",
        component: Calendar,
      },
      {
        path: "/inbox",
        name: "inbox",
        component: InboxSummary,
      },
      {
        path: "/inbox/read",
        name: "inbox-read",
        component: InboxRead,
      },
      {
        path: "/inbox/compose",
        name: "inbox-compose",
        component: InboxCompose,
      },
      {
        path: "/project",
        name: "project-summary",
        component: ProjectSummary,
      },
      {
        path: "/project/add",
        name: "project-add",
        component: ProjectAdd,
      },
      {
        path: "/project/detail",
        name: "project-detail",
        component: ProjectDetail,
      },
      {
        path: "/project/edit",
        name: "project-edit",
        component: ProjectEdit,
      },
      {
        path: "/project/kanban",
        name: "project-kanban",
        component: ProjectKanban,
      },
      {
        path: "/user-list",
        name: "user-list",
        component: List,
        props: { dataProp: UserList },
      },
      {
        path: "/admin-list",
        name: "admin-list",
        component: List,
        props: { dataProp: AdminList },
      },
    ],
  },
  {
    path: "/box",
    name: "box",
    component: Box,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
