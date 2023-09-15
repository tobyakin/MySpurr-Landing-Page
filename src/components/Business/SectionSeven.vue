<template>
  <div class="py-20 container">
    <div class="flex justify-between">
      <h2
        class="text-dimBrand text-[43px] lg:text-[50px] !font-semibold leading-[68.056px] lg:leading-[74px] font-EBGaramond500 mb-8"
      >
        MySpurr Guides
      </h2>
      <div class="flex items-center">
        <button class="text-[13.279px] font-Satoshi500 btn-brand">Explore More</button>
      </div>
    </div>
    <div class="flex lg:flex-row flex-col gap-5 pt-[40px]">
      <div v-for="item in Guides" :key="item" class="flex-col flex gap-4 h-auto">
        <img :src="item.image" alt="" />
        <div class="flex flex-col gap-5">
          <span
            class="text-[#00000059] font-Satoshi400 text-[16px] leading-[25px] ml-5 my-[10px]"
          >
            {{ item.skills }}</span
          >
          <p
            class="text-[#000000] overflow-hidden text-[20px] font-Satoshi500 leading-[30px]"
          >
            {{ item.heading }}
          </p>
          <p class="text-[#0000004D] text-[16px] font-Satoshi500 flex items-center gap-2">
            By <span class="text-[#000000]">{{ item.name }}</span>
          </p>
        </div>
      </div>
    </div>
    <div
      class="my-40 py-10 border-t-[#EBEBEB] border-b-[#EBEBEB] border-t-[1px] border-b-[1px]"
    >
      <div
        class="flex lg:flex-nowrap flex-wrap lg:gap-0 gap-10 items-center justify-between"
      >
        <div class="w-full">
          <h2
            class="text-[#101621] w-full text-[30px] lg:text-[40px] text-center lg:text-left leading-[29px] lg:leading-[44px] font-EBGaramond500"
          >
            Transform your work flow
          </h2>
          <p
            class="text-[#00000099] text-[20px] font-Satoshi400 text-center lg:text-left leading-[32px]"
          >
            we believe that your work should know no bounds.
          </p>
        </div>
        <div
          class="flex lg:flex-nowrap flex-wrap gap-8 lg:gap-1 justify-center lg:justify-end w-full lg:py-14 py-3 font-Satoshi500"
        >
          <div>
            <a target="_blank" role="button" class="btn-light text-[18px]">
              Looking for Creative talent?
            </a>
          </div>
          <div>
            <a
              role="button"
              class="bg-brand p-3 mx-auto rounded-full px-10 text-white text-[16px] font-Satoshi400"
              >Start free trial
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import ImageOne from "@/assets/img/unsplash.png";
import ImageTwo from "@/assets/img/woman.png";
import ImageThree from "@/assets/img/man_working_office_holding_money.png";
const Guides = [
  {
    image: ImageOne,
    skills: "Developer, Code",
    heading: "Print, publishing qui visual layout mockups.",
    name: "Rashed Kabir",
  },
  {
    image: ImageTwo,
    skills: "Design, Art",
    heading: "Designer’s checklist for every UX/UI project.",
    name: "Julie Margot",
  },
  {
    image: ImageThree,
    skills: "Solution, Work",
    heading: "Make more productive work flow in few steps.",
    name: "Jubayer Al Hasan",
  },
];
</script>
