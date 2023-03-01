<template>
   <div class="ion-padding">
      <h1>Main Content</h1>
      <swiper :height="200" :slides-per-view="3" :spaceBetween="10">
         <swiper-slide
            v-for="swiper in [1, 2, 3, 4, 5, 6]"
            :key="swiper"
            style="background-color: green; height: 50px"
         >
            {{ swiper }}
         </swiper-slide>
      </swiper>
   </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"

import { menu, home } from "ionicons/icons"
import { Swiper, SwiperSlide } from "swiper/vue"
import "swiper/css"
import "@ionic/vue/css/ionic-swiper.css"

export default defineComponent({
   components: {
      Swiper,
      SwiperSlide,
   },
   setup() {
      return {
         menu,
         home,
      }
   },
})
</script>
