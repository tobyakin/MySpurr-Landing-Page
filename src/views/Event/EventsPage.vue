<script setup>
import Navbar from '@/components/Navbar/Navbar.vue'
import Footer from '@/components/Footer.vue'
import { ref, onMounted, onUnmounted, computed } from 'vue';
import { useEventStore } from '../../stores/event';
import Loader from "@/components/UI/Loader/Loader.vue";
import EventCard from '@/components/Events/EventCard.vue';
import Arrow from '@/components/icons/paginationArrow.vue';

const image = 'https://ik.imagekit.io/ldtt3hq8g2/Landing%20Page/EventBg.png?updatedAt=1725975295297';

const navBar = ref(null)
const navHeight = ref()

const getNavHeight = () => {
  if (navBar.value) {
    navHeight.value = navBar.value.offsetHeight;
    return navHeight.value
  }
};

const bgHeight = computed(() => {
  return `calc(100vh - ${navHeight.value}px)`;
})

const eventStore = useEventStore();
const events = ref([]);
const loading = ref(false)
const currentPage = ref(1);
const totalPages = ref(1);
const perPage = ref(9); // Set items per page to 9
const displayedPageNumbers = ref([]);

const fetchEvents = async (page = 1) => {
    loading.value = true

    try {
        const res = await eventStore.allEvents();
        console.log(res.pagination)
        if (res && res.data) {
            events.value = res.data.slice((page - 1) * perPage.value, page * perPage.value);

            currentPage.value = res.pagination.current_page;
            totalPages.value = Math.ceil((category === 'ALL' ? allBlog.value.length : filteredBlog.value.length) / perPage.value);

            updateDisplayedPageNumbers();
        } else {
            console.error('No data returned from API')
        }
        
    } catch (error) {
        console.error('Error fetching event details:', error)
    } finally {
        loading.value = false
    }
}

const updateDisplayedPageNumbers = () => {
  const startPage = Math.max(1, currentPage.value - 2);
  const endPage = Math.min(totalPages.value, startPage + 4);
  
  displayedPageNumbers.value = Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i);
};

const goToPage = (page) => {
  if (page >= 1 && page <= totalPages.value) {
    currentPage.value = page;

    // Set items per page
    const itemsPerPage = 9;
    const start = (currentPage.value - 1) * itemsPerPage;
    const end = currentPage.value * itemsPerPage;

    // Filter and slice based on selected category and page number
    events.value = events.value.slice(start, end)

    // Update displayed page numbers if needed
    updateDisplayedPageNumbers();
  }
};

onMounted(() => {
    fetchEvents()
    getNavHeight();
    window.addEventListener('resize', getNavHeight);
});

onUnmounted(() => {
  window.removeEventListener('resize', getNavHeight);
});

</script>

<template>
    <section>
        <div ref="navBar">
            <Navbar />
        </div>

        <main>
            <header class="mb-[2rem] tab:mb-[5rem]">
                <div class="min-h-[630px] flex items-center background py-20" :style="{  backgroundImage: `url(${image})`}">
                    <div class="container">
                        <div class="lg:py-12 py-4">
                            <h1 class="md:text-[79.379px] text-[40px] font-normal !mb-6 text-white md:leading-[85.441px] leading-[45px] font-EBGaramond500">Enjoy exclusive access to  <br class="md:block hidden" /> industry experts</h1>
                            <p class="text-[22px] text-white font-Satoshi400 !my-8 md:!my-6">Discover new trends, learn cutting-edge techniques, and  <br class="md:block hidden" /> connect with a vibrant community of creative professionals.</p>
                        </div>
                    </div>
                </div>
            </header>
            <body class="w-[70%] mx-auto tab:w-[80%] tab2:w-[90%]">
                <div class="">
                    <h3 class="text-[#011B1F] font-EBGaramond500 text-[50px] leading-[4.15788rem] text-center !mb-[6.25rem] tab:text-[3rem] tab:leading-[4rem] tab:!mb-[5rem] mob:text-[2rem] mob:leading-[2.5rem]">Explore MySpurr events and  ignite <br>your creative potential</h3>

                    <Loader v-if="loading" />
                    <div v-else>
                        <div v-if="events && events.length === 0">
                            <div class="flex justify-center items-center">
                                <p class="pt-3">No data available.</p>
                            </div>
                        </div>
                        <div class="grid grid-cols-4 gap-5 mob:grid-cols-1">
                            <EventCard 
                                v-for="event in events"
                                :key="event?.id"
                                :event="event"
                            />
                        </div>

                        <div class="mt-12 flex w-[60%] flex-row justify-center mx-auto" v-if="displayedPageNumbers?.length > 0">
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
                    </div>
                </div>
                <hr class="bborder border-[#EBEBEB] mt-[9.75rem] !mb-[3.56rem] tab:mt-[5rem]">
                <div class="w-full flex justify-between items-center mob:flex-col mob:text-center mob:gap-7">
                    <div class="flex flex-col justify-center">
                        <h3 class="text-[#101621] font-EBGaramond500 text-[3.375rem] leading-[3.875rem] tab:text-[1.5rem] tab:leading-[1.6rem]">Transform your work flow</h3>
                        <p class="text-[#00000099] font-Satoshi400 text-[1.25rem] leading-8 tab:text-[0.85rem]">we believe that your work should know no bounds.</p>
                    </div>
                    <div class="flex items-center gap-[3.42rem] tab:gap-[2rem] tab2:flex-col tab2:gap-4">
                        <p class="text-[1rem] font-Satoshi500 text-[#007582] leading-5 tab:text-[0.8rem]">Looking for Creative talent?</p>
                        <button class="text-[#272626] font-Satoshi500 text-[1rem] leading-[1.44rem] px-[1rem] tab:px-[0.8rem] py-[0.94rem] tab:py-[0.7rem] bg-[#43D0DF] rounded-[3.312rem] tab2:w-full tab:text-[0.8rem]">Start free trial</button>
                    </div>
                </div>
                <hr class="border border-[#EBEBEB] mt-[3.56rem] !mb-[9.75rem]">
            </body>
        </main>
        <Footer />
    </section>
</template>

<style scoped>
    .background {
    background-size: cover;
    background-blend-mode: overlay;
    background: linear-gradient(
        from 270deg at 50% 50%,
        rgba(15, 14, 14, 0.28) 184.15632963180542deg,
        rgba(13, 11, 11, 0.33) 270.5531358718872deg,
        rgba(18, 16, 16, 0.32) 353.79907608032227deg
        ),
        lightgray 50%;
    }

</style>