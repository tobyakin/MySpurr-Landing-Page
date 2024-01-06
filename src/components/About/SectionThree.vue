<template>
  <div class="container">
    <div class="flex justify-center">
      <h2
        class="text-[#007582] text-[43px] lg:text-[50px] !font-semibold leading-[70px] lg:leading-[70px] font-EBGaramond500 mb-20"
      >
        MySpurr Stories
      </h2>
    </div>
    <div class="flex lg:flex-row flex-col gap-8 pt-[40px]">
      <div v-for="item in Guides" :key="item" class="flex-col flex gap-4 h-auto">
        <img loading="lazy" :src="item.image" alt="" />
        <div class="flex flex-col mx-auto gap-1">
          <p class="text-[#00474F] overflow-hidden text-[19.42px] font-Satoshi500 leading-[30px]">
            {{ item.heading }}
          </p>
          <p class="text-[#00474F] text-[18.114px] font-Satoshi400 flex items-center gap-2">
            {{ item.name }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import ImageOne from '@/assets/img/storyImg1.webp'
import ImageTwo from '@/assets/img/storyImg2.webp'

const Guides = [
  {
    image: ImageOne,
    heading: 'Who knew passion to profit would be this easy',
    name: 'Mark Adewunmi, Brand Strategist'
  },
  {
    image: ImageTwo,
    heading: 'Who knew passion to profit would be this easy',
    name: 'Mark Adewunmi, Brand Strategist'
  }
]
</script>
