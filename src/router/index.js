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
import Sidebar from "@/components/Sidebar/Sidebar.vue";
import Test from "@/components/Sidebar/Test.vue";
import Dashboard2 from "@/components/Sidebar/Dashboard2.vue";

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
        component: Dashboard2,
      },
    ],
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
    name: "inbox",
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
  {
    path: "/test-sidebar",
    name: "Dashboard",
    component: Sidebar,
  },
  {
    path: "/test-sidebar-inbox",
    name: "Inbox",
    component: Sidebar,
  },
  {
    path: "/test-sidebar-calendar",
    name: "Calendar",
    component: Sidebar,
  },
  {
    path: "/test-sidebar-project-summary",
    name: "Project-summary",
    component: Sidebar,
  },
  {
    path: "/test-sidebar-with-component",
    name: "Test",
    component: Test,
    children: [
      {
        path: "dashboard",
        name: "Dashboard",
        component: Dashboard2,
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
