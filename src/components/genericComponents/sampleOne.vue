<template>
  <div class="container py-12 md:!my-28">
    <div
      :class="{
        'lg:flex-row-reverse ': reverse,
        'lg:flex-row flex-col-reverse ': reverseOnMobile
      }"
      class="flex lg:gap-24 gap-8 items-center justify-center flex-wrap lg:flex-nowrap"
    >
      <div class="lg:w-1/2 w-full flex flex-col lg:gap-12 gap-3 py-3.5">
        <h3
          v-html="heading"
          class="md:text-[40px] heading lg:leading-[52.263px] text-3xl text-dimBrand font-Satoshi400"
        ></h3>

        <div
          :class="{ 'hidden ': hideListArea }"
          class="md:w-[90%] w-full font-Satoshi400 flex flex-col gap-5 md:gap-4"
        >
          <div v-for="item in list" :key="item" class="flex items-center gap-6">
            <p class="text-black lg:text-[16px] text-[18px]">
              {{ item.text }}
            </p>
          </div>
        </div>
      </div>
      <div class="lg:w-1/2">
        <img loading="lazy" class="w-full" :src="image" />
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  sectionInfo: Array,
  heading: String,
  image: String,
  list: Array,
  reverse: Boolean,
  reverseOnMobile: Boolean,
  hideListArea: Boolean
})
console.log(props.sectionInfo)
</script>

<style scoped></style>
