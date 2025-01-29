<script setup>
import { computed, reactive, ref, onMounted } from 'vue';
import SearchBarIcon from '@/components/icons/searchBarIcon.vue';
import Navbar from '@/components/Navbar/Navbar.vue';
import Footer from '@/components/Footer.vue';
import FormGroup from '@/components/Form/Input/FormGroup.vue';
import Arrow from '@/components/icons/paginationArrow.vue';
import BlogCard from '@/components/Blog/BlogCard.vue';
import { useBlogStore } from '../../stores/blog';
import Loader from "@/components/UI/Loader/Loader.vue";
import WorkFlow from '@/components/Bander/WorkFlow.vue';
import { useHead } from '@vueuse/head';

const tab = ref('ALL');
const allBlog = ref([]);
const filteredBlog = ref([]);
const currentPage = ref(1);
const totalPages = ref(1);
const perPage = ref(9); // Set items per page to 9
const displayedPageNumbers = ref([]);
const categories = ref([]);
const blog = useBlogStore();
const loading = ref(false);

const siteData = reactive({
  title: `MySpurr | Blog`,
  description: ``,
});

useHead({
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

const filterTab = (category) => {
  tab.value = category;
  fetchBlogs(1, category.toString());
};

const fetchBlogs = async (page = 1, category = 'ALL') => {
  loading.value = true;
  const res = await blog.allBlogs(page, category);
  allBlog.value = res.data;
  
  // Filter blogs based on the selected category and slice to show only 9 items per page
  filteredBlog.value = category === 'ALL'
    ? allBlog.value.slice((page - 1) * perPage.value, page * perPage.value)
    : allBlog.value.filter(blog => blog.category_id === category)
        .slice((page - 1) * perPage.value, page * perPage.value);

  currentPage.value = res.pagination.current_page;
  totalPages.value = Math.ceil((category === 'ALL' ? allBlog.value.length : filteredBlog.value.length) / perPage.value);

  updateDisplayedPageNumbers();

  loading.value = false;
};

const fetchCategories = async () => {
  const res = await blog.allCategory();
  categories.value = res.data;
};

// Function to display five page numbers at a time based on the current page
const updateDisplayedPageNumbers = () => {
  const startPage = Math.max(1, currentPage.value - 2);
  const endPage = Math.min(totalPages.value, startPage + 4);
  
  displayedPageNumbers.value = Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i);
};

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth' // Smooth scrolling effect
  });
}

const goToPage = (page) => {
  if (page >= 1 && page <= totalPages.value) {
    currentPage.value = page;
    scrollToTop()
    // Set items per page
    const itemsPerPage = 9;
    const start = (currentPage.value - 1) * itemsPerPage;
    const end = currentPage.value * itemsPerPage;

    // Filter and slice based on selected category and page number
    filteredBlog.value = tab.value === 'ALL'
      ? allBlog.value.slice(start, end)
      : allBlog.value
          .filter(blog => blog.category_id === tab.value)
          .slice(start, end);

    // Update displayed page numbers if needed
    updateDisplayedPageNumbers();
  }
};


onMounted(() => {
  fetchBlogs();
  fetchCategories();
});
</script>

<template>
  <div>
    <Navbar />
    <div class="pt-20 container ">
      <div class="flex items-center justify-between">
        <h4 class="text-[#007582] font-EBGaramond500 text-[62.883px] leading-[66.813px]">
          MySpurr Blog
        </h4>
        <div class="relative w-2/5">
          <SearchBarIcon class="absolute right-3 top-4" />
          <FormGroup
            labelClasses="font-Satoshi500 text-[15.606px]"
            name="Name"
            placeholder="Search.."
            type="text"
            inputClasses="w-full mt-2 font-light font-Satoshi400 bg-[#F4F4F4] !p-2 border-[#EDEDED] border-[0.509px] opacity-[0.8029] rounded-[6.828px] text-[12.68px]"
          ></FormGroup>
        </div>
      </div>
      <p class="text-[#244034] font-Satoshi400 text-[20.212px] mt-3 leading-[33.126px]">
        Read updates on MySpurr’s products, creative insights, events and partnerships to
        <br class="lg:block hidden" />
        get insight into Africa’s creative marketplace.
      </p>
      <Loader v-if="loading" />
      <div v-else>
        <div class="font-Satoshi400 !my-10 pb-10">
          <ul class="hidden !my-16 md:flex text-sm justify-between font-semibold flex-wrap gap-y-[40px]">
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
            <li v-for="category in categories" :key="category.id">
              <a
                href="javascript:void(0)"
                @click="filterTab(category.id)"
                :class="{ 'border-b-[#007582] border-b-[2.224px]': tab === category.id }"
                class="px-0 py-2 hover:border-b-[#007582]"
              >
                {{ category.name }}
              </a>
            </li>
          </ul>

          <template v-if="filteredBlog.length === 0">
            <div class="text-center w-full">
              <p>No data available</p>
            </div>
          </template>
          <template v-else>
            <div class="md:grid md:grid-cols-3 gap-10 !my-10 flex-wrap">
              <BlogCard
                v-for="blog in filteredBlog"
                :key="blog"
                :image="blog.featured_photo"
                :heading="blog.title"
                :text="blog.description"
                :date="blog.created_at"
                :blog_category="blog.category"
                :blog="blog"
              />
            </div>
          </template>
          
          <div class="mt-12 flex w-[60%] flex-row justify-center mx-auto">
            <button
              @click="goToPage(currentPage - 1)"
              :disabled="currentPage === 1"
              :class="{ 'opacity-50 !border-r-0 cursor-no': currentPage === 1 }"
              class="border-[#007582] border-l-2 border-r-2 border-y-2 px-4 py-2 rounded-l-[6.032px] font-Satoshi500 text-[1.41rem] items-center flex"
            >
              <Arrow class="rotate-[180deg]" />
            </button>
            <button
              v-for="pageNumber in displayedPageNumbers"
              :key="pageNumber"
              :class="[
                'border-[#007582] p-4 py-2 font-Satoshi500 text-[1.41rem] items-center flex border-y-2 border-r-2',
                pageNumber === currentPage ? 'bg-[#007582] text-white' : '',
              ]"
              @click="goToPage(pageNumber)"
            >
              {{ pageNumber }}
            </button>
            <button
              @click="goToPage(currentPage + 1)"
              :disabled="currentPage === totalPages"
              class="border-[#007582] border-r-2 border-y-2 p-4 py-2 rounded-r-[6.032px] font-Satoshi500 text-[1.41rem] items-center flex"
              :class="{ 'opacity-50 cursor-no': currentPage === totalPages }"
            >
              <Arrow />
            </button>
          </div>
          
          <WorkFlow />
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>
