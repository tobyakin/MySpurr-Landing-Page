<template>
  <Loader v-if="loading" />
  <div class="lg:py-20 py-[28px] container" v-else>
    <div class="flex lg:flex-row flex-col justify-center items-center lg:justify-between">
      <h2
        class="text-dimBrand text-[43px] lg:text-[50px] text-center !font-semibold leading-[68.056px] lg:leading-[74px] font-EBGaramond500 !mb-4 lg:mb-8"
      >
        MySpurr Blog
      </h2>
      <div class="lg:flex hidden items-center">
        <router-link to="/blog">
          <button class="text-[13.279px] font-Satoshi500 btn-brand">Explore More</button>
        </router-link>
      </div>
    </div>
    <div class="md:grid md:grid-cols-3 gap-10 !my-10 flex-wrap">
      <div v-for="item in recents" :key="item" class="">
        <router-link :to="{ name: 'SingleBlog', params: { category:item.category_slug, slug: item.slug } }">
          <img loading="lazy" class="w-full h-auto rounded-lg" :src="item.featured_photo" alt="" />
        </router-link>
        <div class="flex flex-col gap-3 lg:gap-5 mt-6 font-Satoshi400">
          <button
          class="bg-[#D2F34C] text-[#244034] uppercase p-2 px-5 md:max-w-[200px] rounded-full lg:min-w-[150px] whitespace-nowrap"
        >
          <span class="text-sm">
            {{ item.category }}
          </span>
        </button>
        <router-link :to="{ name: 'SingleBlog', params: { category:item.category_slug, slug: item.slug } }">
          <h3
            class="font-bold font-Satoshi500 text-[20px] leading-[35px] text-[#007582] !my-1"
          >
            {{ item.title }}
          </h3>
        </router-link>
        </div>
      </div>
    </div>
    <div class="flex !my-[40px] justify-center items-center">
      <router-link to="/blog">
        <button class="text-[13.279px] font-Satoshi500 btn-brand">Explore More</button>
      </router-link>
    </div>
  </div>
</template>
<script setup>
import { useBlogStore } from "../../stores/blog";
import { onMounted, ref } from "vue";
import Loader from "@/components/UI/Loader/Loader.vue";


const blog = useBlogStore()
const recents = ref([])
const loading = ref(false)

const fetchRecent = async () => {
  loading.value = true

  const res = await blog.allRecent();
  recents.value = res.data;

  loading.value = false
};

onMounted(() => {
  fetchRecent();
});
</script>
