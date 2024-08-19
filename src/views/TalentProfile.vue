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
import Navbar from "@/components/Navbar/Navbar.vue";
import Footer from "@/components/Footer.vue";
import SearchIconVeritical from "@/components/icons/searchIconVeritical.vue";
import LinkdeinIcon from "@/components/icons/linkdeinIcon.vue";
import InstagramIcon from "@/components/icons/instagramIcon.vue";
import BeIcon from "@/components/icons/beIcon.vue";
import TwitterIcon from "@/components/icons/twitterIcon.vue";
import mailoutline from "@/components/icons/mailoutline.vue";
import WorkExperience from "@/components/genericComponents/WorkExperience.vue";
import EducationDetails from "@/components/genericComponents/EducationDetails.vue";
import RateStar from "@/components/icons/rateStar.vue";
import CertificateBadge from "@/components/icons/certificateBadge.vue";
import CalenderWithPen from "@/components/icons/calenderWithPen.vue";
import { useRouter, useRoute } from "vue-router";
import { useTalentsStore } from "@/stores/talents";
import { useClipboard } from "@vueuse/core";
import { useToast } from "vue-toastification";
import html2pdf from "html2pdf.js";



const Maps = defineAsyncComponent(() => import("@/components/Map/Map.vue"));
import Loader from "@/components/UI/Loader/Loader.vue";
const toast = useToast();
const loading = ref(false);
const url = import.meta.env.VITE_DASHBOARD;
const redirectToMessage = () => {
  window.open(url + `messages`, "_blank");
};


const talentsStore = useTalentsStore();
const { singleTalent } = storeToRefs(talentsStore);
const route = useRoute();
const router = useRouter();
const redirectToSinglePortFolio = (id, title) => {
  router.push({
    name: "single-portfolio",
    params: { id: id, title: title },
  });
};

const talents = computed(() => singleTalent.value?.data || []);

onMounted(async () => {
  loading.value = true;
  try {
    await talentsStore.getSingleTalent(route.params.id);
    loading.value = false;
  } catch (error) {
    loading.value = false;
  }
});
onUnmounted(() => {
  singleTalent.value = null;
});
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

const siteData = reactive({
  title: `MySpurr |  ${singleTalent.value?.data?.first_name || ""}`,
  description: ``,
});

useHead({
  title: siteData.title,
  meta: [
    {
      name: `description`,
      content: computed(() => siteData.description),
    },
    {
      property: "keywords",
      content: "Courses, learn",
    },
  ],
});
const getTalentsProfileData = async () => {
  let response = await talentsStore.getSingleTalent(route.params.id);
  return response;
};
const fetchData = async () => {
  await Promise.all([getTalentsProfileData()]);
};
fetchData();

const downloadCV = () => {

  const element = document.getElementById("element-to-convert");

  const opt = {
    margin: 1,
    filename: (talents.value?.first_name || "CV") + ".pdf",
    image: { type: "jpeg", quality: 0.98 },
    enableLinks: true,
    html2canvas: { scale: 3, useCORS: true },
    jsPDF: { unit: "in", format: "a3", orientation: "portrait" },
    putOnlyUsedFonts: true,
  };

  html2pdf()
    .from(element)
    .set(opt)
    .save()
    .then(() => {
    });
};
</script>

