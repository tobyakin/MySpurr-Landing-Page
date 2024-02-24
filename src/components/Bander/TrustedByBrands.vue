<template>
  <div class="flex lg:flex-row flex-col items-center w-[90%] mx-auto !my-20 justify-between">
    <div class="lg:w-[25%] flex flex-row items-center">
      <h4
        class="lg:text-[36.94px] text-[20px] text-[#011B1F] font-Satoshi400 lg:leading-[64.031px]"
      >
        Trusted by
      </h4>
    </div>
    <div class="flex flex-row gap-12 overflow-x-auto hide-scrollbar cour overflow-auto py-4 h-auto">
      <img
        loading="lazy"
        v-for="logo in BrandLogos"
        :key="logo"
        :src="logo.image"
        class="lg:h-[40px] h-[30px] w-full"
        alt=""
      />
    </div>
  </div>
</template>
<script setup>
import Airbnb from '@/assets/img/BrandLogos/airbnb.png'
import Dribble from '@/assets/img/BrandLogos/dribble.png'
import Goggle from '@/assets/img/BrandLogos/google.png'
import Slack from '@/assets/img/BrandLogos/slack.png'
import Vine from '@/assets/img/BrandLogos/vine.png'
import Shipbob from '@/assets/img/BrandLogos/shipbob.png'

const BrandLogos = [
  {
    image: Airbnb
  },
  {
    image: Dribble
  },
  {
    image: Goggle
  },
  {
    image: Slack
  },
  {
    image: Vine
  },
  {
    image: Shipbob
  }
]
</script>
