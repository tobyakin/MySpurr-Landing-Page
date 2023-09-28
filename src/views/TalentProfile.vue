<template>
  <div>
    <Navbar />
    <div class="py-20 container">
      <div
        class="bg-[#E9FAFB] border-[#F6F6F6] flex lg:flex-row flex-col gap-5 justify-between items-center border-[1px] rounded-[15px] p-6 px-14"
      >
        <div
          class="flex lg:flex-row flex-col items-center lg:justify-normal justify-center gap-6"
        >
          <JobAvater inputClasses="!h-[89.536px] !w-[89.536px]" class="" />
          <div class="lg:text-left text-center">
            <p class="text-[#000000] text-[17.518px] font-Satoshi500 leading-[31.739px]">
              {{ talents?.first_name }}
            </p>
            <p
              class="text-[#00000066] text-[14.598px] leading-[31.739px] font-Satoshi400"
            >
              Graphic Designer
            </p>
            <div class="flex items-center gap-2">
              <p class="lg:text-[13.625px] text-[14px] text-[#244034] font-Satoshi500">
                $30k -$50k/yr
              </p>
              <div class="h-[6px] bg-[#010101e2] w-[6px] rounded-full"></div>
              <p class="text-[#244034] lg:text-[13.625px] text-[14px] font-Satoshi500">
                California, US
              </p>
            </div>
          </div>
        </div>
        <div class="flex flex-col items-center lg:justify-normal justify-center gap-6">
          <div class="flex items-center gap-3">
            <button>
              <LinkdeinIcon />
            </button>
            <button>
              <InstagramIcon />
            </button>
            <button>
              <BeIcon />
            </button>
            <button>
              <TwitterIcon />
            </button>
          </div>
          <div class="flex items-center gap-5">
            <button>
              <SearchIconVeritical />
            </button>
            <button class="btn-brand !bg-[#31795A] !border-none !py-2 !text-white">
              Message
            </button>
          </div>
        </div>
      </div>
      <div class="flex flex-col lg:flex-row mt-10 w-full">
        <div class="lg:w-[70%] p-4">
          <p class="text-[28px] text-[#000] font-Satoshi500">Overview</p>
          <div class="text-[#000000BF] font-Satoshi400 text-[16px] mt-4 leading-[35px]">
            <p>
              Hello my name is Nicole Wells and web developer from Portland. In pharetra
              orci dignissim, blandit mi semper, ultricies diam. Suspendisse malesuada
              suscipit nunc non volutpat. Sed porta nulla id orci laoreet tempor non
              consequat enim. Sed vitae aliquam velit. Aliquam ante erat, blandit at
              pretium et, accumsan ac est. Integer vehicula rhoncus molestie. Morbi ornare
              ipsum sed sem condimentum, et pulvinar tortor luctus. Suspendisse
              condimentum lorem ut elementum aliquam.
            </p>
            <p class="mt-4">
              Mauris nec erat ut libero vulputate pulvinar. Aliquam ante erat, blandit at
              pretium et, accumsan ac est. Integer vehicula rhoncus molestie. Morbi ornare
              ipsum sed sem condimentum, et pulvinar tortor luctus. Suspendisse
              condimentum lorem ut elementum aliquam. Mauris nec erat ut libero vulputate
              pulvinar.
            </p>
          </div>
          <p class="text-[28px] text-[#000] font-Satoshi500 mb-4 mt-6">Skills</p>
          <div class="flex gap-4 flex-wrap">
            <div
              v-for="item in 10"
              :key="item"
              class="bg-[#EFF6F3] rounded-full p-5 py-3 text-[17px] font-Satoshi400 text-[#276A4D]"
            >
              Figma
            </div>
            <div
              class="bg-[#D2F34C] rounded-full p-4 py-3 text-[17px] font-Satoshi400 text-[#000000]"
            >
              3+
            </div>
          </div>
          <p class="text-[28px] text-[#000] font-Satoshi500 mb-12 mt-8">Education</p>
          <SampleFive :items="items" />
          <p class="text-[28px] text-[#000] font-Satoshi500 mb-12 mt-8">
            Work Experience
          </p>
          <SampleFive :items="workItems" />
          <p class="text-[28px] text-[#000] font-Satoshi500 mb-12 mt-8">Portfolio</p>
          <div
            class="flex flex-row gap-4 w-full overflow-hidden cursor-move mt-6 hide-scrollbar overflow-x-auto"
          >
            <img
              v-for="img in Porfolio"
              :key="img"
              :src="img.img"
              class="h-[214.078px] flex flex-col w-auto rounded-lg"
              alt=""
            />
          </div>
          <p class="text-[28px] text-[#000] font-Satoshi500 mb-12 mt-8">Reviews</p>
          <div class="flex flex-col gap-4">
            <div
              v-for="i in 3"
              :key="i"
              class="border-[#2440341A] border-[1.265px] rounded-[9.732px] p-6"
            >
              <p class="text-[#001E00] font-Satoshi400 text-[16px] mb-4 tracking-[0.6px]">
                Find B2B Partners for UK and US Online Tutoring Company
              </p>
              <div class="flex items-center gap-1 font-Satoshi400 mb-2">
                <RateStar v-for="i in 5" :key="i" />
                <span class="text-[#001E00] text-[14px]">5.00 </span
                ><span class="text-[#5E6D55] text-[12px]"
                  >Dec 15, 2022 - Feb 2, 2023</span
                >
              </div>
              <p
                class="text-[#001E00] font-Satoshi400 italic text-[13px] mb-4 tracking-[0.6px]"
              >
                "Great lead generation for education companies"
              </p>
              <p class="text-[#5E6D55] font-Satoshi400 text-[14px]">Private earnings</p>
            </div>
          </div>
        </div>
        <div class="lg:w-[30%] p-4">
          <p class="text-[28px] text-[#000] font-Satoshi500">Certificates</p>
          <div
            class="bg-[#E9FAFB] p-8 border-[#F6F6F6] border-[1px] flex flex-col gap-12 mt-4 rounded-[15px]"
          >
            <div v-for="i in 5" :key="i" class="flex items-center gap-5">
              <CertificateBadge />
              <div>
                <p class="text-[15px] text-[#000] font-Satoshi500">Graphics Design</p>
                <p class="text-[14px] leading-[20px] text-[#31795A] font-Satoshi500">
                  Cousera
                </p>
                <div class="flex items-center gap-2">
                  <CalenderWithPen />
                  <p class="font-Satoshi500 text-[12.9px] text-[#000000]">2015</p>
                </div>
              </div>
            </div>
            <div class="">
              <button
                class="btn-brand !border-none !w-full !py-2 !text-[#FFFFFF] !bg-[#31795A]"
              >
                Download CV
              </button>
            </div>
          </div>
          <p class="text-[20px] text-[#000] font-Satoshi500 mt-16">Location</p>
          <div class="flex flex-col gap-12 mt-4 rounded-[15px]">
            <img src="@/assets/img/Map.webp" alt="" />
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
import { storeToRefs } from "pinia";
import JobAvater from "@/components/Avater/JobAvater.vue";
import Navbar from "@/components/Navbar/Navbar.vue";
import Footer from "@/components/Footer.vue";
import SearchIconVeritical from "@/components/icons/searchIconVeritical.vue";
import LinkdeinIcon from "@/components/icons/linkdeinIcon.vue";
import InstagramIcon from "@/components/icons/instagramIcon.vue";
import BeIcon from "@/components/icons/beIcon.vue";
import TwitterIcon from "@/components/icons/twitterIcon.vue";
import SampleFive from "@/components/genericComponents/sampleFive.vue";
import SampleOne from "@/assets/img/sampleOne.webp";
import SampleTwo from "@/assets/img/sampleTwo.webp";
import SampleThree from "@/assets/img/sampleThree.webp";
import SampleFour from "@/assets/img/sampleFour.webp";
import RateStar from "@/components/icons/rateStar.vue";
import CertificateBadge from "@/components/icons/certificateBadge.vue";
import CalenderWithPen from "@/components/icons/calenderWithPen.vue";
import { useRouter, useRoute } from "vue-router";
import { useTalentsStore } from "@/stores/talents";
const talentsStore = useTalentsStore();
const { singleTalent } = storeToRefs(talentsStore);
const route = useRoute();
const router = useRouter();

