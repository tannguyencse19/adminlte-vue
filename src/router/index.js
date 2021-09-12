import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home/Home.vue";
import Login from "@/views/Auth/Login.vue";
import ForgotPassword from "@/views/Auth/ForgotPassword.vue";
import Register from "@/views/Auth/Register.vue";
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
import Profile from "@/views/Profile/Profile.vue";
// import ProfileActivity from "@/views/Profile/Activity.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "",
    name: "AfterLogin",
    component: Home,
    children: [
      {
        path: "/",
        name: "Dashboard",
        component: Dashboard,
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
    ],
  },
  {
    path: "/login",
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
    path: "/profile",
    name: "profile",
    component: Profile,
  },
  // {
  //   path: "/activity",
  //   name: "activity",
  //   component: ProfileActivity,
  // },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
