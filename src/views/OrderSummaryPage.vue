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
               <ion-label>
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
               <ion-label text-wrap>
                  <h2>{{ item.name }}</h2>
                  <p>{{ item.address }}</p>
               </ion-label>
            </ion-item>
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
   IonTitle,
   IonLabel,
   IonToolbar,
} from "@ionic/vue"

import { userLocations, userDetails } from "../api/User"
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
</style>
