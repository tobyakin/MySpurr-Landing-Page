<script setup>
import Navbar from '@/components/Navbar/Navbar.vue'
import Footer from '@/components/Footer.vue'
import { useRouter, useRoute } from 'vue-router'
// import { storeToRefs } from "pinia";
// import dayjs from "dayjs";
// import { useFaqStore } from "@/stores/faq";
// import share from "share-url";
import { onMounted, ref } from 'vue'
const router = useRouter()
const route = useRoute()
import blogbg from '@/assets/img/blog.webp'
import EyeIcon from '@/components/icons/eyeIcon.vue'
import CommentIcon from '@/components/icons/commentIcon.vue'
import ShareIcon from '@/components/icons/shareIcon.vue'
import BlogCard from '@/components/Blog/BlogCard.vue'

// const store = useFaqStore();
// const { singleBlog } = storeToRefs(store);

onMounted(async () => {
  // await store.getSingleBlog(route.params.slug);
  // store.getRelatedBlog(singleBlog.value.blog_category, singleBlog.value.id);
})

// var url = window.location.origin + route.fullPath;
</script>

<template>
  <div>
    <Navbar />
    <div class="py-20 container">
      <div class="font-Satoshi400 my-16">
        <div class="">
          <img :src="blogbg" class="h-[630px]" alt="" />
          <!-- <img
            :src="singleBlog.cover_image"
            class="h-auto cursor-pointer w-full object-cover rounded-xl"
            alt=""
          /> -->
        </div>

        <div class="text-[#007582] py-4 leading-[69.598px] text-[48.719px] font-Satoshi500">
          Showcasing the works of emerging artists
          <!-- {{ singleBlog.title }} -->
        </div>
        <div
          class="border-y-[#254035AB] flex items-center justify-between gap-2 border-y-[0.793px] py-4 mt-12"
        >
          <div class="flex items-center gap-2">
            <div class="flex items-center gap-2 text-[14.747px] font-Satoshi500">
              <EyeIcon /><span>0k</span>
            </div>
            <div class="flex items-center gap-2 text-[14.747px] font-Satoshi500">
              <CommentIcon /><span>0</span>
            </div>
          </div>
          <div><ShareIcon /></div>
        </div>

        <div
          class="flex flex-col md:flex-row lg:pl-[10rem] pr-10 container pl-4 md:justify-between"
        >
          <div class="my-4 flex gap-4">
            <!-- <div>Published: {{ dayjs(singleBlog.created_at).format("DD.MM.YY") }}</div>
            <div>Last Updated: {{ dayjs(singleBlog.created_at).format("DD.MM.YY") }}</div> -->
          </div>
          <div class="flex md:flex-col gap-4">
            <!-- <div>
              <a
                :href="
                  share.facebook({
                    u: url,
                  })
                "
                target="_blank"
              >
                <img class="h-4 w-4" src="@/assets/img/facebook.svg" alt="" />
              </a>
            </div>
            <div>
              <a :href="share.pinterest(url)" target="_blank">
                <img class="h-4 w-4" src="@/assets/img/pinterest.svg" alt="" />
              </a>
            </div> -->
            <div>
              <!-- <a
                :href="
                  share.linkedin({
                    url: url,
                  })
                "
                target="_blank"
              >
                <img class="h-4 w-4" src="@/assets/img/linkedin.svg" alt="" />
              </a> -->
            </div>
            <div>
              <!-- <a
                :href="
                  share.twitter({
                    text: '',
                    in_reply_to: '',
                    url: url,
                    hashtags: '',
                    via: '',
                    related: ',',
                  })
                "
                target="_blank"
              >
                <img class="h-4 w-4" src="@/assets/img/twitter.svg" alt="" />
              </a> -->
            </div>
          </div>
        </div>

        <!-- <div
          v-html="singleBlog.body"
          class="my-4 leading-[32px] lg:px-[10rem] mt-4 container px-4 tracking-[-0.003rem] text-[20px]"
        ></div> -->
      </div>
      <div class="md:grid md:grid-cols-3 gap-10 my-10 min-h-screen flex-wrap">
        <BlogCard
          v-for="blog in filteredTab"
          :key="blog"
          :image="blog.cover_image"
          :heading="blog.title"
          :text="blog.blog_description"
          :date="blog.created_at"
          :blog_category="blog.blog_category"
          :blog="blog"
        />
      </div>

      <div class="my-40 py-10 border-t-[#EBEBEB] border-b-[#EBEBEB] border-t-[1px] border-b-[1px]">
        <div class="flex lg:flex-nowrap flex-wrap lg:gap-0 gap-10 items-center justify-between">
          <div class="w-full">
            <h2
              class="text-[#101621] w-full text-[30px] lg:text-[40px] text-center lg:text-left leading-[29px] lg:leading-[44px] font-EBGaramond500"
            >
              Transform your work flow
            </h2>
            <p
              class="text-[#00000099] text-[20px] font-Satoshi400 text-center lg:text-left leading-[32px]"
            >
              we believe that your work should know no bounds.
            </p>
          </div>
          <div
            class="flex lg:flex-nowrap flex-wrap gap-8 lg:gap-1 justify-center lg:justify-end w-full lg:py-14 py-3 font-Satoshi500"
          >
            <div>
              <a target="_blank" role="button" class="btn-light text-[18px]">
                Looking for Creative talent?
              </a>
            </div>
            <div>
              <a
                role="button"
                class="bg-brand p-3 mx-auto rounded-full px-10 text-white text-[16px] font-Satoshi400"
                >Start free trial
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<style scoped></style>
