<template>
  <div class="bg-[#E9FAFB] py-20">
    <div class="container">
      <div class="flex justify-center">
        <h2
          class="text-dimBrand text-[43px] lg:text-[72px] !font-semibold leading-[68.056px] lg:leading-[74px] font-EBGaramond500 mb-8"
        >
          Loved by Creatives
        </h2>
      </div>
      <div class="md:grid md:grid-cols-3 flex overflow-x-scroll gap-4 my-4 mb-[50px]">
        <div
          v-for="item in 9"
          :key="item"
          class="bg-white h-[218.617px] lg:w-full w-[413.625px] rounded-[15.24px]"
        ></div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style></style>
