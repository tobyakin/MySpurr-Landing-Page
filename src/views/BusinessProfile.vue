<template>
    <div>
      <Navbar />
      <!-- <Vue3Html2pdf
        v-if="!loading"
        :show-layout="false"
        :float-layout="false"
        :enable-download="true"
        :preview-modal="true"
        :paginate-elements-by-height="1920"
        filename="hee hee"
        :pdf-quality="2"
        :manual-pagination="true"
        pdf-format="a2"
        pdf-orientation="portrait"
        pdf-content-width="100%"
        ref="html2Pdf"
      > -->
      <!-- <template v-slot:pdf-content> -->
      <Loader v-if="loading" />
      <div v-else class="py-20 mx-auto w-[80%] msgBreak:w-[90%] msgTab:container">
        <div id="element-to-convert" class="w-full">
          <div
            class="bg-[#E9FAFB] border-[#F6F6F6] flex flex-col lg:items-start gap-5 justify-between items-center border-[1px] rounded-[15px] p-6 px-14"
          >
            <div
              class="flex lg:flex-row flex-col items-center lg:justify-normal justify-center gap-6"
            >
              <JobAvater
                :imageUrl="business?.company_logo"
                inputClasses="!h-[89.536px] !w-[89.536px]"
                class=""
              />
              <div class="lg:text-left text-center">
                <p
                  class="text-[#000000] text-[17.518px] capitalize font-Satoshi500 leading-[31.739px]"
                >
               {{business?.business_name}}
                </p>
                <div class="flex items-center gap-[0.94rem]">
                  <p
                    class="text-[#244034] text-[0.852rem] capitalize font-Satoshi500 leading-[1.52rem]"
                  >
                  {{business?.location}}
                  </p>
                  <a
                  :href="business?.website"
                  target="_blank"
                  class="underline text-[13.63px] cursor-pointer font-Satoshi500 text-[#244034]"
                  >
                  View Website
                  </a>
                </div>
              </div>
            </div>
            <div
              class="flex justify-between items-center eventBreak:flex-col eventBreak:gap-6 mt-4 w-full"
            >
              <div class="flex items-center justify-center lg:justify-start lg:items-center gap-10 msgTab:flex-col msgTab:gap-4 eventBreak:order-2">
                <div class="flex flex-col gap-3 msgTab:flex-row justify-between">
                  <p class="text-[#24403480] font-Satoshi400 text-[13.25px]">Size</p>
                  <!-- no size in response -->
                  <h4 class="text-[#244034] font-Satoshi500 text-[13.25px]">{{ size }}</h4>
                </div>
                <div class="flex flex-col gap-3 msgTab:flex-row">
                  <p class="text-[#24403480] font-Satoshi400 text-[13.25px]">Email</p>
                  <h4 class="text-[#244034] font-Satoshi500 text-[13.25px]">
                    {{ business?.email }}
                  </h4>
                </div>
                <div class="flex flex-col gap-3 msgTab:flex-row">
                  <p class="text-[#24403480] font-Satoshi400 text-[13.25px]">Phone</p>
                  <h4 class="text-[#244034] font-Satoshi500 text-[13.25px]">+{{ business?.country_code }}{{ business?.phone_number }}</h4>
                </div>
                <div class="flex flex-col gap-3 msgTab:flex-row">
                  <p class="text-[#24403480] font-Satoshi400 text-[13.25px]">Category</p>
                  <h4 class="text-[#244034] capitalize font-Satoshi500 text-[13.25px]"
                  >
                    {{business?.business_service}}
                  </h4>
                </div>
              </div>
              <div class="flex flex-col eventBreak:justify-center gap-4">
                
                <div class="flex justify-end gap-3 items-center eventBreak:justify-center">
                    <a
                      v-if="business?.social_media?.linkedin"
                      :href="business?.social_media?.linkedin"
                      target="_blank"
                    >
                      <LinkdeinIcon />
                    </a>
                    <a
                      v-if="business?.social_media?.instagram"
                      :href="business?.social_media?.instagram"
                      target="_blank"
                    >
                      <InstagramIcon />
                    </a>
                    <a
                      v-if="business?.social_media?.behance"
                      :href="business?.social_media?.behance"
                      target="_blank"
                    >
                      <BeIcon />
                    </a>
                    <a
                      v-if="business?.social_media?.twitter"
                      :href="business?.social_media?.twitter"
                      target="_blank"
                    >
                      <TwitterIcon />
                    </a>
                  
                </div>
                <div class="flex items-center gap-5">
                  <button @click="copyUrl()">
                    <SearchIconVeritical />
                  </button>
                  <button
                    class="btn-brand !bg-[#31795A] !border-none text-center flex items-start !py-2 !text-white"
                    @click="redirectToMessage"
                  >
                    <span style="display: grid; place-content: center" class="">Message</span>
                  </button>
                </div>
              </div>
            </div>         
          </div>
          <div class="flex flex-col lg:flex-row mt-10 w-full">
            <div class="lg:w-[70%] p-4">
              <div>

                <p class="text-[1.75rem] text-[#000] font-Satoshi500 leading-[3rem]">Overview</p>
                <div class="text-[#000000BF] font-Satoshi400 text-[1rem] mt-4 leading-[2.2rem]">
                  <p>
                    {{ business?.about_business }}  
                  </p>
                </div>
                <div
                    class=" items-center justify-between gap-[96px]"
                  >
                    <p class="text-[1.75rem] text-[#000] font-Satoshi500 leading-[3rem] !my-[3.88rem]">Intro</p>
                    <div
                    class="text-[#000000BF] bg-[#E1E1E1] h-[27.625rem] rounded-[9.56px] border-[0.96px] border-[#E1E1E1] font-Satoshi400 text-justify text-[16px] leading-[35px]"
                  >
                  </div> 
                </div>
              </div>
            
            </div>
            <div class="lg:w-[30%] w-full p-4">
              <p class="text-[20px] text-[#000] font-Satoshi500 ">Location</p>
              <div class="flex flex-col gap-12 mt-4 rounded-[15px]">
                <Maps :lat="business?.latitude" :lng="business?.longitude" />
              </div>
            </div>
          </div>
          <div>
            <p class="text-[1.75rem] text-[#000] font-Satoshi500 leading-[3rem] !mt-[6.44rem] !mb-[3.31rem]">Open Positions</p>
            <Loader v-if="loadMyjobs"/>
            <div class="w-full p-[1.57rem] eventBreak:p-0 flex flex-col gap-[2.31rem]" v-else>
              <JobRowCard
                class="min-w-[95%] lg:min-w-[45%]"
                v-for="item in paginatedJobs"
                :key="item"
                :job="item"
              />
              <div class="mt-12 flex w-[60%] flex-row justify-center mx-auto">
                <button
                  @click="setPage(currentPage - 1)"
                  class="border-[#007582] border-l-2 border-r-2 border-y-2 p-4 py-2 rounded-l-[6.032px] font-Satoshi500 text-[22.621px] items-center flex"
                >
                  <Arrow class="rotate-[180deg]"/>
                </button>
                <button
                  v-for="pageNumber in displayedPageNumbers"
                  :key="pageNumber"
                  :class="[
                    'border-[#007582] p-4 py-2 font-Satoshi500 text-[22.621px] items-center flex border-y-2 border-r-2',
                    pageNumber === currentPage ? 'bg-[#007582] text-white' : '',
                  ]"
                  @click="setPage(pageNumber)"
                >
                  {{ pageNumber }}
                </button>
                <button
                  @click="setPage(currentPage + 1)"
                  class="border-[#007582] border-r-2 border-y-2 p-4 py-2 rounded-r-[6.032px] font-Satoshi500 text-[22.621px] items-center flex"
                >
                  <Arrow />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- </template>
      </Vue3Html2pdf> -->
      <Footer />
    </div>
  </template>

