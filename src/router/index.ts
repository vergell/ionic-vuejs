import { createRouter, createWebHistory } from "@ionic/vue-router"
import { RouteRecordRaw } from "vue-router"
import HomePageVue from "@/views/HomePage.vue"
import PointsPageVue from "@/views/PointsPage.vue"
const routes: Array<RouteRecordRaw> = [
   // {
   //    path: "/Points",
   //    component: () => import("../views/PointsPage.vue"),
   // },
   // {
   //    path: "/Home",
   //    component: () => import("../views/HomePage.vue"),
   // },
   {
      path: "/",
      redirect: "/home",
   },
   {
      path: "/home",
      name: "home",
      component: HomePageVue,
   },
   {
      path: "/Points",
      name: "Points",
      component: PointsPageVue,
   },
]

const router = createRouter({
   history: createWebHistory(process.env.BASE_URL),
   routes,
})

export default router
