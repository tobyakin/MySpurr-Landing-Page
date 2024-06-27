<script setup>
import { computed, onMounted, reactive, ref, watch } from 'vue'
import Navbar from '@/components/Navbar/Navbar.vue'
import Footer from '@/components/Footer.vue'
import { useRoute } from 'vue-router'
import BlogCard from '@/components/Blog/BlogCard.vue'
import { useBlogStore } from '../../stores/blog';
import Loader from "@/components/UI/Loader/Loader.vue";
import { useHead } from '@vueuse/head'
// import { storeToRefs } from "pinia";
// import dayjs from "dayjs";
// import { useFaqStore } from "@/stores/faq";
// import share from "share-url";
// import EyeIcon from '@/components/icons/eyeIcon.vue'
// import CommentIcon from '@/components/icons/commentIcon.vue'
// import ShareIcon from '@/components/icons/shareIcon.vue'

const siteData = reactive({
  title: `MySpurr | Blog`,
  description: ``,
});

useHead({
  // Can be static or computed
  title: computed(() => siteData.title),
  meta: [
    {
      name: `description`,
      content: computed(() => siteData.description),
    },
    {
      property: "keywords",
      content: "",
    },
  ],
});

const route = useRoute()
const blog = useBlogStore()
const singleBlog = ref({})
const allBlog = ref([])
const loading = ref(false)

const fetchSingleBlog = async() => {
  loading.value = true

  const res = await blog.getSingleBlogSlug(route.params.slug);
  singleBlog.value = res.data

  loading.value = false
}

const fetchBlogs = async(page, category) => {
  loading.value = true

  const res = await blog.allBlogs(page, category);
  allBlog.value = res.data;

  loading.value = false
}

const filteredBlogs = computed(() => {
  return allBlog.value.filter(blog => blog.id !== singleBlog.value.id);
});

onMounted(async () => {
  fetchSingleBlog()
  fetchBlogs()
})

watch(
  () => route.params.slug,
  async (newSlug, oldSlug) => {
    if (newSlug !== oldSlug) {
      await fetchSingleBlog()
      await fetchBlogs()
    }
  }
)
</script>

<template>
  <div>
    <Navbar />
    <Loader v-if="loading" />
    <div class="py-16 container" v-else>
      <div class="font-Satoshi400 px-5 lg:px-0 lg:px-0">
        <div class="">
          <img loading="lazy"  
            :src="singleBlog.featured_photo"
            class="cursor-pointer w-full object-cover rounded-xl h-auto lg:h-[550px] md:h-[550px]"
            alt=""
          />
        </div>

        <div class="text-[#007582] py-8 text-[24px] lg:text-[42px] md:text-[42px] font-bold">
          {{ singleBlog.title }}
        </div>
        <div
          class="border-t-[#254035AB] flex items-center justify-between gap-2 border-t-[0.793px] mb-8"
        >
          <!-- <div class="flex items-center gap-2">
            <div class="flex items-center gap-2 text-[14.747px] font-Satoshi500">
              <EyeIcon /><span>0k</span>
            </div>
            <div class="flex items-center gap-2 text-[14.747px] font-Satoshi500">
              <CommentIcon /><span>0</span>
            </div>
          </div>
          <div><ShareIcon /></div> -->
        </div>

        <!-- <div
          class="flex flex-col md:flex-row container md:justify-between"
        >
          <div class="!my-4 flex gap-4">
            <div>Published: {{ dayjs(singleBlog.created_at).format("DD.MM.YY") }}</div>
            <div>Last Updated: {{ dayjs(singleBlog.created_at).format("DD.MM.YY") }}</div>
          </div>
          <div class="flex md:flex-col gap-4">
            <div>
              <a
                :href="
                  share.facebook({
                    u: url,
                  })
                "
                target="_blank"
              >
                <img loading="lazy"   class="h-4 w-4" src="@/assets/img/facebook.svg" alt="" />
              </a>
            </div>
            <div>
              <a :href="share.pinterest(url)" target="_blank">
                <img loading="lazy"   class="h-4 w-4" src="@/assets/img/pinterest.svg" alt="" />
              </a>
            </div>
            <div>
              <a
                :href="
                  share.linkedin({
                    url: url,
                  })
                "
                target="_blank"
              >
                <img loading="lazy"   class="h-4 w-4" src="@/assets/img/linkedin.svg" alt="" />
              </a>
            </div>
            <div>
              <a
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
                <img loading="lazy"   class="h-4 w-4" src="@/assets/img/twitter.svg" alt="" />
              </a>
            </div>
          </div>
        </div> -->

        <div
          v-html="singleBlog.content"
          class="!my-4 leading-[32px] tracking-[-0.003rem] text-[18px] lg:text-[20px] md:text-[20px]"
        ></div>
      </div>

      <div class="mt-20 mb-6">
        <h3 class="text-2xl font-bold text-[#007582]">More from MySpurr</h3>
      </div>

      <div class="md:grid md:grid-cols-3 gap-10 flex-wrap">
        <BlogCard
          v-for="blog in filteredBlogs"
          :key="blog"
          :image="blog.featured_photo"
          :heading="blog.title"
          :text="blog.description"
          :date="blog.created_at"
          :blog_category="blog.category"
          :blog="blog"
        />
      </div>

      <div class="py-10 border-t-[#EBEBEB] border-b-[#EBEBEB] border-t-[1px] border-b-[1px] mt-16">
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
                >Sign up for free
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
