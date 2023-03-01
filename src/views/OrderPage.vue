<template>
   <ion-page>
      <ion-header class="ion-no-border" :translucent="true">
         <ion-toolbar>
            <ion-buttons slot="start">
               <ion-menu-button color="primary"></ion-menu-button>
            </ion-buttons>
            <ion-title class="header-title">Our Foods</ion-title>
            <ion-icon
               slot="end"
               size="large"
               color="secondary"
               class="ion-padding-end"
               aria-hidden="true"
               :ios="mailOutline"
               :md="mailSharp"
            ></ion-icon>
         </ion-toolbar>
      </ion-header>
      <ion-content :fullscreen="true">
         <ion-searchbar
            placeholder="try our new Steak Fries Veggies"
            class="ios-style"
         />

         <swiper :slides-per-view="4">
            <swiper-slide
               v-for="(category, i) in categories"
               :key="category"
               style="width: auto"
            >
               <ion-button
                  shape="round"
                  @click="selectedIndex = i"
                  :fill="selectedIndex === i ? 'solid' : 'clear'"
                  style="min-width: 10px"
               >
                  {{ category }}
               </ion-button>
            </swiper-slide>
         </swiper>

         <div class="food-items">
            <food-card v-for="food in foodList" :key="food.name" :data="food" />
         </div>
      </ion-content>
   </ion-page>
</template>

<script setup lang="ts">
import {
   IonButtons,
   IonContent,
   IonIcon,
   IonHeader,
   IonMenuButton,
   IonPage,
   IonButton,
   IonTitle,
   IonToolbar,
   IonSearchbar,
} from "@ionic/vue"
import { mailOutline, mailSharp } from "ionicons/icons"
import { Swiper, SwiperSlide } from "swiper/vue"
import "swiper/css"
import { ref } from "vue"
import FoodCard from "../components/FoodCard.vue"
import { Food, fakeFoodApiResponse } from "../api/FoodLists"
const foodList: Food[] = fakeFoodApiResponse.foods
const selectedIndex = ref(0)
const categories = ["All", "Breakfast", "Chicken", "Seafood", "Barbeque"]
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
.food-items {
   display: grid;
   padding: 10px;
   grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
   gap: 10px;
}
</style>
