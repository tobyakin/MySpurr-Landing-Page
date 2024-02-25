<template>
  <div class="bg-[#EFEFEF] lg:py-28 py-8">
    <div class="container font-Satoshi400">
      <h2
        :class="{
          'text-brand': blue,
          'text-[#EFC73A]': yellow,
          'text-[#F50C40]': red,
          'text-[#4DDD76]': green,
          'text-[#6769C2]': lightBlue,
          'text-[#C59D10]': orange,
          'text-[#DD4A6B]': pink
        }"
        class="md:text-4xl w-full text-[28px] font-Satoshi700 !my-8 lg:pb-20 pb-6 md:text-center"
      >
        {{ heading }}
      </h2>
      <div class="md:grid md:grid-cols-3 gap-16 justify-between">
        <div
          v-for="info in sectionInfo"
          :key="info"
          class="flex flex-col !my-10 md:!my-0 lg:gap-3 items-center text-center"
        >
          <img loading="lazy" class="w-10 h-10" :src="info.image" />
          <!-- <div class="h-[64px] w-[66.67px] flex justify-center items-center bg-brand rounded-lg lg:hidden">
                <img loading="lazy"   src="@/assets/icons/lock.svg" alt="">
            </div> -->

          <h6 class="font-Satoshi700 lg:py-4 py-2 text-[20px] leading-[22.4px] text-[#333333]">
            {{ info.heading }}
          </h6>
          <p class="text-base font-Satoshi500 text-[16px] leading-[21.6px] text-[#333333]">
            {{ info.text }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  sectionInfo: Array,
  heading: String,
  //   text: String,
  //   two: Boolean,
  //   three: Boolean,
  blue: Boolean,
  red: Boolean,
  yellow: Boolean,
  green: Boolean,
  lightBlue: Boolean,
  pink: Boolean,
  orange: Boolean
})

console.log(props.sectionInfo)
</script>

<style scoped></style>
