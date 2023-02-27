<template>
   <ion-app>
      <ion-split-pane content-id="main-content">
         <ion-menu content-id="main-content" type="overlay">
            <ion-content>
               <ion-item lines="none">
                  <ion-avatar slot="start" style="width: 65px; height: 65px">
                     <img
                        alt="Silhouette of a person's head"
                        v-bind:src="user.img"
                     />
                  </ion-avatar>
                  <ion-menu-toggle :auto-hide="false">
                     <ion-item
                        lines="none"
                        @click="selectedIndex = 43"
                        :router-link="user.url"
                        class="hydrated"
                        :class="{ selected: selectedIndex === 43 }"
                     >
                        <ion-icon
                           aria-hidden="true"
                           :ios="medalOutline"
                           :md="medalSharp"
                        ></ion-icon>
                        <ion-label class="ion-padding-start"
                           >{{ user.points }} Points</ion-label
                        >
                        <ion-icon
                           aria-hidden="true"
                           :ios="chevronForwardOutline"
                           :md="chevronForwardSharp"
                        ></ion-icon></ion-item
                  ></ion-menu-toggle>
               </ion-item>
               <ion-item lines="none">
                  <ion-label>
                     <h1>{{ user.name }}</h1>
                     <p>{{ user.mobile }}</p>
                  </ion-label></ion-item
               >
               <ion-menu-toggle
                  :auto-hide="false"
                  v-for="(p, i) in appPages"
                  :key="i"
               >
                  <ion-item
                     @click="selectedIndex = i"
                     router-direction="root"
                     :router-link="p.url"
                     lines="none"
                     :detail="false"
                     class="hydrated"
                     :class="{ selected: selectedIndex === i }"
                  >
                     <ion-icon
                        slot="start"
                        size="small"
                        class="icon"
                        :ios="p.iosIcon"
                        :md="p.mdIcon"
                     ></ion-icon>
                     <ion-label>
                        <p class="pages">{{ p.title }}</p>
                     </ion-label>
                  </ion-item>
               </ion-menu-toggle>
               <div class="hr"></div>
               <ion-menu-toggle
                  :auto-hide="false"
                  v-for="(p, i) in userRoutes"
                  :key="i"
               >
                  <ion-item
                     @click="selectedIndex = i + 7"
                     router-direction="root"
                     :router-link="p.url"
                     lines="none"
                     :detail="false"
                     class="hydrated"
                     :class="{ selected: selectedIndex === i + 7 }"
                  >
                     <ion-icon
                        slot="start"
                        size="small"
                        class="icon"
                        :ios="p.iosIcon"
                        :md="p.mdIcon"
                     ></ion-icon>
                     <ion-label>
                        <p class="pages">{{ p.title }}</p>
                     </ion-label>
                  </ion-item>
               </ion-menu-toggle>
               <ion-button shape="round" class="ion-padding-start"
                  >Logout</ion-button
               >
            </ion-content>
         </ion-menu>
         <router-view id="main-content"></router-view>
         <!-- <ion-router-outlet id="main-content"></ion-router-outlet> -->
      </ion-split-pane>
   </ion-app>
</template>

<script setup lang="ts">
import {
   IonApp,
   IonContent,
   IonIcon,
   IonItem,
   IonLabel,
   IonMenu,
   IonMenuToggle,
   IonAvatar,
   IonSplitPane,
} from "@ionic/vue"
import { ref } from "vue"
import {
   storefrontOutline,
   storefrontSharp,
   notificationsOutline,
   notificationsSharp,
   homeOutline,
   homeSharp,
   medalOutline,
   medalSharp,
   fastFoodOutline,
   fastFoodSharp,
   helpCircleOutline,
   helpCircleSharp,
   chevronForwardOutline,
   chevronForwardSharp,
   mailOutline,
   mailSharp,
   peopleOutline,
   peopleSharp,
   heartOutline,
   heartSharp,
   locationOutline,
   locationSharp,
   timeOutline,
   timeSharp,
} from "ionicons/icons"

const selectedIndex = ref(0)

const user = ref({
   name: "Chou Tzuyu",
   mobile: "+639078564839",
   points: 29,
   url: "/Points",
   img: "https://c4.wallpaperflare.com/wallpaper/441/95/655/tzuyu-twice-cute-kpop-wallpaper-preview.jpg",
})

