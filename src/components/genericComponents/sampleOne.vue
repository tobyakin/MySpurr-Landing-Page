<template>
  <div class="container py-12 md:my-28">
    <div
      :class="{
        'lg:flex-row-reverse ': reverse,
        'lg:flex-row flex-col-reverse ': reverseOnMobile,
      }"
      class="flex lg:gap-24 gap-8 items-center justify-center flex-wrap lg:flex-nowrap"
    >
      <div
        :class="{
          'text-[#DD4A6B]': pink,
          'text-black': black,
          'text-[#6769C2]': lightBlue,
        }"
        class="lg:w-1/2 w-full flex flex-col lg:gap-5 gap-3 py-3.5"
      >
        <h3
          v-html="heading"
          class="md:text-[40px] heading lg:leading-[52.263px] text-3xl text-dimBrand font-Satoshi400"
        ></h3>

        <div
          :class="{ 'hidden ': hideListArea }"
          class="md:w-[90%] w-full font-Satoshi400 lg:my-8 flex flex-col gap-5 md:gap-4"
        >
          <div v-for="item in list" :key="item" class="flex items-center gap-6">
            <!-- <div class="flex-shrink-0">
              <span
                :class="{
                  'text-[#2B3C87]': blue,
                  'text-[#EFC73A]': yellow,
                  'text-[#4DDD76]': green,
                  'text-[#6769C2]': lightBlue,
                  'text-[#DD4A6B]': pink,
                  'text-[#F50C40]': red,
                }"
                class="tick font-Satoshi700"
              ></span>
            </div> -->
            <p class="text-black lg:text-[16px] text-[18px]">
              {{ item.text }}
            </p>
          </div>
        </div>
        <a
          :href="registerUrl"
          :class="{
            'bg-[#2B3C87]': blue,
            'bg-[#EFC73A] text-black ': yellow,
            'bg-[#EFC73A] text-black hidden': yellowwithHiddenButton,
            'bg-[#4DDD76]': green,
            'bg-[#000000] text-white': black,
            'bg-[#4DDD76] hidden': greenWithHiddenButton,
            'bg-[#6769C2] hidden': lightBlueWithHiddenButton,
            'bg-[#6769C2]': lightBlue,
            'bg-[#DD4A6B] ': pink,
            'bg-[#C59D10]  text-white': orangeButton,
          }"
          class="h-auto px-3 text-center py-3 mt-4 font-Satoshi500 cursor-pointer rounded-[4px] text-[16px] md:w-80 text-white"
        >
          Start now
        </a>
      </div>
      <div class="lg:w-1/2 relative">
        <p
          :class="{ hidden: hideText }"
          class="font-Satoshi700 absolute top-20 lg:top-[220px] left-24 lg:left-48 text-[24px] lg:text-[40px] leading-[20px] lg:leading-[44.8px] text-[#F9F9F9]"
        >
          {{ textOnImage }}
        </p>
        <img class="w-full" :src="image" />
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  sectionInfo: Array,
  heading: String,
  text: String,
  text2: String,
  image: String,
  list: Array,
  reverse: Boolean,
  pink: Boolean,
  green: Boolean,
  yellow: Boolean,
  lightBlue: Boolean,
  registerUrl: String,
  yellowwithHiddenButton: Boolean,
  hideText: Boolean,
  greenWithHiddenButton: Boolean,
  textOnImage: String,
  lightBlueWithHiddenButton: Boolean,
  black: Boolean,
  orangeButton: Boolean,
  reverseOnMobile: Boolean,
  hideListArea: Boolean,
  red: Boolean,
});
console.log(props.sectionInfo);
</script>

<style scoped></style>
