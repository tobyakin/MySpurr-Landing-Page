<template>
  <div
    :class="{
      'bg-[#2B3C87] lg:h-[646px] text-white': purple,
      'bg-[#F787A5] md:h-[644px] text-black': pink,
      'bg-[#F50C40] text-white': red,
      'bg-[#2B3C87] md:h-[656px] text-white': blue,
      'bg-[#EFC73A] text-black': yellow,
      'bg-[#C59D10] text-white': orange,
      'bg-[#4DDD76] text-black lg:h-[656px]': green,
      'bg-[#6769C2] md:h-[656px] text-white': lightBlue,
      'bg-[#6769C2] lg:h-[700px] text-white': crowdImg,
      ' md:h-[656px] text-black': noBg,
      'overflow-hidden': overflow,
    }"
    class="py-28 text-white"
  >
    <div class="flex container gap-6 justify-between">
      <div class="md:w-[90%] self-center md:!my-[6%]">
        <h3
          class="lg:text-[40px] leading-[40.14px] lg:leading-[44.8px] text-[36px] font-Satoshi700 !mb-8"
        >
          {{ heading }}
        </h3>
        <p v-if="text" class="font-Satoshi500 text-[23px] leading-[31.05px]">
          {{ text }}
        </p>
        <br />
        <p class="font-Satoshi400 !mb-4">
          {{ text2 }}
        </p>
        <p v-if="text3" class="font-Satoshi400">
          {{ text3 }}
        </p>
        <a
          :href="registerUrl"
          :class="{
            'bg-[#2B3C87] text-white': blueButton,
            'bg-[#EFC73A] text-black font-Satoshi500': yellowButton,
            'bg-[#4DDD76] text-white': greenButton,
            'bg-[#F9F9F9] text-[#000000]': WhiteButtonBlackText,
            'bg-[#F9F9F9] text-[#F50C40]': whiteButton,
            'bg-[#F9F9F9] text-brand': whiteButtonBlueText,
            'bg-[#6769C2]': lightBlueButton,
            'bg-[#DD4A6B]': pinkButton,
          }"
          class="h-auto px-20 text-center py-3 font-Satoshi500 cursor-pointer rounded-[4px] text-[16px] md:w-80"
        >
          Get Started
        </a>
      </div>
      <!-- md:relative -->
      <!-- absolute h-[716px] -top-24 right-0 left-0 -->
      <div class="md:relative w-full hidden lg:block">
        <img
          loading="lazy"
          :class="{
            'absolute  top-[15rem] right-0 h-auto': imgAbsolute,
            'absolute  top-[0.9rem] right-0 h-auto w-[100%]': pouchImg,
            ' absolute  2xl:top-[0rem] lg:top-[14rem] right-0 h-auto w-full': crowdImg,
            ' absolute  2xl:top-[0rem] lg:top-[10rem] right-0 h-auto w-full': multiImg,
            ' absolute  top-[0rem] right-0 h-auto w-[80%]': checkoutImg,
            ' absolute  top-[0rem] right-0 h-auto w-full': mposImg,
          }"
          class="   "
          :src="image"
        />
        <!-- <img loading="lazy"  
          class="absolute right-0 left-0  mx-auto"
          src="@/assets/blog/squareonFace.svg"
        /> -->
        <!--  -->
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
  text3: String,
  image: String,
  registerUrl: String,
  blue: Boolean,
  red: Boolean,
  pink: Boolean,
  yellow: Boolean,
  green: Boolean,
  purple: Boolean,
  yellow: Boolean,
  lightBlue: Boolean,
  overflow: Boolean,
  blueButton: Boolean,
  yellowButton: Boolean,
  yellowwithHiddenButton: Boolean,
  greenButton: Boolean,
  whiteButton: Boolean,
  lightBlueButton: Boolean,
  pinkButton: Boolean,
  whiteButtonBlueText: Boolean,
  imgAbsolute: Boolean,
  orange: Boolean,
  WhiteButtonBlackText: Boolean,
  pouchImg: Boolean,
  crowdImg: Boolean,
  multiImg: Boolean,
  checkoutImg: Boolean,
  mposImg: Boolean,
  noBg: Boolean,
});
</script>

<style scoped></style>
