<template>
   <ion-item lines="none">
      <ion-label>Category</ion-label>
   </ion-item>
   <swiper :slides-per-view="2">
      <swiper-slide class="image-container">
         <img
            src="https://takestwoeggs.com/wp-content/uploads/2021/07/Vietnamese-Cajun-Seafood-Boil-Takestwoeggs-Final-SQ.jpg"
            alt="Image"
            style="height: 350px"
         />
         <div class="title-container">
            <h2>Seafood</h2>
         </div> </swiper-slide
      ><swiper-slide class="image-container">
         <img
            src="https://www.tasteofhome.com/wp-content/uploads/2018/01/Crispy-Fried-Chicken_EXPS_TOHJJ22_6445_DR-_02_03_11b-11.jpg"
            alt="Image"
            style="height: 350px"
         />
         <div class="title-container">
            <h2>Chicken</h2>
         </div> </swiper-slide
      ><swiper-slide class="image-container">
         <img
            src="https://ionicframework.com/docs/img/demos/thumbnail.svg"
            alt="Image"
            style="height: 350px"
         />
         <div class="title-container">
            <h2>Title of Image</h2>
         </div>
      </swiper-slide>
   </swiper>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import { IonItem, IonLabel } from "@ionic/vue"
import { Swiper, SwiperSlide } from "swiper/vue"
import "swiper/css"

export default defineComponent({
   components: {
      IonItem,
      IonLabel,
      Swiper,
      SwiperSlide,
   },
})
</script>
<style>
.image-container {
   position: relative;
   border-radius: 10px;
   overflow: hidden;
   width: 100%;
   height: 100%;
   margin: 0 10px;
}

.title-container {
   color: #fff;
   background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.042436957693233524) 36%,
      rgba(0, 0, 0, 0.29733891847754723) 64%
   );
   padding: 10px;
   position: absolute;
   bottom: 0;
   left: 0;
   right: 0;
}

h2 {
   font-size: 20px;
   margin: 0;
}
</style>
