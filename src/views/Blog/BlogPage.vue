<script setup>
import { defineAsyncComponent } from 'vue'
import SearchBarIcon from '@/components/icons/searchBarIcon.vue'
import Navbar from '@/components/Navbar/Navbar.vue'
import Footer from '@/components/Footer.vue'
const FormGroup = defineAsyncComponent(() => import('@/components/Form/Input/FormGroup.vue'))
import Arrow from '@/components/icons/paginationArrow.vue'
import BlogCard from '@/components/Blog/BlogCard.vue'
import useFaqStore from '@/stores/faq'
import { ref, computed, onMounted } from 'vue'
// import { storeToRefs } from "pinia";
import WorkFlow from '@/components/Bander/WorkFlow.vue'

const tab = ref('ALL')
const filteredTab = ref([])

const store = useFaqStore()
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
onMounted(() => {
  filterTab('ALL')
})
// const goToPage = (page) => {
//   store.getBlog(page);
// };

// function goToNextPage(page) {
//   store.getBlog(page);
// }

// function goToPrevPage(page) {
//   store.getBlog(page);
// }
// Compute the list of page numbers to display
const displayedPageNumbers = computed(() => {
  const maxDisplayedPages = 5
  const startPage = Math.max(currentPage.value - Math.floor(maxDisplayedPages / 2), 1)
  const endPage = Math.min(startPage + maxDisplayedPages - 1, totalPages.value)
  const pageNumbers = []

  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i)
  }

  return pageNumbers
})

const itemsPerPage = 6 // Number of items to display per page
const currentPage = ref(1) // Calculate the total number of pages
const totalPages = computed(() => Math.ceil(store.blogPost.length / itemsPerPage))

// Function to navigate to a specific page
// Compute the paginated data
const paginatedData = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage
  const end = start + itemsPerPage
  return store.blogPost.slice(start, end)
})

// Function to navigate to the previous page
// function previousPage() {
//   if (currentPage.value > 1) {
//     currentPage.value--;
//   }
// }

// // Function to navigate to the next page
// function nextPage() {
//   if (currentPage.value < totalPages.value) {
//     currentPage.value++;
//   }
// }
const filterTab = (category) => {
  tab.value = category
  if (category != 'ALL') {
    filteredTab.value = paginatedData.value.filter((item) => item.blog_category == category)
  } else {
    filteredTab.value = paginatedData.value
  }
}
</script>

<template>
  <div>
    <Navbar />
    <div class="py-20 container">
      <div class="flex items-center justify-between">
        <h4 class="text-[#007582] font-EBGaramond500 text-[62.883px] leading-[66.813px]">
          MySpurr Blog
        </h4>
        <div class="relative w-1/4">
          <SearchBarIcon class="absolute right-3 top-4" />
          <FormGroup
            labelClasses="font-Satoshi500 text-[15.606px]"
            name="Name"
            placeholder="Search.."
            type="text"
            inputClasses="w-full mt-2 font-light font-Satoshi400  bg-[#F4F4F4] !p-2 border-[#EDEDED] border-[0.509px] opacity-[0.8029] rounded-[6.828px] text-[12.68px]"
          ></FormGroup>
        </div>
      </div>
      <p class="text-[#244034] font-Satoshi400 text-[20.212px] mt-3 leading-[33.126px]">
        Read updates on MySpurr’s products, creative insights, events and partnerships to
        <br class="lg:block hidden" />
        get insight into Africa’s creative marketplace.
      </p>
      <div>
        <div class="font-Satoshi400 !my-10 pb-10">
          <ul
            class="hidden !my-24 md:flex text-sm justify-between font-semibold flex-wrap gap-y-[40px]"
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
                  'border-b-[#007582] border-b-[2.224px]': tab == 'Creativity and Design'
                }"
                class="px-0 py-2 hover:border-b-[#007582]"
              >
                Creativity and Design
              </a>
            </li>
            <li>
              <a
                href="javascript:void(0)"
                @click="filterTab('Creative inspiration')"
                :class="{
                  'border-b-[#007582] border-b-[2.224px]': tab == 'Creative inspiration'
                }"
                class="px-0 py-2 hover:border-b-[#007582]"
              >
                Creative inspiration
              </a>
            </li>
            <li>
              <a
                href="javascript:void(0)"
                @click="filterTab('Case Studies')"
                :class="{
                  'border-b-[#007582] border-b-[2.224px]': tab == 'Case Studies'
                }"
                class="px-0 py-2 hover:border-b-[#007582]"
              >
                Case Studies
              </a>
            </li>
            <li>
              <a
                href="javascript:void(0)"
                @click="filterTab('Interviews and features')"
                :class="{
                  'border-b-[#007582] border-b-[2.224px]': tab == 'Interviews and features'
                }"
                class="px-0 py-2 hover:border-b-[#007582]"
              >
                Interviews and features
              </a>
            </li>
            <li>
              <a
                href="javascript:void(0)"
                @click="filterTab('Company news')"
                :class="{
                  'border-b-[#007582] border-b-[2.224px]': tab == 'Company news'
                }"
                class="px-0 py-2 hover:border-b-[#007582]"
              >
                Company news
              </a>
            </li>
            <li>
              <a
                href="javascript:void(0)"
                @click="filterTab('Industry News and Insights')"
                :class="{
                  'border-b-[#007582] border-b-[2.224px]': tab == 'Industry News and Insights'
                }"
                class="px-0 py-2 hover:border-b-[#007582]"
              >
                Industry News and Insights
              </a>
            </li>
          </ul>
          <!-- <div
            v-if="store.blogPost.length && tab == 'ALL'"
            class="md:grid md:grid-cols-3 gap-10 !my-10 min-h-screen flex-wrap"
          >
            <BlogCard
              v-for="blog in store.blogPost"
              :key="blog"
              :image="blog.cover_image"
              :heading="blog.title"
              :text="blog.blog_description"
              :date="blog.created_at"
              :blog_category="blog.blog_category"
              :blog="blog"
            />
          </div> -->
          <div class="md:grid md:grid-cols-3 gap-10 !my-10 min-h-screen flex-wrap">
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
          <div class="mt-12 flex w-[60%] flex-row justify-center mx-auto">
            <button
              v-for="pageNumber in displayedPageNumbers"
              :key="pageNumber"
              :class="[
                'border-[#007582] p-4 py-2 font-Satoshi500 text-[22.621px] items-center flex',
                pageNumber === 1
                  ? 'border-t-2 border-b-2 border-l-2 rounded-l-[6.032px]'
                  : 'border-y-2 border-r-2',
                pageNumber === currentPage ? 'bg-[#007582] text-white' : ''
              ]"
              @click="goToPage(pageNumber)"
            >
              {{ pageNumber }}
            </button>
            <button
              @click="goToPage(currentPage + 5)"
              class="border-[#007582] border-r-2 border-y-2 p-4 py-2 rounded-r-[6.032px] font-Satoshi500 text-[22.621px] items-center flex"
            >
              <Arrow />
            </button>
          </div>
          <WorkFlow />
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
