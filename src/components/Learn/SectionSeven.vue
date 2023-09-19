<template>
  <div class="py-20 container">
    <div class="flex justify-between">
      <h2
        class="text-[#007582] text-[43px] lg:text-[72px] !font-semibold leading-[70px] lg:leading-[74px] font-EBGaramond500 mb-8"
      >
        Committed to industry excellence <br class="md:block hidden" />
        and expertise
      </h2>
      <div class="flex hidden items-center">
        <button class="text-[13.279px] font-Satoshi500 btn-brand">Explore More</button>
      </div>
    </div>
    <div class="flex lg:flex-row flex-col gap-5 pt-[40px]">
      <div v-for="item in Guides" :key="item" class="flex-col flex gap-4 h-auto">
        <img :src="item.image" alt="" />
        <div class="flex hidden flex-col gap-5">
          <span class="text-[#00000059] font-Satoshi400 text-[16px] leading-[25px] ml-5 my-[10px]">
            {{ item.skills }}</span
          >
          <p class="text-[#000000] overflow-hidden text-[20px] font-Satoshi500 leading-[30px]">
            {{ item.heading }}
          </p>
          <p class="text-[#0000004D] text-[16px] font-Satoshi500 flex items-center gap-2">
            By <span class="text-[#000000]">{{ item.name }}</span>
          </p>
        </div>
      </div>
    </div>
    <WorkFlow />
  </div>
</template>
<script setup>
import ImageOne from '@/assets/img/resource.webp'
import ImageTwo from '@/assets/img/courses.webp'
import WorkFlow from '@/components/Bander/WorkFlow.vue'

const Guides = [
  {
    image: ImageOne,
    skills: 'Developer, Code',
    heading: 'Print, publishing qui visual layout mockups.',
    name: 'Rashed Kabir'
  },
  {
    image: ImageTwo,
    skills: 'Design, Art',
    heading: 'Designer’s checklist for every UX/UI project.',
    name: 'Julie Margot'
  }
]
</script>
