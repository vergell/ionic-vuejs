<template>
   <router-link
      style="text-decoration: none; color: inherit"
      :to="'/Order/' + data?.id"
   >
      <div class="card" router-link="/Home">
         <img :src="data?.img_url" alt="Food Image" />
         <div class="content">
            <h2 class="title">{{ data?.name }}</h2>
            <p class="type">{{ data?.type }}</p>
            <div class="price-rating-container">
               <p class="price">{{ data?.price }}</p>
               <div class="rating">
                  <span class="star" v-for="i in data?.ratings.average" :key="i"
                     >⭐</span
                  >
               </div>
            </div>
         </div>
      </div>
   </router-link>
</template>
<script lang="ts">
import { Food } from "../api/FoodLists"
export default {
   props: {
      data: Object as () => Food,
   },
}
</script>
<style>
.card {
   min-width: 150px;
   min-height: 260px;
   background-color: #e3e3e3;
   border-radius: 10px;
   box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
   overflow: hidden;
}

.card img {
   display: block;
   margin: 0 auto;
   border-radius: 10px;
   margin-top: 20px;
   width: 150px;
   height: 150px;
   object-fit: cover;
   object-position: center center;
}

.card .content {
   padding: 10px;
}

.card .title {
   font-size: 16px;
   font-weight: bold;
   margin-bottom: 10px;
}

.card .type {
   font-size: 12px;
   color: #252525;
   margin-bottom: 10px;
}

.card .price {
   font-size: 14px;
   font-weight: bold;
   color: #f00;
   margin-bottom: 10px;
}
.price-rating-container {
   display: flex;
   align-items: center;
   justify-content: space-between;
}
</style>
