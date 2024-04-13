<template>
  <div class="w-full font-Satoshi400" :class="{ 'md:w-[45%]': two, 'md:w-[31%]': three }">
    <div class="">
      <router-link :to="{ name: 'single-portfolio', params: { id: blog.id } }">
        <img
          loading="lazy"
          class="w-full bg-[#EFF6F3] object-cover h-[188.32px] rounded-lg"
          :src="image"
        />
      </router-link>
      <div>
        <div class="flex items-center justify-between gap-2 py-2">
          <div>
            <h3 class="font-Satoshi500 text-[12.778px] leading-[16.327px] text-[#000000]">
              {{ heading }}
            </h3>
            <p
              class="font-Satoshi400 text-[10.648px] leading-[16.327px] text-[#00000066]"
            >
              {{ blog?.user?.first_name }}
            </p>
          </div>

          <!-- <div class="flex items-center gap-2">
            <div class="flex items-center gap-2 font-Satoshi500">
              <span class="text-[14.048px] text-[#00000066] font-Satoshi400">1234</span>
              <EyeIcon class="h-[20.078px] w-[20.078px]" />
            </div>
            <div class="flex items-center gap-2 font-Satoshi500">
              <span class="text-[14.048px] text-[#00000066] font-Satoshi400">15</span
              ><CommentIcon class="h-[15.358px] w-[15.358px]" />
            </div>
          </div> -->
        </div>
      </div>
      <!-- <div class="flex justify-between text-sm mt-6">
        <button
          class="bg-[#D2F34C] text-[#244034] h-9 uppercase p-2 px-3 md:max-w-[200px] rounded-full lg:min-w-[150px]"
        >
          {{ props.blog_category }}
        </button>
        <button class="border-none bg-white text-black h-9 p-2">
          {{ dateFormat(props.date) }}
        </button>
      </div> -->
      <!-- <router-link :to="{ name: 'SingleBlog', params: { slug: blog.slug } }">
        <h3
          class="font-bold font-Satoshi500 text-[26.457px] leading-[37.796px] text-[#007582] !my-4"
        >
          {{ props.heading }}
        </h3>
      </router-link>
      <div class="text-[#AAAAAA] font-Satoshi400 text-[16.844px] h-9 p-2">
        {{ dateFormat(props.date) }}
      </div> -->
    </div>
  </div>
</template>

<script setup>
import dayjs from "dayjs";
import EyeIcon from "@/components/icons/eyeIcon.vue";
import CommentIcon from "@/components/icons/commentIcon.vue";
import ShareIcon from "@/components/icons/shareIcon.vue";

const props = defineProps({
  image: String,
  heading: String,
  text: String,
  two: Boolean,
  three: Boolean,
  date: String,
  blog_category: String,
  blog: Object,
});

const dateFormat = (date) => {
  return dayjs(date).format("DD MMMM YYYY");
};
</script>

<style scoped></style>
