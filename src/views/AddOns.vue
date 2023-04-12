<template>
   <div class="card-add-on">
      <img
         src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Fresh_Tomato_Sauce_%28Unsplash%29.jpg/1200px-Fresh_Tomato_Sauce_%28Unsplash%29.jpg"
         alt="picture"
      />
      <div class="card-info">
         <div class="card-details-add-on">
            <div>
               <h2 class="card-title">Title</h2>
               <p class="card-type">Type</p>
            </div>
            <input
               type="checkbox"
               v-model="addOns.isChecked"
               @change="handleCheckbox"
            />
         </div>

         <div class="card-details-add-on card-price-add-on">
            <div>
               <p class="card-price">Price</p>
            </div>
            <ItemCounter @update="setCount" />
         </div>
      </div>
   </div>
</template>
<script lang="ts">
import ItemCounter from "./ItemCounter.vue"
import { defineComponent } from "vue"
export default defineComponent({
   components: {
      ItemCounter,
   },
   data() {
      return {
         addOns: {
            count: 1,
            isChecked: false,
         },
      }
   },
   methods: {
      setCount(newValue: any) {
         this.addOns.count = newValue
         this.$emit("update", this.addOns.count)
      },
      handleCheckbox() {
         this.$emit("checkbox-value", this.addOns.isChecked)
      },
   },
})
</script>
<style>
.card-add-on {
   display: flex;
   background-color: #cdcdcd;
   border-radius: 5px;
   width: 100%;
   padding: 10px;
}
.card-details-add-on {
   display: flex;
   justify-content: space-between;
   align-items: center;
}
.card-add-on img {
   width: 80px;
   height: 80px;
   margin-right: 10px;
}
.card-info {
   width: 100%;
}
.card-title {
   margin: 5px;
   font-size: 15px;
}
.card-type {
   margin: 5px;
   font-size: 12px;
}
.card-price {
   margin: 5px;
   font-size: 15px;
}
</style>