const talents = computed(() => singleTalent.value?.data || []);

onMounted(async () => {
  await talentsStore.getSingleTalent(route.params.slug);
  console.log("single talents", talents.value);
  console.log("is array", Array.isArray(talents.value));
});

const Porfolio = [
  { img: SampleOne },
  { img: SampleTwo },
  { img: SampleThree },
  { img: SampleFour },
];

const items = ref([
  {
    heading: "University of Boston",
    name: "Bachelor Degree of Design",
    content:
      "Mauris nec erat ut libero vulputate pulvinar. Aliquam ante erat, blandit at pretium et, accumsan ac est.",
  },
  {
    heading: "Design Collage",
    name: "UI/UX Design Course",
    content:
      "Morbi ornare ipsum sed sem condimentum, et pulvinar tortor luctus. Suspendisse condimentum lorem ut elementum aliquam et pulvinar tortor luctus.",
  },
]);
const workItems = ref([
  {
    heading: "02/03/18 - 13/05/20",
    name: "Product Designer (Google)",
    content:
      "Morbi ornare ipsum sed sem condimentum, et pulvinar tortor luctus. Suspendisse condimentum lorem ut elementum aliquam et pulvinar tortor luctus.",
  },
  {
    heading: "02/03/18 - 13/05/20",
    name: "UI/UX Engineer (Adobe)",
    content:
      "Morbi ornare ipsum sed sem condimentum, et pulvinar tortor luctus. Suspendisse condimentum lorem ut elementum aliquam et pulvinar tortor luctus.",
  },
]);
</script>

<style></style>
