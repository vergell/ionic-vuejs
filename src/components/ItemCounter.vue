<template>
   <div>
      <div style="background: none; display: flex; align-items: center">
         <button class="counter-button" @click="decrement">
            <ion-icon :ios="chevronBackOutline" :md="chevronBackSharp" />
         </button>
         <h4 style="margin: 0 10px">{{ count }}</h4>
         <button class="counter-button" @click="increment">
            <ion-icon :ios="chevronForwardOutline" :md="chevronForwardSharp" />
         </button>
      </div>
   </div>
</template>
<script lang="ts">
import { defineComponent } from "vue"
import {
   chevronBackOutline,
   chevronBackSharp,
   chevronForwardOutline,
   chevronForwardSharp,
} from "ionicons/icons"
import { IonIcon } from "@ionic/vue"
export default defineComponent({
   components: {
      IonIcon,
   },
   data() {
      return {
         count: 1,
      }
   },
   setup() {
      return {
         chevronBackSharp,
         chevronForwardSharp,
         chevronBackOutline,
         chevronForwardOutline,
      }
   },
   methods: {
      increment() {
         this.count++
         this.$emit("update", this.count)
      },
      decrement() {
         this.count > 1 && this.count--
         this.$emit("update", this.count)
      },
   },
})
</script>
<style>
.counter-button {
   padding: 5px;
   border-radius: 5px;
   background: darkgrey;
   align-items: center;
}
</style>