<script setup>
import {
  ref,
  onMounted,
  computed,
  reactive,
  onUnmounted,
  defineAsyncComponent,
  watch,
} from "vue";
import { useHead } from "@vueuse/head";
import { storeToRefs } from "pinia";
import JobAvater from "@/components/Avater/JobAvater.vue";
import JobRowCard from "@/components/Jobs/JobRowCard.vue";
import Navbar from "@/components/Navbar/Navbar.vue";
import Footer from "@/components/Footer.vue";
import SearchIconVeritical from "@/components/icons/searchIconVeritical.vue";
import LinkdeinIcon from "@/components/icons/linkdeinIcon.vue";
import InstagramIcon from "@/components/icons/instagramIcon.vue";
import BeIcon from "@/components/icons/beIcon.vue";
import TwitterIcon from "@/components/icons/twitterIcon.vue";
import Arrow from "@/components/icons/paginationArrow.vue";
import { useRouter, useRoute } from "vue-router";
import { useClipboard } from "@vueuse/core";
import { useToast } from "vue-toastification";
const Maps = defineAsyncComponent(() => import("@/components/Map/Map.vue"));
import Loader from "@/components/UI/Loader/Loader.vue";
import { useBusinessStore } from "@/stores/business";

const businessStore = useBusinessStore();
const { singleBusiness, businessOpenJobs } = storeToRefs(businessStore);

