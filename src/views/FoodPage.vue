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
         <div id="content" class="food-img">
            <img :src="food.img_url" />
         </div>
         <div class="ion-padding-start ion-padding-end">
            <h3>{{ food.name }}</h3>
            <span v-for="i in food.ratings.average" :key="i">⭐</span>
            <p class="ion-padding-start">{{ food.description }}</p>
            <div lines="none" class="price-container">
               <h3 class="price">{{ food.price }}</h3>
               <item-counter @update="handleNumberOfOrder"></item-counter>
            </div>
            <ion-item lines="none">
               <h3>Beverages</h3>
            </ion-item>
            <div class="drop-down">
               <p>Choose Beverage</p>
               <ion-select
                  :placeholder="drinks[0]"
                  :value="drinks[0]"
                  @ionChange="handleDrink($event)"
               >
                  <ion-select-option
                     v-for="drink in drinks"
                     class="ion-select-option"
                     :value="drink"
                     :key="drink"
                     >{{ drink }}</ion-select-option
                  >
               </ion-select>
            </div>
            <ion-item lines="none" class="flex-container">
               <template v-for="(item, i) in categories" :key="i">
                  <ion-button
                     class="flex-item"
                     @click="selectedCategory = i"
                     :fill="selectedCategory === i ? 'solid' : 'clear'"
                  >
                     {{ item }}
                  </ion-button>
               </template>
            </ion-item>
            <ion-item lines="none">
               <h3>Add-Ons</h3>
            </ion-item>
            <add-ons
               @update="addOnsCounter"
               @checkbox-value="handleCheckboxValue"
            ></add-ons>
         </div>
         <div v-if="checkOut" class="modal">
            <div class="card" router-link="/Home">
               <img :src="food.img_url" alt="Food Image" />
               <div class="content">
                  <h2 class="title">Successfully Added</h2>
                  <p class="type">What do you want to do now?</p>
                  <div style="text-align: center">
                     <ion-button fill="solid" router-link="/OrderSummary"
                        >Proceed to Checkout</ion-button
                     >
                  </div>
                  <div style="text-align: center">
                     <ion-button @click="checkOut = false" fill="clear"
                        >Close</ion-button
                     >
                  </div>
               </div>
            </div>
         </div>
      </ion-content>
      <ion-footer style="text-align: center" class="ion-no-border">
         <ion-button
            @click=";(checkOut = true), handleSubmit()"
            id="open-modal"
            class="add-to-bag"
            >Add to Bag</ion-button
         >
      </ion-footer>
   </ion-page>

   <!-- 
   <ion-modal style="text-align: center" ref="modal" trigger="open-modal">
      <ion-content>
         <ion-item style="text-align: center" lines="none">
            <img style="width: 150px" :src="food.img_url" />
         </ion-item>
         <ion-item lines="none">
            <ion-label>
               <h1>Succesfully Added!</h1>
               <p>What do you want to do now?</p>
            </ion-label>
            <p></p>
         </ion-item>
         <div style="text-align: center">
            <ion-button
               fill="solid"
               router-link="/OrderSummary"
               @click="$refs?.modal?.$el?.dismiss()"
               >Proceed to Checkout</ion-button
            >
         </div>
         <div style="text-align: center">
            <ion-button fill="clear" @click="$refs?.modal?.$el?.dismiss()"
               >Close</ion-button
            >
         </div>
      </ion-content>
   </ion-modal> -->
</template>

<script setup lang="ts">
import {
   IonButtons,
   IonFooter,
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
import { chevronBackOutline, chevronBackSharp } from "ionicons/icons"
import { useRoute } from "vue-router"
import { Food, fakeFoodApiResponse } from "../api/FoodLists"
import { ref } from "vue"
import AddOns from "../components/AddOns.vue"

import ItemCounter from "../components/ItemCounter.vue"
const categories = ["Regular", "Large", "X-Large"]
const numberOfOrder = ref(1)
const selectedCategory = ref(0)
const route = useRoute()
const id: any = route.params.id
const food: Food = fakeFoodApiResponse.foods[id]
const drinks = ["Coke", "Sprite", "Pepsi"]
const selectedDrink = ref(drinks[0])
const checkOut = ref(false)
const addOnsIsChecked = ref(false)
const addOnsCount = ref(1)
const handleSubmit = () => {
   const newItem = {
      numberOfOrder: numberOfOrder.value,
      drink: selectedDrink.value,
      size: categories[selectedCategory.value],
      addOns: {
         ischecked: addOnsIsChecked.value,
         counts: addOnsCount.value,
      },
   }
   console.log(newItem)
}
const handleDrink = (e: any) => {
   selectedDrink.value = e.detail.value
}

const addOnsCounter = (newValue: any) => {
   addOnsCount.value = newValue
}
const handleCheckboxValue = (newValue: any) => {
   addOnsIsChecked.value = newValue
}
const handleNumberOfOrder = (newValue: any) => {
   numberOfOrder.value = newValue
   console.log(numberOfOrder.value)
}
</script>

<style scoped>
.modal {
   --height: 40%;
   --border-radius: 16px;
   --box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1),
      0 4px 6px -4px rgb(0 0 0 / 0.1);
   position: fixed;
   top: 50%;
   background: rgb(227, 227, 227);
   left: 50%;
   transform: translate(-50%, -50%);
   z-index: 9999;
}

.modal::part(backdrop) {
   background: rgba(209, 213, 219);
   opacity: 1;
}

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
.add-to-bag {
   width: 90%;
}
</style>
