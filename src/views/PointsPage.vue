<template>
   <ion-page>
      <ion-header class="ion-no-border" :translucent="true">
         <ion-toolbar>
            <ion-buttons slot="start">
               <ion-menu-button color="primary"></ion-menu-button>
               <ion-title class="header-title">Loyalty Points</ion-title>
            </ion-buttons>
         </ion-toolbar>
      </ion-header>
      <ion-content :fullscreen="true">
         <ion-item lines="none">
            <ion-icon :ios="medalOutline" :md="medalSharp"></ion-icon>
            <ion-label class="ion-padding-start">Beginner Tier</ion-label>

            <ion-item lines="none">
               <ion-label color="secondary">View all</ion-label>
               <ion-icon
                  color="secondary"
                  aria-hidden="true"
                  :ios="chevronForwardOutline"
                  :md="chevronForwardSharp"
               ></ion-icon
            ></ion-item>
         </ion-item>
         <ion-item lines="none">
            <ion-label text-wrap>
               <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Itaque, dolore possimus, hic consequatur provident error
                  nihil.
               </p>
            </ion-label>
         </ion-item>
         <ion-item lines="none">
            <CircularProgressBar :data="points" />
         </ion-item>
         <ion-item lines="none">
            <ion-label>Rewards</ion-label>
            <ion-item lines="none">
               <ion-label color="secondary">How it works</ion-label>
               <ion-icon
                  color="secondary"
                  aria-hidden="true"
                  :ios="chevronForwardOutline"
                  :md="chevronForwardSharp"
               ></ion-icon
            ></ion-item>
         </ion-item>

         <ion-item lines="none" class="flex-container">
            <template v-for="(item, i) in types" :key="i">
               <ion-button
                  class="flex-item"
                  @click="selectedIndex = i"
                  :fill="selectedIndex === i ? 'solid' : 'clear'"
               >
                  {{ item.name }}
               </ion-button>
            </template>
         </ion-item>

         <ion-item class="ion-padding-start items" lines="none">
            <ion-thumbnail slot="start">
               <img
                  alt="Silhouette of mountains"
                  src="https://ionicframework.com/docs/img/demos/thumbnail.svg"
               />
            </ion-thumbnail>
            <ion-label class="ion-padding-start"
               ><h2 class="ion-padding-start">hellow</h2>
               <p class="ion-padding-start">Lorem, ipsum dolor.</p>
               <ion-item lines="none">
                  <ion-icon
                     color="secondary"
                     :ios="medalOutline"
                     :md="medalSharp"
                  ></ion-icon>
                  <ion-label color="secondary" class="ion-padding-start">
                     Points</ion-label
                  ></ion-item
               >
            </ion-label>
         </ion-item>
      </ion-content>
   </ion-page>
</template>

<script setup lang="ts">
import {
   IonButtons,
   IonLabel,
   IonContent,
   IonHeader,
   IonMenuButton,
   IonPage,
   IonTitle,
   IonToolbar,
   IonIcon,
   IonButton,
   IonThumbnail,
} from "@ionic/vue"
import CircularProgressBar from "../components/CircularProgressBar.vue"
import {
   medalOutline,
   medalSharp,
   chevronForwardOutline,
   chevronForwardSharp,
} from "ionicons/icons"
import { ref } from "vue"
const points = {
   userPoints: 50,
   totalPoints: 175,
}
const types = [
   { name: "All" },
   { name: "Beginner" },
   { name: "Intermediate" },
   { name: "Loyal" },
]
const selectedIndex = ref(0)
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
   font-size: 20px;
   font-weight: 600;
   color: black;
}
.flex-container {
   display: flex;
   flex-wrap: wrap;
}
.flex-item {
   flex: 1;
}
.items {
   margin: 0 25px;
   border: 3px solid #c8c7cc;
   border-radius: 8px;
}
</style>