const business = computed(()=> singleBusiness.value?.data || []);
const size = computed(()=> {
  return singleBusiness.value?.data?.size.length > 0 ? singleBusiness.value?.data?.size : '-';
})

const route = useRoute();
const router = useRouter();
const toast = useToast();
const loading = ref(false);
let loadMyjobs = ref(false);
const url = import.meta.env.VITE_DASHBOARD;
const redirectToMessage = () => {
  window.open(url + `messages`, "_blank");
};

// Pagination Function

const currentPage = ref(1);

const jobsData = computed(() => businessOpenJobs.value?.data || []);

const pagination = computed(() => businessOpenJobs.value?.pagination || {});

const paginatedJobs = computed(() => {
  const perPage = pagination.value.per_page;
  const startIndex = (currentPage.value - 1) * perPage;
  const endIndex = startIndex + perPage;
  return jobsData.value.slice(startIndex, endIndex);
});

const totalPages = computed(() => Math.ceil(pagination.value.last_page));

const setPage = (page) => {
  if (page >= 1 && page <= (pagination.value.last_page || 1)) {
    currentPage.value = page;
  }
};

const displayedPageNumbers = computed(() => {
  const maxDisplayedPages = 5;
  const startPage = Math.max(currentPage.value - Math.floor(maxDisplayedPages / 2), 1);
  const endPage = Math.min(startPage + maxDisplayedPages - 1, totalPages.value);
  const pageNumbers = [];

  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i);
  }

  return pageNumbers;
});

watch(currentPage, async (newPage) => {
  console.log("Current Page:", newPage);
  await talentsStore.allTalents(newPage);
});

const printPage = () => {
  window.print();
};

let source = window.location.href;
const { copy, copied, isSupported } = useClipboard({ source });

const copyUrl = () => {
  if (isSupported) {
    if (copied) {
      copy(source);
      toast.success("Link Copied", {
        timeout: 4000,
      });
    }
  } else {
    toast.error("Your browser does not support Clipboard API", {
      timeout: 4000,
    });
  }
};

const getOpenJobs = async ()=>{
  try {
    await businessStore.handleBusinessOpenJobs(singleBusiness.value?.data.id)
    loadMyjobs.value = false;
  } catch (error) {
    console.log(error)
    loadMyjobs.value = false;
  }
}

onMounted(async () => {
  loading.value = true;
  try {
    await businessStore.handleSingleBusiness(route.params.id);
    getOpenJobs()
    loading.value = false;
  } catch (error) {
    console.log(error)
    loading.value = false;
  }
});
onUnmounted(() => {
  singleBusiness.value = null;
});

</script>

<style scoped>


</style>