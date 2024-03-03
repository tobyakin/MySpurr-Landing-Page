<template>
  <div class="">
    <div
      class="flex md:gap-24 gap-8 items-center justify-center flex-wrap md:flex-nowrap"
    >
      <div class="w-full flex text-[#000000BF] font-Satoshi400 flex-col gap-5">
        <div class="w-full font-Satoshi400 flex flex-col gap-6">
          <div v-for="(item, index) in items" :key="item" class="flex gap-3">
            <div class="">
              <div
                class="h-12 w-12 text-[#31795A] bg-[#EFF6F3] flex justify-center text-center items-center rounded-full"
              >
                <span class="grid place-content-center"> {{ index + 1 }} </span>
              </div>
              <div v-if="index + 1 != items.length" class="flex justify-center">
                <div class="h-16 bg-[#EFF6F3] !my-4 w-[0.8px]"></div>
              </div>
            </div>
            <div>
              <h1 class="text-[14px] font-Satoshi500 mb-0 text-[#31795A]">
                {{ item.school_name }}
              </h1>
              <h1 class="text-[18px] font-Satoshi500 mb-0 text-[#000000]">
                {{ item.field_of_study }}
                ({{ item.degree }})
              </h1>
              <p class="text-[14px] font-Satoshi500 !mb-2 text-[#31795A]">
                {{ item.start_date }} -
                {{ item.end_date }}
              </p>
              <div
                v-html="item.description"
                class="!my-4 leading-[32px] !text-[#000000BF] editor mt-4 font-Satoshi400 w-full tracking-[-0.003rem] text-[16px]"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  sectionInfo: Array,
  text: String,
  image: String,
  list: Array,
  items: Array,
});
</script>

<style scoped></style>
