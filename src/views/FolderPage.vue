<template>
   <ion-page>
      <ion-header class="ion-no-border" :translucent="true">
         <ion-toolbar>
            <ion-buttons slot="start">
               <ion-menu-button color="primary"></ion-menu-button>
            </ion-buttons>
            <ion-title class="header-title">{{ $route.params.id }}</ion-title>
         </ion-toolbar>
      </ion-header>
      <ion-content :fullscreen="true">
         <ion-header collapse="condense">
            <ion-toolbar>
               <ion-title size="large">{{ $route.params.id }}</ion-title>
            </ion-toolbar>
         </ion-header>
         <div id="container">
            <strong class="capitalize">{{ $route.params.id }} </strong>
            <ion-router-outlet></ion-router-outlet>
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
   IonRouterOutlet,
} from "@ionic/vue"
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
