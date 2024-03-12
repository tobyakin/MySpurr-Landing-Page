<template>
  <div class="py-20 container">
    <div class="flex justify-between">
      <h2
        class="text-dimBrand text-[43px] lg:text-[50px] !font-semibold leading-[68.056px] lg:leading-[74px] font-EBGaramond500 !mb-8"
      >
        New job listing
      </h2>
      <div class="flex items-center">
        <p class="text-[13.279px] font-Satoshi500 text-dimBrand">Explore all jobs</p>
      </div>
    </div>
    <div
      class="grid grid-rows-1 hide-scrollbar !my-8 border-[0.83px] rounded-[8.3px] border-[#DBE8E5]"
    >
      <div
        v-for="item in 4"
        :key="item"
        :class="item < 4 ? 'border-b-[0.83px] border-[#DBE8E5]' : ''"
        class="text-[#030303] p-9 flex items-center gap-4 justify-between"
      >
        <div class="flex w-[70%] gap-[2.25rem]">
          <div class="h-[41.498px] w-[39.176px] bg-[#00000033]"></div>
          <div class="flex gap-[8%] w-full items-center">
            <p class="text-[#000000] font-Satoshi500 text-[16.599px] leading-[26.558px]">
              Graphics Design & Expert in Illustration
            </p>
            <p class="text-[#43D0DF] font-Satoshi500 text-[12.449px]">Fulltime</p>
            <p
              class="flex gap-1 items-center text-[#00000080] font-Satoshi400 text-[13.279px]"
            >
              18 Jul 2018 by <span class="font-Satoshi500 text-black">slack</span>
            </p>
          </div>
        </div>
        <div class="flex w-[30%] items-end justify-end">
          <div class="w-full">
            <p class="text-[#20202099] font-Satoshi400 text-[12.449px]">Lagos, Nigeria</p>
            <p class="text-[#000000] font-Satoshi500 text-[13.279px]">
              Graphics Design, Artist
            </p>
          </div>
          <div class="flex items-center gap-6">
            <button><BookMarkIcon /></button
            ><button class="btn-brand !text-[9.959px] !py-2 !px-6">Apply</button>
          </div>
        </div>
      </div>
    </div>
    <div class="flex justify-center pt-8">
      <div class="bg-[#EFF6F3] border-[#D6ECE0] border-[0.83px] rounded-full p-2 px-3">
        <p class="text-[13.279px] font-Satoshi500 leading-[16.599px]">
          Do you want to post a job for your company?
          <span class="text-dimBrand">We can help.</span
          ><span class="text-dimBrand font-Satoshi400 underline">Click here</span>
        </p>
      </div>
    </div>
  </div>
</template>
<script setup>
import BookMarkIcon from "@/components/icons/bookMarkIcon.vue";
</script>
