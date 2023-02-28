<template>
   <ion-item lines="none">
      <ion-label>Special Offer!</ion-label>
      <ion-item lines="none" slot="end">
         <ion-label color="secondary">View All</ion-label>
         <ion-icon
            color="secondary"
            class="ion-color-secondary"
            aria-hidden="true"
            :ios="chevronForwardOutline"
            :md="chevronForwardSharp"
         ></ion-icon
      ></ion-item>
   </ion-item>
   <swiper style="padding: 10px" :slides-per-view="2" :space-between="5">
      <swiper-slide class="container">
         <ion-img
            src="https://cdn.grabon.in/gograbon/images/category/1546252575451.png"
            alt="The Wisconsin State Capitol building in Madison, WI at night"
         ></ion-img>
      </swiper-slide>
      <swiper-slide class="container">
         <ion-img
            src="https://cdn.grabon.in/gograbon/images/category/1546252575451.png"
            alt="The Wisconsin State Capitol building in Madison, WI at night"
         ></ion-img>
      </swiper-slide>
      <swiper-slide class="container">
         <ion-img
            src="https://cdn.grabon.in/gograbon/images/category/1546252575451.png"
            alt="The Wisconsin State Capitol building in Madison, WI at night"
         ></ion-img>
      </swiper-slide>
   </swiper>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import { IonItem, IonLabel, IonImg, IonIcon } from "@ionic/vue"
import { chevronForwardSharp, chevronForwardOutline } from "ionicons/icons"
import { Swiper, SwiperSlide } from "swiper/vue"
import "swiper/css"
import "@ionic/vue/css/ionic-swiper.css"

export default defineComponent({
   components: {
      IonItem,
      IonLabel,
      IonImg,
      IonIcon,
      Swiper,
      SwiperSlide,
   },
   setup() {
      return {
         chevronForwardOutline,
         chevronForwardSharp,
      }
   },
})
</script>
<style>
.container {
   min-width: 250px;
   height: 130px;
   object-fit: cover;
   border-radius: 10px;
   overflow: hidden;
}
</style>
