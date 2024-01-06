<template>
  <div class="lg:py-20 py-[28px] container">
    <div class="flex lg:flex-row flex-col justify-center items-center lg:justify-between">
      <h2
        class="text-dimBrand text-[43px] lg:text-[50px] text-center !font-semibold leading-[68.056px] lg:leading-[74px] font-EBGaramond500 mb-4 lg:mb-8"
      >
        MySpurr Guides
      </h2>
      <div class="lg:flex hidden items-center">
        <button class="text-[13.279px] font-Satoshi500 btn-brand">Explore More</button>
      </div>
    </div>
    <div class="flex lg:flex-row flex-col gap-20 lg:gap-5 pt-[40px]">
      <div v-for="item in Guides" :key="item" class="flex-col flex gap-2 lg:gap-4 h-auto">
        <img loading="lazy" :src="item.image" alt="" />
        <div class="flex flex-col gap-3 lg:gap-5">
          <span
            class="text-[#00000059] lg:block hidden font-Satoshi400 text-[16px] leading-[25px] ml-5 my-[10px]"
          >
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
    <div class="flex my-[40px] justify-center items-center">
      <button class="text-[13.279px] font-Satoshi500 btn-brand">Explore More</button>
    </div>

    <WorkFlow />
  </div>
</template>
<script setup>
import ImageOne from '@/assets/img/unsplash.webp'
import ImageTwo from '@/assets/img/woman.webp'
import ImageThree from '@/assets/img/man_working_office_holding_money.webp'
import WorkFlow from '@/components/Bander/WorkFlow.vue'

const Guides = [
  {
    image: ImageOne,
    skills: 'Developer, Code',
    heading: ` Unlocking Creative Excellence: A Guide to Talent Sourcing in the Creative Industry
`,
    name: 'Rashed Kabir'
  },
  {
    image: ImageTwo,
    skills: 'Design, Art',
    heading: ` Crafting Compelling Portfolios: Strategies for Effective Creative Showcase`,
    name: 'Julie Margot'
  },
  {
    image: ImageThree,
    skills: 'Solution, Work',
    heading: `Revolutionizing Recruitment: The MySpurr Approach to Creative Hiring`,
    name: 'Jubayer Al Hasan'
  }
]
</script>
