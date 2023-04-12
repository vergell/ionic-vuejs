import { createRouter, createWebHistory } from "@ionic/vue-router"
import { RouteRecordRaw } from "vue-router"
import HomePageVue from "@/views/HomePage.vue"
import PointsPageVue from "@/views/PointsPage.vue"
import OrderPageVue from "@/views/OrderPage.vue"
import OrderSummaryPageVue from "@/views/OrderSummaryPage.vue"
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
      path: "/OrderSummary",
      name: "OrderSummaryPage",
      component: OrderSummaryPageVue,
      props: true,
   },
   {
      path: "/Order",
      name: "order",
      component: OrderPageVue,
   },
   {
      path: "/Points",
      name: "Points",
      component: PointsPageVue,
   },
   {
      path: "/Order/:id",
      component: () => import("../views/FoodPage.vue"),
   },
]

const router = createRouter({
   history: createWebHistory(process.env.BASE_URL),
   routes,
})

export default router
