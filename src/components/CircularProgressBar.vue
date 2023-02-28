<template>
   <div class="circle-wrap">
      <div class="circle">
         <div class="mask full">
            <div class="fill"></div>
         </div>
         <div class="mask half">
            <div class="fill"></div>
         </div>
         <div class="inside-circle">
            {{ data?.userPoints }}/{{ data?.totalPoints }}
         </div>
      </div>
   </div>
</template>

<script lang="ts">
interface Points {
   userPoints: number
   totalPoints: number
}
export default {
   props: {
      data: Object as () => Points,
      default: () => ({ userPoints: 0, totalPoints: 0 }),
   },
   computed: {
      degrees(this: { data?: Points }): string {
         if (!this.data) {
            return ""
         }
         return (this.data.userPoints / this.data.totalPoints) * 180 + "deg"
      },
   },
}
</script>
<style media="screen" scoped>
@import url(http://fonts.googleapis.com/css?family=Roboto:400,700,300);
body {
   font-family: "Roboto", sans-serif;
   background: #d2eaf1;
}
.circle-wrap {
   margin: auto;
   width: 150px;
   height: 150px;
   background: #fefcff;
   border-radius: 50%;
   border: 1px solid #cdcbd0;
}
.circle-wrap .circle .mask,
.circle-wrap .circle .fill {
   width: 150px;
   height: 150px;
   position: absolute;
   border-radius: 50%;
}

.circle-wrap .circle .mask {
   clip: rect(0px, 150px, 150px, 75px);
}

.circle-wrap .inside-circle {
   width: 122px;
   height: 122px;
   border-radius: 50%;
   background: #d2eaf1;
   line-height: 120px;
   text-align: center;
   margin-top: 14px;
   margin-left: 14px;
   color: #1e51dc;
   position: absolute;
   z-index: 100;
   font-weight: 700;
   font-size: 2em;
}

/* color animation */

/* 3rd progress bar */
.mask .fill {
   clip: rect(0px, 75px, 150px, 0px);
   background-color: #227ded;
}

.mask.full,
.circle .fill {
   animation: fill ease-in-out 3s;
   transform: rotate(v-bind(degrees));
}

@keyframes fill {
   0% {
      transform: rotate(0deg);
   }
   100% {
      transform: rotate(v-bind(degrees));
   }
}
</style>
