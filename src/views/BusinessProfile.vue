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
                imageUrl=""
                inputClasses="!h-[89.536px] !w-[89.536px]"
                class=""
              />
              <div class="lg:text-left text-center">
                <p
                  class="text-[#000000] text-[17.518px] capitalize font-Satoshi500 leading-[31.739px]"
                >
                Vibratique Hub
                </p>
                <div class="flex items-center gap-[0.94rem]">
                  <p
                    class="text-[#244034] text-[0.852rem] capitalize font-Satoshi500 leading-[1.52rem]"
                  >
                  California, US
                  </p>
                  <a
                  href=""
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
                  <h4 class="text-[#244034] font-Satoshi500 text-[13.25px]">500-600</h4>
                </div>
                <div class="flex flex-col gap-3 msgTab:flex-row">
                  <p class="text-[#24403480] font-Satoshi400 text-[13.25px]">Email</p>
                  <h4 class="text-[#244034] font-Satoshi500 text-[13.25px]">
                    hello@vibratiquehub.com
                  </h4>
                </div>
                <div class="flex flex-col gap-3 msgTab:flex-row">
                  <p class="text-[#24403480] font-Satoshi400 text-[13.25px]">Phone</p>
                  <h4 class="text-[#244034] font-Satoshi500 text-[13.25px]">+234 8166 813 812</h4>
                </div>
                <div class="flex flex-col gap-3 msgTab:flex-row">
                  <p class="text-[#24403480] font-Satoshi400 text-[13.25px]">Category</p>
                  <h4 class="text-[#244034] capitalize font-Satoshi500 text-[13.25px]">
                    Technology, Product
                  </h4>
                </div>
              </div>
              <div class="flex flex-col eventBreak:justify-center gap-4">

                <div class="flex justify-end gap-3 items-center eventBreak:justify-center">
                    <a
                      :href="userDetails?.linkedin"
                      target="_blank"
                    >
                      <LinkdeinIcon />
                    </a>
                    <a
                      :href="userDetails?.instagram"
                      target="_blank"
                    >
                      <InstagramIcon />
                    </a>
                    <a
                      :href="userDetails?.behance"
                      target="_blank"
                    >
                      <BeIcon />
                    </a>
                    <a
                      :href="userDetails?.twitter"
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
                    Hello my name is Nicole Wells and web developer from Portland. In pharetra orci dignissim, blandit mi semper, ultricies diam. Suspendisse malesuada suscipit nunc non volutpat. Sed porta nulla id orci laoreet tempor <br>
                    non consequat enim. Sed vitae aliquam velit. Aliquam ante erat, blandit at pretium et, accumsan ac est. Integer vehicula rhoncus molestie. Morbi ornare ipsum sed sem condimentum, et pulvinar tortor luctus. Suspendisse condimentum lorem ut elementum aliquam. <br><br>
  
                    Mauris nec erat ut libero vulputate pulvinar. Aliquam ante erat, blandit at pretium et, accumsan ac est. Integer vehicula rhoncus molestie. Morbi ornare ipsum sed sem condimentum, et pulvinar tortor luctus. Suspendisse condimentum lorem ut elementum aliquam. Mauris nec erat ut libero vulputate pulvinar.
  
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
                <Map :lat="talents?.latitude" :lng="talents?.longitude" />
              </div>
            </div>
          </div>
          <div>
            <p class="text-[1.75rem] text-[#000] font-Satoshi500 leading-[3rem] !mt-[6.44rem] !mb-[3.31rem]">Open Positions</p>
            <div class="w-full p-[1.57rem] eventBreak:p-0 flex flex-col gap-[2.31rem]">
              <JobRowCard
            class="min-w-[95%] lg:min-w-[45%]"
            v-for="item in Job?.data"
            :key="item"
            :job="item"
          />
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
import mailIcon from "@/components/icons/mailIcon.vue";
import mailoutline from "@/components/icons/mailoutline.vue";
import CalenderWithPen from "@/components/icons/calenderWithPen.vue";
import { useRouter, useRoute } from "vue-router";
import { useClipboard } from "@vueuse/core";
import { useToast } from "vue-toastification";
const Map = defineAsyncComponent(() => import("@/components/Map/Map.vue"));
import Loader from "@/components/UI/Loader/Loader.vue";
import { useJobsStore } from "@/stores/jobs";
const jobsStore = useJobsStore();
const { Job } = storeToRefs(jobsStore);

const toast = useToast();
const loading = ref(false);
const url = import.meta.env.VITE_DASHBOARD;
const redirectToMessage = () => {
  window.open(url + `messages`, "_blank");
};

const printPage = () => {
  window.print();
};
const route = useRoute();
const router = useRouter();

let source = window.location.href;
const { copy, copied, isSupported } = useClipboard({ source });

const copyUrl = () => {
  if (isSupported) {
    if (copied) {
      console.log(source);
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

onMounted(async () => {
  loading.value = true;
  try {
    await jobsStore.allJobs();
    loading.value = false;
  } catch (error) {
    console.error(error);
    loading.value = false;
  }
});

</script>

<style scoped>


</style>