const userRoutes = [
   {
      title: "My Orders",
      url: "/user/MyOrders",
      iosIcon: mailOutline,
      mdIcon: mailSharp,
   },
   {
      title: "My Account",
      url: "/user/MyAccount",
      iosIcon: peopleOutline,
      mdIcon: peopleSharp,
   },
   {
      title: "My Favorites",
      url: "/user/Home",
      iosIcon: heartOutline,
      mdIcon: heartSharp,
   },
   {
      title: "Order Tracker",
      url: "/user/OrderTracker",
      iosIcon: locationOutline,
      mdIcon: locationSharp,
   },
   {
      title: "Order History",
      url: "/user/OrderHistory",
      iosIcon: timeOutline,
      mdIcon: timeSharp,
   },
]
const appPages = [
   {
      title: "Home",
      url: "/Home",
      iosIcon: homeOutline,
      mdIcon: homeSharp,
   },
   {
      title: "Order",
      url: "/Order",
      iosIcon: fastFoodOutline,
      mdIcon: fastFoodSharp,
   },
   {
      title: "Notifications",
      url: "/Noticfications",
      iosIcon: notificationsOutline,
      mdIcon: notificationsSharp,
   },
   {
      title: "Store Locator",
      url: "/StoreLocator",
      iosIcon: storefrontOutline,
      mdIcon: storefrontSharp,
   },
   {
      title: "FAQ's",
      url: "/FAQ",
      iosIcon: helpCircleOutline,
      mdIcon: helpCircleSharp,
   },
]
const path = window.location.pathname.split("folder/")[1]
if (path !== undefined) {
   selectedIndex.value = appPages.findIndex(
      (page) => page.title.toLowerCase() === path.toLowerCase(),
   )
}
</script>

<style scoped>
ion-menu ion-content {
   --background: var(--ion-item-background, var(--ion-background-color, #fff));
}

ion-menu.md ion-content {
   --padding-start: 8px;
   --padding-end: 8px;
   --padding-top: 20px;
   --padding-bottom: 20px;
}

ion-menu.md ion-list {
   padding: 20px 0;
}

ion-menu.md ion-note {
   margin-bottom: 30px;
}

ion-menu.md ion-list-header,
ion-menu.md ion-note {
   padding-left: 10px;
}

ion-menu.md ion-list#inbox-list {
   border-bottom: 1px solid var(--ion-color-step-150, #d7d8da);
}

ion-menu.md ion-list#inbox-list ion-list-header {
   font-size: 22px;
   font-weight: 600;

   min-height: 20px;
}

ion-menu.md ion-list#labels-list ion-list-header {
   font-size: 16px;

   margin-bottom: 18px;

   color: #757575;

   min-height: 26px;
}

ion-menu.md ion-item {
   --padding-start: 10px;
   --padding-end: 10px;
   border-radius: 4px;
}

ion-menu.md ion-item.selected {
   --background: rgba(var(--ion-color-primary-rgb), 0.14);
}

ion-menu.md ion-item.selected ion-icon {
   color: var(--ion-color-primary);
}

ion-menu.md ion-item ion-icon {
   color: #616e7e;
}

ion-menu.md ion-item ion-label {
   font-weight: 500;
}

ion-menu.ios ion-content {
   --padding-bottom: 20px;
}

ion-menu.ios ion-list {
   padding: 20px 0 0 0;
}

ion-menu.ios ion-note {
   line-height: 24px;
   margin-bottom: 20px;
}

ion-menu.ios ion-item {
   --padding-start: 16px;
   --padding-end: 16px;
   --min-height: 50px;
}

ion-menu.ios ion-item.selected ion-icon {
   color: var(--ion-color-primary);
}

ion-menu.ios ion-item ion-icon {
   font-size: 24px;
   color: #73849a;
}

ion-menu.ios ion-list#labels-list ion-list-header {
   margin-bottom: 8px;
}

ion-menu.ios ion-list-header,
ion-menu.ios ion-note {
   padding-left: 16px;
   padding-right: 16px;
}

ion-menu.ios ion-note {
   margin-bottom: 8px;
}

ion-note {
   display: inline-block;
   font-size: 16px;

   color: var(--ion-color-medium-shade);
}

ion-item.selected {
   --color: var(--ion-color-primary);
}

.icon {
   display: block;
   vertical-align: middle;
}
.pages {
   font-size: 14px;
   font-weight: 550;
   vertical-align: middle;
   color: black;
}
ion-item {
   --min-height: 0;
}
.hr {
   border-bottom: 1px solid #ccc;
   margin: 10px 0;
   width: 100%;
}
</style>
