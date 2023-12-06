<script setup>
import { useHead } from "@vueuse/head";
import { defineAsyncComponent } from "vue";
import SearchBarIcon from "@/components/icons/searchBarIcon.vue";
import Navbar from "@/components/Navbar/Navbar.vue";
import Footer from "@/components/Footer.vue";
const FormGroup = defineAsyncComponent(() =>
  import("@/components/Form/Input/FormGroup.vue")
);
import CaseStudyCard from "@/components/CaseStudy/CaseStudyCard.vue";
import useFaqStore from "@/stores/faq";
import { ref, computed, reactive, onMounted } from "vue";
// import { storeToRefs } from "pinia";
import SampleThree from "@/assets/img/sampleThree.webp";
import WorkFlow from "@/components/Bander/WorkFlow.vue";
import Arrow from "@/components/icons/paginationArrow.vue";

const tab = ref("ALL");
const filteredTab = ref([]);
const blogPost = [
  {
    slug: 1,
    cover_image: SampleThree,
    title: "How to Build a Successful Career in the Creative Industry",
    blog_category: "career development",
    blog_description: "trdfgfg",
    created_at: "16 Jul 2018",
  },
  {
    slug: 2,
    cover_image: SampleThree,
    title: "How to Build a Successful Career in the Creative Industry",
    blog_category: "Company news",
    blog_description: "trdfgfg",
    created_at: "16 Jul 2018",
  },
  {
    slug: 3,
    cover_image: SampleThree,
    title: "How to Build a Successful Career in the Creative Industry",
    blog_category: "Creativity and Design",
    blog_description: "trdfgfg",
    created_at: "16 Jul 2018",
  },
];
const store = useFaqStore();
// const { blog } = storeToRefs(store);
// const pages = computed(() => {
//   const divsor = Math.floor(blog.value.meta.current_page / 3);
//   console.log(blog.value.meta.current_page % 3);
//   const number = blog.value.meta.current_page % 3 ? divsor * 3 + 1 : (divsor - 1) * 3 + 1;
//   let pages = [];
//   for (let index = number; index < number + 3; index++) {
//     pages.push(index);
//   }
//   return pages;
// });

// onMounted(async () => {
//   await store.getBlog();
// });

// const goToPage = (page) => {
//   store.getBlog(page);
// };

// function goToNextPage(page) {
//   store.getBlog(page);
// }

// function goToPrevPage(page) {
//   store.getBlog(page);
// }

const filterTab = (category) => {
  tab.value = category;
  filteredTab.value = [];
  if (category != "ALL") {
    filteredTab.value = store.blogPost.filter((item) => item.blog_category == category);
  }
};
const siteData = reactive({
  title: `MySpurr | Case Study `,
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
      content: "Case Study,",
    },
  ],
});
</script>

