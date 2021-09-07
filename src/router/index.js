import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home/Home.vue";
import Login from "@/views/Auth/Login.vue";
import ForgotPassword from "@/views/Auth/ForgotPassword.vue";
import Calendar from "@/views/Calendar/Calendar.vue";
import ProjectAdd from "@/views/Project/Add/ProjectAdd.vue";
import ProjectDetail from "@/views/Project/Detail/ProjectDetail.vue";
import ProjectEdit from "@/views/Project/Edit/ProjectEdit.vue";
import ProjectKanban from "@/views/Project/Kanban/ProjectKanban.vue";
import ProjectSummary from "@/views/Project/Summary/ProjectSummary.vue";
import InboxCompose from "@/views/Inbox/Compose/Compose.vue";
import InboxRead from "@/views/Inbox/Read/Read.vue";
import InboxSummary from "@/views/Inbox/Summary/Summary.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      breadcrumb: "Home",
    },
  },
  {
    path: "/login",
    name: "login",
    component: Login,
    meta: {
      breadcrumb: "login",
    },
  },
  {
    path: "/forgot-password",
    name: "forgot-password",
    component: ForgotPassword,
    meta: {
      breadcrumb: "forgot-password",
    },
  },
  {
    path: "/calendar",
    name: "calendar",
    component: Calendar,
    meta: {
      breadcrumb: "calendar",
    },
  },
  {
    path: "/project-summary",
    name: "project-summary",
    component: ProjectSummary,
    meta: {
      breadcrumb: "project-summary",
    },
  },
  {
    path: "/project-add",
    name: "project-add",
    component: ProjectAdd,
    meta: {
      breadcrumb: "project-add",
    },
  },
  {
    path: "/project-detail",
    name: "project-detail",
    component: ProjectDetail,
    meta: {
      breadcrumb: "project-detail",
    },
  },
  {
    path: "/project-edit",
    name: "project-edit",
    component: ProjectEdit,
    meta: {
      breadcrumb: "project-edit",
    },
  },
  {
    path: "/project-kanban",
    name: "project-kanban",
    component: ProjectKanban,
    meta: {
      breadcrumb: "project-kanban",
    },
  },
  {
    path: "/inbox",
    name: "inbox-summary",
    component: InboxSummary,
    meta: {
      breadcrumb: "inbox",
    },
  },
  {
    path: "/inbox/read",
    name: "inbox-read",
    component: InboxRead,
    meta: {
      breadcrumb: "inbox-read",
    },
  },
  {
    path: "/inbox/compose",
    name: "inbox-compose",
    component: InboxCompose,
    meta: {
      breadcrumb: "inbox-compose",
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
