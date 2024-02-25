<template>
  <div class="w-full font-Satoshi400" :class="{ 'md:w-[45%]': two, 'md:w-[31%]': three }">
    <div class="">
      <router-link :to="{ name: 'SingleBlog', params: { id: blog.slug } }">
        <img loading="lazy" class="w-full h-auto max-h-[283.472px] rounded-lg" :src="image" />
      </router-link>
      <div class="flex justify-between text-sm mt-6">
        <button
          class="bg-[#D2F34C] text-[#244034] h-9 uppercase p-2 px-3 md:max-w-[200px] rounded-full lg:min-w-[150px]"
        >
          {{ props.blog_category }}
        </button>
        <!-- <button class="border-none bg-white text-black h-9 p-2">
          {{ dateFormat(props.date) }}
        </button> -->
      </div>
      <router-link :to="{ name: 'SingleBlog', params: { id: blog.slug } }">
        <h3
          class="font-bold font-Satoshi500 text-[26.457px] leading-[37.796px] text-[#007582] !my-4"
        >
          {{ props.heading }}
        </h3>
      </router-link>
      <div class="text-[#AAAAAA] font-Satoshi400 text-[16.844px] h-9 p-2">
        {{ dateFormat(props.date) }}
      </div>
    </div>
  </div>
</template>

<script setup>
import dayjs from 'dayjs'
const props = defineProps({
  image: String,
  heading: String,
  text: String,
  two: Boolean,
  three: Boolean,
  date: String,
  blog_category: String,
  blog: Object
})

const dateFormat = (date) => {
  return dayjs(date).format('DD MMMM YYYY')
}
</script>

<style scoped></style>
