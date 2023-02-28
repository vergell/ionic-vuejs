<template>
   <ion-page>
      <ion-header class="ion-no-border" :translucent="true">
         <ion-toolbar>
            <ion-buttons slot="start">
               <ion-button
                  fill="solid"
                  color="secondary"
                  @click="$router.go(-1)"
               >
                  <ion-icon :ios="chevronBackOutline" :md="chevronBackSharp" />
               </ion-button>
            </ion-buttons>
            <ion-title class="header-title">{{ food.type }}</ion-title>
         </ion-toolbar>
      </ion-header>
      <ion-content :fullscreen="true">
         <div class="food-img">
            <img :src="food.img_url" />
         </div>
         <div class="ion-padding-start ion-padding-end">
            <h3>{{ food.name }}</h3>
            <span v-for="i in food.ratings.average" :key="i">⭐</span>
            <p class="ion-padding-start">{{ food.description }}</p>
            <div lines="none" class="price-container">
               <h3 class="price">{{ food.price }}</h3>
               <ion-item lines="none">
                  <div style="display: flex; align-items: center">
                     <ion-button
                        fill="solid"
                        color="secondary"
                        @click="numberOfOrder > 1 && numberOfOrder--"
                     >
                        <ion-icon
                           :ios="chevronBackOutline"
                           :md="chevronBackSharp"
                        />
                     </ion-button>
                     <h4 style="margin: 0 15px">{{ numberOfOrder }}</h4>
                     <ion-button
                        fill="solid"
                        color="secondary"
                        @click="numberOfOrder++"
                     >
                        <ion-icon
                           :ios="chevronForwardOutline"
                           :md="chevronForwardSharp"
                        />
                     </ion-button></div
               ></ion-item>
            </div>
            <ion-item lines="none">
               <h3>Beverages</h3>
            </ion-item>
            <div class="drop-down">
               <p>Choose Beverage</p>
               <ion-select placeholder="Choose Beverage">
                  <ion-select-option class="ion-select-option" value="1"
                     >Coke</ion-select-option
                  >
                  <ion-select-option class="ion-select-option" value="2"
                     >Sprite</ion-select-option
                  >
                  <ion-select-option class="ion-select-option" value="3"
                     >Pepsi</ion-select-option
                  >
               </ion-select>
            </div>
            <ion-item lines="none" class="flex-container">
               <template v-for="(item, i) in categories" :key="i">
                  <ion-button
                     class="flex-item"
                     @click="selectedIndex = i"
                     :fill="selectedIndex === i ? 'solid' : 'clear'"
                  >
                     {{ item }}
                  </ion-button>
               </template>
            </ion-item>

            <ion-item lines="none">
               <h3>Add-Ons</h3>
            </ion-item>
         </div>
      </ion-content>
   </ion-page>
</template>

<script setup lang="ts">
import {
   IonButtons,
   IonContent,
   IonSelect,
   IonButton,
   IonSelectOption,
   IonHeader,
   IonPage,
   IonItem,
   IonTitle,
   IonIcon,
   IonToolbar,
} from "@ionic/vue"
import {
   chevronBackOutline,
   chevronBackSharp,
   chevronForwardSharp,
   chevronForwardOutline,
} from "ionicons/icons"
import { useRoute } from "vue-router"
import { Food, fakeFoodApiResponse } from "../api/FoodLists"
import { ref } from "vue"

const categories = ["Regular", "Large", "X-Large"]
const numberOfOrder = ref(1)
const selectedIndex = ref(0)
const route = useRoute()
const id: any = route.params.id
const food: Food = fakeFoodApiResponse.foods[id]
</script>

<style scoped>
.header-title {
   font-size: 25px;
   font-weight: 700;
   color: black;
}
.food-img {
   border-radius: 10px;
   margin: 20px auto;
   overflow: hidden;
   width: 100%;
}
.food-img img {
   border-radius: 10px;
   display: block;
   margin: 0 auto;
   width: 80%;
}
.price {
   font-size: 22px;
   font-weight: bold;
   color: #f00;
}
.price-container {
   display: flex;
   align-items: center;
   justify-content: space-between;
}
.flex-container {
   display: flex;
   flex-wrap: wrap;
}
.ion-select-option {
   padding: 5px;
   margin: 0;
   font-size: 8px;
}
.flex-item {
   flex: 1;
}
.down-arrow {
   position: absolute;
   bottom: 0;
   right: 0;
   padding: 10px;
}
.drop-down {
   background: #e3e3e3;
   padding: 5px;
   border-radius: 10px;
}
.drop-down p {
   color: #92949c;
   font-size: 12px;
   padding: 5px;
   margin: 0;
}
</style>
