<template>
   <ion-page>
      <ion-header class="ion-no-border" :translucent="true">
         <ion-toolbar>
            <ion-buttons slot="start">
               <ion-menu-button color="primary"></ion-menu-button>
            </ion-buttons>
            <ion-title class="header-title">Order Summary</ion-title>
         </ion-toolbar>
      </ion-header>
      <ion-content :fullscreen="true">
         <div id="container">
            <ion-item lines="none">
               <ion-label class="items">
                  <h2>{{ userDetails.name }}</h2>
                  <p>{{ userDetails.mobile }}</p>
                  <p>{{ userDetails.mail }}</p>
               </ion-label>
            </ion-item>
            <ion-item
               lines="none"
               v-for="item in userLocations"
               :key="item.name"
            >
               <ion-label text-wrap class="items">
                  <h2>{{ item.name }}</h2>
                  <p>{{ item.address }}</p>
               </ion-label>
            </ion-item>
            <ion-item lines="none">
               <h2>Orders</h2>
            </ion-item>
            <ion-item lines="none">
               <orders-sum />
            </ion-item>
            <ion-item lines="none">
               <h2>Payment Options</h2>
            </ion-item>
            <ion-item lines="none">
               <ion-label class="items">
                  <h2>Cash On Delivery</h2>
                  <p>123123</p>
               </ion-label></ion-item
            >

            <ion-item lines="none">
               <ion-label slot="start">Subtotal</ion-label>
               <ion-label slot="end">Price</ion-label>
            </ion-item>
            <ion-item lines="none">
               <ion-label slot="start">Delivery Charge</ion-label>
               <ion-label slot="end">Price</ion-label>
            </ion-item>

            <ion-item lines="none">
               <ion-label class="items">
                  <p>change for</p>
                  <p>change for</p>
               </ion-label></ion-item
            >
         </div>
      </ion-content>
      <ion-footer
         style="
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 15px;
            padding-bottom: 5px;
            background: white;
         "
         class="ion-no-border"
      >
         <ion-label>
            <p>Grand Total</p>
            <h2>P 244</h2>
         </ion-label>
         <ion-button class="add-to-bag">Add to Bag</ion-button>
      </ion-footer>
   </ion-page>
</template>

<script setup lang="ts">
import {
   IonButtons,
   IonContent,
   IonHeader,
   IonMenuButton,
   IonPage,
   IonTitle,
   IonLabel,
   IonToolbar,
} from "@ionic/vue"
import { onMounted, ref } from "vue"
import { userLocations, userDetails } from "../api/User"
import OrdersSum from "@/components/OrdersSum.vue"
import OrderAPI from "@/api/Order"
const order = ref()
onMounted(() => {
   const api = new OrderAPI()
   order.value = api.fetchData()
   console.log(api.fetchData())
})
</script>

<style scoped>
#container strong {
   font-size: 20px;
   line-height: 26px;
}

#container p {
   font-size: 16px;
   line-height: 22px;
   color: #8c8c8c;
   margin: 0;
}

#container a {
   text-decoration: none;
}
.header-title {
   font-size: 25px;
   font-weight: 700;
   color: black;
}
.items {
   background: beige;
   padding: 10px;
   border-radius: 10px;
}
</style>
