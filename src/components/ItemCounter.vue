<template>
   <ion-item lines="none">
      <div style="display: flex; align-items: center">
         <ion-button
            fill="solid"
            color="secondary"
            @click="Count > 1 && Count--"
         >
            <ion-icon :ios="chevronBackOutline" :md="chevronBackSharp" />
         </ion-button>
         <h4 style="margin: 0 15px">{{ Count }}</h4>
         <ion-button fill="solid" color="secondary" @click="Count++">
            <ion-icon :ios="chevronForwardOutline" :md="chevronForwardSharp" />
         </ion-button></div
   ></ion-item>
</template>
<script lang="ts">
import { defineComponent } from "vue"
import {
   chevronBackOutline,
   chevronBackSharp,
   chevronForwardOutline,
   chevronForwardSharp,
} from "ionicons/icons"
import { IonButton, IonItem, IonIcon } from "@ionic/vue"
export default defineComponent({
   components: {
      IonButton,
      IonItem,
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
