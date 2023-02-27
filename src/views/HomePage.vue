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
                  <p>232 Points</p>
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
         <ion-header collapse="condense">
            <ion-toolbar>
               <ion-title size="large">123123</ion-title>
            </ion-toolbar>
         </ion-header>
         <div id="container">
            <strong class="capitalize">123213 </strong>
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

const user = ref({
   name: "Chou Tzuyu",
   mobile: "+639078564839",
   points: 29,
   url: "/Points",
   img: "https://c4.wallpaperflare.com/wallpaper/441/95/655/tzuyu-twice-cute-kpop-wallpaper-preview.jpg",
})
</script>
