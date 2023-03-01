<template>
   <div>
      <div style="background: none; display: flex; align-items: center">
         <button class="counter-button" @click="Count > 1 && Count--">
            <ion-icon :ios="chevronBackOutline" :md="chevronBackSharp" />
         </button>
         <h4 style="margin: 0 10px">{{ Count }}</h4>
         <button class="counter-button" @click="Count++">
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
         Count: 1,
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
