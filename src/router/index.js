import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home/Home.vue";
import ProductCategories from "../views/Product/test-ProductCategories.vue";
import ProductDetails from "../views/Product/test-ProductDetails.vue";
import ProductList from "../views/Product/ProductList.json";
import Login from "../views/Auth/Login.vue";
import ForgotPassword from "../views/Auth/ForgotPassword.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      breadcrumb: "Home",
    },
    children: [
      {
        path: "/danh-muc-cun",
        name: "danh-muc-cun",
        component: ProductCategories,
        meta: {
          breadcrumb: "Danh mục cún",
        },
        children: [
          {
            path: ":id", // props id
            name: "ProductDetails",
            component: ProductDetails,
            meta: {
              breadcrumb: (params) => {
                const product = ProductList.find((product) => product.id == params.id);

                return `${product.name}`;
              },
            },
          },
        ],
      },
      {
        path: "login",
        name: "login",
        component: Login,
        meta: {
          breadcrumb: "login",
        },
      },
      {
        path: "forgot-password",
        name: "forgot-password",
        component: ForgotPassword,
        meta: {
          breadcrumb: "forgot-password",
        },
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
