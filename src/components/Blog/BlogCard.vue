<template>
  <div class="w-full font-Satoshi400" :class="{ 'md:w-[45%]': two, 'md:w-[31%]': three }">
    <div class="">
      <router-link :to="{ name: 'SingleBlog', params: { category:blog.category_slug, slug: blog.slug } }">
        <img loading="lazy" class="w-full h-auto rounded-lg" :src="image" alt="" />
      </router-link>
      <div class="flex justify-between text-sm mt-6">
        <button
          class="bg-[#D2F34C] text-[#244034] uppercase p-2 px-5 md:max-w-[200px] rounded-full lg:min-w-[150px] whitespace-nowrap"
        >
          <span class="text-sm">
            {{ props.blog_category }}
          </span>
        </button>
        <!-- <button class="border-none bg-white text-black h-9 p-2 whitespace-nowrap">
          {{ dateFormat(props.date) }}
        </button> -->
      </div>

      <router-link :to="{ name: 'SingleBlog', params: { category:blog.category_slug, slug: blog.slug } }">
        <h3
          class="font-bold font-Satoshi500 text-[25px] leading-[35px] text-[#007582] !my-4"
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