<template>
  <div>
    <Navbar />
    <div class="py-20 lg:!pt-[100px] px-[40px]">
      <div class="flex flex-col items-center text-center justify-between">
        <h4
          class="text-[#011B1F] font-EBGaramond400 lg:text-[70px] text-[35px] leading-10 lg:leading-[78.526px] tracking-[-1px]"
        >
          Explore our curated collection <br class="md:block hidden" />
          of exceptional portfolio projects
        </h4>
      </div>
      <p
        class="text-[#244034] text-center font-Satoshi400 mt-10 text-[20.212px] leading-[33.126px]"
      >
        Read updates on MySpurr’s products, creative insights, events and partnerships to
        <br class="lg:block hidden" />
        get insight into Africa’s creative marketplace.
      </p>
      <div class="relative hidden lg:flex w-[70%] mx-auto my-12">
        <SearchBarIcon class="absolute left-3 top-3" /><input
          class="w-full font-light font-Satoshi400 text-[14px] p-3 pl-9 pr-24 border-[#F0F0F0] border-[1px] opacity-[0.8029] rounded-[7px] text-sm"
          placeholder=" Search here.."
          type="text"
        /><button
          class="absolute right-0 top-3 font-Satoshi400 text-[16px] px-[21px] border-l-[#F0F0F0] border-l-[1px]"
        >
          Search
        </button>
      </div>

      <div>
        <div class="font-Satoshi400 lg:my-10 lg:pb-10 flex flex-col">
          <!-- <ul
            class="hidden my-24 text-sm justify-between font-semibold flex-wrap gap-y-[40px]"
          >
            <li>
              <a
                href="javascript:void(0)"
                @click="filterTab('ALL')"
                :class="{ 'border-b-[#007582] border-b-[2.224px]': tab == 'ALL' }"
                class="px-0 py-2 hover:border-b-[#007582]"
              >
                All
              </a>
            </li>
            <li>
              <a
                href="javascript:void(0)"
                @click="filterTab('Creativity and Design')"
                :class="{
                  'border-b-[#007582] border-b-[2.224px]': tab == 'Creativity and Design',
                }"
                class="px-0 py-2 hover:border-b-[#007582]"
              >
                Illustration
              </a>
            </li>
            <li>
              <a
                href="javascript:void(0)"
                @click="filterTab('Creative inspiration')"
                :class="{
                  'border-b-[#007582] border-b-[2.224px]': tab == 'Creative inspiration',
                }"
                class="px-0 py-2 hover:border-b-[#007582]"
              >
                Motion graphics
              </a>
            </li>
            <li>
              <a
                href="javascript:void(0)"
                @click="filterTab('Case Studies')"
                :class="{
                  'border-b-[#007582] border-b-[2.224px]': tab == 'Case Studies',
                }"
                class="px-0 py-2 hover:border-b-[#007582]"
              >
                Brand identity design
              </a>
            </li>
            <li>
              <a
                href="javascript:void(0)"
                @click="filterTab('Interviews and features')"
                :class="{
                  'border-b-[#007582] border-b-[2.224px]':
                    tab == 'Interviews and features',
                }"
                class="px-0 py-2 hover:border-b-[#007582]"
              >
                Voice-over
              </a>
            </li>
            <li>
              <a
                href="javascript:void(0)"
                @click="filterTab('Company news')"
                :class="{
                  'border-b-[#007582] border-b-[2.224px]': tab == 'Company news',
                }"
                class="px-0 py-2 hover:border-b-[#007582]"
              >
                Animation
              </a>
            </li>
            <li>
              <a
                href="javascript:void(0)"
                @click="filterTab('Industry News and Insights')"
                :class="{
                  'border-b-[#007582] border-b-[2.224px]':
                    tab == 'Industry News and Insights',
                }"
                class="px-0 py-2 hover:border-b-[#007582]"
              >
                UI/UX design
              </a>
            </li>
            <li>
              <a
                href="javascript:void(0)"
                @click="filterTab('Industry News and Insights')"
                :class="{
                  'border-b-[#007582] border-b-[2.224px]':
                    tab == 'Industry News and Insights',
                }"
                class="px-0 py-2 hover:border-b-[#007582]"
              >
                Photography
              </a>
            </li>
            <li>
              <a
                href="javascript:void(0)"
                @click="filterTab('Industry News and Insights')"
                :class="{
                  'border-b-[#007582] border-b-[2.224px]':
                    tab == 'Industry News and Insights',
                }"
                class="px-0 py-2 hover:border-b-[#007582]"
              >
                Modelling
              </a>
            </li>
            <li>
              <a
                href="javascript:void(0)"
                @click="filterTab('Industry News and Insights')"
                :class="{
                  'border-b-[#007582] border-b-[2.224px]':
                    tab == 'Industry News and Insights',
                }"
                class="px-0 py-2 hover:border-b-[#007582]"
              >
                Music
              </a>
            </li>
            <li>
              <a
                href="javascript:void(0)"
                @click="filterTab('Industry News and Insights')"
                :class="{
                  'border-b-[#007582] border-b-[2.224px]':
                    tab == 'Industry News and Insights',
                }"
                class="px-0 py-2 hover:border-b-[#007582]"
              >
                Production
              </a>
            </li>
            <li>
              <a
                href="javascript:void(0)"
                @click="filterTab('Industry News and Insights')"
                :class="{
                  'border-b-[#007582] border-b-[2.224px]':
                    tab == 'Industry News and Insights',
                }"
                class="px-0 py-2 hover:border-b-[#007582]"
              >
                Film/video
              </a>
            </li>
            <li>
              <a
                href="javascript:void(0)"
                @click="filterTab('Industry News and Insights')"
                :class="{
                  'border-b-[#007582] border-b-[2.224px]':
                    tab == 'Industry News and Insights',
                }"
                class="px-0 py-2 hover:border-b-[#007582]"
              >
                Brand strategy
              </a>
            </li>
          </ul> -->
          <div
            v-if="store.blogPost.length && tab == 'ALL'"
            class="md:grid md:grid-cols-6 gap-10 my-10 h-full flex-wrap"
          >
            <CaseStudyCard
              class="h-fit"
              v-for="blog in store.blogPost"
              :key="blog"
              :image="blog.cover_image"
              :heading="blog.title"
              :text="blog.blog_description"
              :date="blog.created_at"
              :blog_category="blog.blog_category"
              :blog="blog"
            />
          </div>
          <div v-else class="md:grid md:grid-cols-6 gap-10 my-10 min-h-fit flex-wrap">
            <CaseStudyCard
              class="h-fit"
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
          <div class="mt-12 flex w-[60%] flex-row justify-center mx-auto">
            <button
              v-for="i in 4"
              :key="i"
              :class="
                i == 1
                  ? 'border-[#007582] border-x-2 border-t-2 border-b-2 p-4 py-2 rounded-l-[6.032px] font-Satoshi500 text-[22.621px] items-center flex'
                  : 'border-[#007582] border-y-2 border-r-2 p-4 py-2 font-Satoshi500 text-[22.621px] items-center flex'
              "
            >
              {{ i }}
            </button>
            <button
              class="border-[#007582] border-r-2 border-y-2 p-4 py-2 rounded-r-[6.032px] font-Satoshi500 text-[22.621px] items-center flex"
            >
              <Arrow />
            </button>
          </div>
          <WorkFlow class="container" />

          <!-- <ul
              v-if="blog.links"
              class="flex items-center gap-2 w-full text-sm justify-center"
            >
              <li
                v-if="blog.links.prev"
                class="px-5 py-1 cursor-pointer rounded-3xl text-xs"
                @click="goToPrevPage(blog.meta.current_page - 1)"
              >
                Prev
              </li>
              <li
                v-for="page in pages"
                :key="page"
                class="px-5 py-1 cursor-pointer rounded-3xl text-xs"
                :class="{
                  'bg-[#878787] text-white': blog.meta.current_page === page,
                  'bg-white': blog.meta.current_page !== page,
                }"
                @click="goToPage(page)"
              >
                {{ page }}
              </li>
              <li
                v-if="blog.links.next"
                class="px-5 py-1 text-xs cursor-pointer rounded-3xl bg-[#3A3A3A] text-white"
                @click="goToNextPage(blog.meta.current_page + 1)"
              >
                Older
              </li>
            </ul> -->
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<style scoped></style>
