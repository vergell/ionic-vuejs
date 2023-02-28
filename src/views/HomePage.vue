<template>
   <ion-page full>
      <ion-header class="ion-no-border" :translucent="true">
         <ion-toolbar>
            <ion-buttons slot="start">
               <ion-menu-button color="primary"></ion-menu-button>
            </ion-buttons>
            <ion-item
               lines="none"
               @click="$router.go(-1)"
               :router-link="user.url"
               class="hydrated"
            >
               <ion-icon
                  slot="start"
                  aria-hidden="true"
                  :ios="medalOutline"
                  :md="medalSharp"
               ></ion-icon>
               <ion-item lines="none">
                  <ion-label>{{ user.points }} Points</ion-label>
                  <ion-icon
                     color="secondary"
                     class="ion-padding-start ion-color-secondary"
                     aria-hidden="true"
                     :ios="chevronForwardOutline"
                     :md="chevronForwardSharp"
                  ></ion-icon
               ></ion-item>

               <ion-avatar slot="end" style="width: 25px; height: 25px">
                  <img
                     alt="Silhouette of a person's head"
                     v-bind:src="user.img"
                  />
               </ion-avatar>
            </ion-item>
         </ion-toolbar>
      </ion-header>
      <ion-content :fullscreen="true">
         <ion-item lines="none">
            <ion-item class="items" lines="none">
               <img
                  alt="Silhouette of mountains"
                  src="https://img.freepik.com/premium-vector/restaurant-logo-design-template_79169-56.jpg?w=360"
                  style="border-radius: 10px; width: 130px"
               />
               <ion-label class="ion-padding-start ion-text-wrap">
                  <p class="ion-padding-start">Anneoyong, {{ user.name }}</p>
                  <h1 class="ion-padding-start">What do you want to eat?</h1>
               </ion-label>
            </ion-item>
         </ion-item>
         <ion-searchbar
            placeholder="try our new Steak Fries Veggies"
            class="ios-style"
         ></ion-searchbar>
         <special-offer-slider />
         <category-slider />

         <ion-card style="box-shadow: none !important">
            <ion-card-header>
               <ion-card-title> What's New?</ion-card-title>
            </ion-card-header>
            <ion-card-content>
               <img
                  alt="Silhouette of mountains"
                  src="https://img.freepik.com/premium-vector/digital-restaurant-menu-horizontal-format_23-2148655475.jpg?w=2000"
                  style="height: 250px; border-radius: 10px"
               />
            </ion-card-content>
         </ion-card>
         <ion-item lines="none">
            <h2>Most Popular</h2>
         </ion-item>
         <div class="most-popular">
            <food-card v-for="food in foodList" :key="food.name" :data="food" />
         </div>
      </ion-content>
   </ion-page>
</template>
<script setup lang="ts">
import {
   IonButtons,
   IonContent,
   IonHeader,
   IonMenuButton,
   IonPage,
   IonCard,
   IonCardHeader,
   IonCardTitle,
   IonCardContent,
   IonSearchbar,
   IonLabel,
   IonItem,
   IonToolbar,
   IonIcon,
} from "@ionic/vue"
import { ref } from "vue"
import {
   medalOutline,
   medalSharp,
   chevronForwardOutline,
   chevronForwardSharp,
} from "ionicons/icons"
import SpecialOfferSlider from "../components/SpecialOfferSlider.vue"
import CategorySlider from "../components/CategorySlider.vue"
import FoodCard from "../components/FoodCard.vue"
import { Food, fakeFoodApiResponse } from "../api/FoodLists"

const foodList: Food[] = fakeFoodApiResponse.foods
const user = ref({
   name: "Chou Tzuyu",
   mobile: "+639078564839",
   points: 29,
   url: "/Points",
   img: "https://c4.wallpaperflare.com/wallpaper/441/95/655/tzuyu-twice-cute-kpop-wallpaper-preview.jpg",
})
</script>

<style>
.ios-style {
   --background: #f2f2f2;
   --color: #333;
   --placeholder-color: #999;
   --border-radius: 10px;
   --border-color: transparent;
   --box-shadow: none;
   --cancel-button-color: #007aff;
   --search-icon-color: #999;
}
scroll-item {
   display: inline-block;
   margin-right: 10px;
   width: 200px;
   height: 200px;
}

img {
   width: 100%;
   height: 100%;
   object-fit: cover;
}

.most-popular {
   display: grid;
   padding: 10px;
   grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
   gap: 10px;
}
.most-popular-item {
   background-color: #f0f0f0;
   padding: 20px;
}
.most-popular {
   display: grid;
   padding: 10px;
   grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
   gap: 10px;
}
.most-popular-item {
   background-color: #f0f0f0;
   padding: 20px;
}
</style>