<template>
  <div>
    <Navbar />
    <Loader v-if="loading" />
    <div v-else class="py-20 container">
      <div id="element-to-convert" class="w-full">
        <div
          class="bg-[#E9FAFB] border-[#F6F6F6] flex lg:flex-row flex-col gap-5 justify-between items-center border-[1px] rounded-[15px] p-6 px-14"
        >
          <div
            class="flex lg:flex-row flex-col items-center lg:justify-normal justify-center gap-6"
          >
            <div>
              <JobAvater
                :imageUrl="talents?.image"
                inputClasses="!h-[89.536px] !w-[89.536px]"
                class=""
              />
            </div>
            <div class="lg:text-left text-center">
              <p
                class="text-[#000000] text-[17.518px] capitalize font-Satoshi500 leading-[31.739px]"
              >
                {{ talents?.first_name }} {{ talents?.last_name }}
              </p>
              <p
                class="text-[#00000066] text-[14.598px] flex gap-[8px] items-center capitalize leading-[31.739px] font-Satoshi400"
              >
                {{ talents?.skill_title }}
                <span
                  v-if="talents?.experience_level"
                  class="bg-[#00474F] rounded-full py-[0.5px] capitalize text-[10.519px] text-[#E6F1F3] font-medium px-[19px]"
                  >{{ talents?.experience_level }}</span
                >
              </p>
              <div class="flex items-center lg:justify-start justify-center gap-2">
                <p class="lg:text-[13.625px] text-[14px] text-[#244034] font-Satoshi500">
                  ${{ talents?.rate }}/hr
                </p>
                <div class="h-[6px] bg-[#010101e2] w-[6px] rounded-full"></div>
                <p class="text-[#244034] lg:text-[13.625px] text-[14px] font-Satoshi500">
                  {{ talents?.location }}
                </p>
              </div>
            </div>
          </div>

          <div class="flex flex-col items-center lg:justify-normal justify-center gap-6">
            <div class="flex items-center gap-3">
              <a
                v-if="talents?.email"
                :href="`mailto:${talents?.email}`"
                class="flex items-center mt-1"
                target="_blank"
              >
                <mailoutline />
              </a>
              <a v-if="talents?.linkedin" :href="talents?.linkedin" target="_blank">
                <LinkdeinIcon />
              </a>
              <a v-if="talents?.instagram" :href="talents?.instagram" target="_blank">
                <InstagramIcon />
              </a>
              <a v-if="talents?.behance" :href="talents?.behance" target="_blank">
                <BeIcon />
              </a>
              <a v-if="talents?.twitter" :href="talents?.twitter" target="_blank">
                <TwitterIcon />
              </a>
            </div>
            <div class="flex items-center gap-5" id="element-to-hide" data-html2canvas-ignore="true">
              <button @click="copyUrl()">
                <SearchIconVeritical />
              </button>
              <button
                @click="redirectToMessage"
                class="btn-brand !bg-[#31795A] !border-none text-center flex items-start !py-2 !text-white btn-hover-2"
              >
                <span style="display: grid; place-content: center" class="">Message</span>
              </button>
            </div>
          </div>
        </div>

        <div class="flex flex-col lg:flex-row mt-10 w-full">
          <div class="lg:w-[70%] p-4">
            <p class="text-[28px] text-[#000] font-Satoshi500">Overview</p>
            <div class="text-[#000000BF] font-Satoshi400 text-[16px] mt-4 leading-[35px]">
              <p>
                {{ talents?.overview }}
              </p>
            </div>
            <p class="text-[28px] text-[#000] font-Satoshi500 !mb-4 mt-6">Skills</p>
            <div class="flex gap-4 flex-wrap">
              <div
                v-for="item in talents?.top_skills"
                :key="item.name"
                class="bg-[#EFF6F3] rounded-full p-5 py-3 text-[17px] text-center font-Satoshi400 text-[#276A4D]"
              >
                {{ item.name }}
              </div>
              <div
                class="bg-[#D2F34C] hidden rounded-full p-4 py-3 text-[17px] font-Satoshi400 text-[#000000]"
              ></div>
            </div>
            <p class="text-[28px] text-[#000] font-Satoshi500 !mb-12 mt-8">Education</p>
            <EducationDetails :items="talents?.education" />

            <!-- <div class="html2pdf__page-break"/> -->

            <p class="text-[28px] text-[#000] font-Satoshi500 !mb-12 mt-8">
              Work Experience
            </p>
            <WorkExperience :items="talents?.employment" />

            <p class="text-[28px] text-[#000] font-Satoshi500 !mb-12 mt-8">Portfolio</p>
            <div
              v-if="talents?.portfolio?.length === 0"
              class="flex flex-col w-full justify-center items-center"
            >
              <p class="text-[15px] text-[#000] font-Satoshi400 text-center !mb-12 mt-8">
                Uploaded portfolio can be viewed here
              </p>
            </div>

            <div
              v-else
              class="flex flex-row gap-4 w-full overflow-hidden cursor-move mt-6 hide-scrollbar overflow-x-auto"
            >
              <img
                loading="lazy"
                @click="redirectToSinglePortFolio(img.id, img.title)"
                v-for="img in talents?.portfolio"
                :key="img?.id"
                :src="img?.featured_image"
                class="h-[268px] flex flex-col object-cover items-center w-[277.61px] rounded-[7px] bg-[#EDF0B8]/[20%]"
                :alt="img?.title"
              />
            </div>
            <p class="text-[28px] text-[#000] hidden font-Satoshi500 !mb-12 mt-8">
              Reviews
            </p>
            <div class="flex-col gap-4 hidden">
              <div
                v-for="i in 3"
                :key="i"
                class="border-[#2440341A] border-[1.265px] rounded-[9.732px] p-6"
              >
                <p
                  class="text-[#001E00] font-Satoshi400 text-[16px] !mb-4 tracking-[0.6px]"
                >
                  Find B2B Partners for UK and US Online Tutoring Company
                </p>
                <div class="flex items-center gap-1 font-Satoshi400 !mb-2">
                  <RateStar v-for="i in 5" :key="i" />
                  <span class="text-[#001E00] text-[14px]">5.00 </span
                  ><span class="text-[#5E6D55] text-[12px]"
                    >Dec 15, 2022 - Feb 2, 2023</span
                  >
                </div>
                <p
                  class="text-[#001E00] font-Satoshi400 italic text-[13px] !mb-4 tracking-[0.6px]"
                >
                  "Great lead generation for education companies"
                </p>
                <p class="text-[#5E6D55] font-Satoshi400 text-[14px]">Private earnings</p>
              </div>
            </div>
          </div>
          <div class="lg:w-[30%] w-full p-4">
            <p class="text-[28px] text-[#000] font-Satoshi500">Certificates</p>
            <div
              class="bg-[#E9FAFB] p-8 border-[#F6F6F6] border-[1px] flex flex-col gap-12 mt-4 rounded-[15px]"
            >
              <div
                v-for="i in talents?.certificate"
                :key="i"
                class="flex items-center gap-5"
              >
                <CertificateBadge />
                <div class="flex flex-col gap-0 h-auto">
                  <a
                    target="_blank"
                    :href="i.certificate_link"
                    class="text-[15px] text-[#000] font-Satoshi500 hover:text-brand overflow-hidden"
                  >
                    {{ i.title }}
                  </a>
                  <p class="text-[14px] leading-[20px] text-[#31795A] font-Satoshi500">
                    {{ i.institute }}
                  </p>
                  <div class="flex items-center gap-2">
                    <CalenderWithPen />
                    <p class="font-Satoshi500 text-[12.9px] text-[#000000]">
                      {{ i.certificate_year }}
                    </p>
                  </div>
                </div>
              </div>
              <div class="" id="element-to-hide" data-html2canvas-ignore="true">
                <button
                  @click="downloadCV"
                  class="btn-brand !border-none !w-full !py-2 !text-[#FFFFFF] text-center !bg-[#31795A] btn-hover-2"
                >
                  <span class="!mb-2">Download CV</span>
                </button>
              </div>
            </div>
            <p class="text-[20px] text-[#000] font-Satoshi500 mt-16">Location</p>
            <div class="flex flex-col gap-12 mt-4 rounded-[15px]">
              <Maps :lat="talents?.latitude" :lng="talents?.longitude" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<style>
/* Hide the excluded section when printing */
@media print {
  .exclude-from-print {
    display: none;
  }
}
</style>
