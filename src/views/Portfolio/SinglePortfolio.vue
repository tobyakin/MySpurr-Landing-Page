<template>
  <div>
    <Navbar />
    <Loader v-if="loading" />

    <div v-else class="py-20 container">
      <div
        class="bg-[#E9FAFB] border-[0.735px] flex lg:flex-row flex-col gap-8 justify-center rounded-[13.076px] mt-10 p-6 px-4 lg:px-[100px]"
      >
        <div class="flex flex-row gap-2">
          <p class="text-[#244034c5] text-[20.9px] font-Satoshi400">Category:</p>
          <p class="text-[#244034] text-[20.9px] font-Satoshi500">
            {{ category_id }}
          </p>
        </div>
        <div class="flex flex-row gap-2">
          <p class="text-[#244034c5] text-[20.9px] font-Satoshi400">Date:</p>
          <p class="text-[#244034] text-[20.9px] font-Satoshi500">
            {{ portfolio.created_at }}
          </p>
        </div>
        <div class="flex flex-row gap-2">
          <p class="text-[#244034c5] text-[20.9px] font-Satoshi400">Tags:</p>
          <div></div>
          <div class="flex flex-row gap-1">
            <p
              v-for="tag in portfolio.tags"
              :key="tag"
              class="text-[#244034] text-[20.9px] font-Satoshi500"
            >
              {{ tag }},
            </p>
          </div>
        </div>
        <!-- <div class="flex flex-col gap-2">
          <p class="text-[#244034c5] text-[13.076px] font-Satoshi400">Creative work</p>
          <p class="text-[#244034] text-[13.076px] font-Satoshi500">
            {{ portfolio?.title }}
          </p>
        </div>
        <div class="flex flex-col gap-2">
          <p class="text-[#244034c5] text-[13.076px] font-Satoshi400">Tags</p>
          <div v-for="tag in portfolio?.tags" :key="tag" class="flex">
            <p class="text-[#244034] text-[13.076px] font-Satoshi500">
              {{ tag.name }}
            </p>
          </div>
        </div>
        <div class="flex flex-col gap-2">
          <p class="text-[#244034c5] text-[13.076px] font-Satoshi400">Client</p>
          <p class="text-[#244034] text-[13.076px] font-Satoshi500">
            {{ portfolio?.client_name }}
          </p>
        </div>
        <div class="flex flex-col gap-2">
          <p class="text-[#244034c5] text-[13.076px] font-Satoshi400">Job Type</p>
          <p class="text-[#244034] text-[13.076px] font-Satoshi500">
            {{ portfolio?.job_type }}
          </p>
        </div>
        <div class="flex flex-col gap-2">
          <p class="text-[#244034c5] text-[13.076px] font-Satoshi400">Rate</p>
          <p class="text-[#244034] text-[13.076px] font-Satoshi500">
            {{ portfolio?.rate }}
          </p>
        </div>
        <div class="flex flex-col gap-2">
          <p class="text-[#244034c5] text-[13.076px] font-Satoshi400">Location</p>
          <p class="text-[#244034] text-[13.076px] font-Satoshi500">
            {{ portfolio?.location }}
          </p>
        </div> -->
      </div>
      <div class="flex flex-col mt-10 gap-10 w-full">
        <div class="w-full">
          <h3
            v-html="portfolio?.title"
            class="text-[#000000] font-Satoshi700 mt-4 text-[32px]"
          ></h3>
          <div
            v-html="portfolio?.description"
            class="!my-4 leading-[16.33px] portfolio_editor mt-4 font-Satoshi400 w-full !text-[22.62px]"
          ></div>
        </div>

        <img
          loading="lazy"
          :src="portfolio?.featured_image"
          alt="cover image"
          class="rounded-[13.076px] h-[100%] w-full object-contain mx-auto"
        />
        <div class="flex flex-col gap-10">
          <img
            v-for="image in portfolio?.project_image"
            :key="image.id"
            loading="lazy"
            :src="image.image"
            alt="cover image"
            class="rounded-[13.076px] h-[100%] w-full object-contain mx-auto"
          />
        </div>
        <div class="pl-[2.53rem] ">
          <a
              role="button"
              target="_blank"
              href=""
              class="btn-brand font-Satoshi500"
              >View Full Project
            </a>
        </div>
        <!-- <div class="flex flex-row justify-center gap-5 items-center">
          <button class="relative">
            <div
              class="p-1 rounded-full absolute top-[-5px] right-[-5px] h-[21.89px] w-[21.89px] text-[8.674px] font-Satoshi500 text-white bg-[#43D0DF]"
            >
              23
            </div>
            <img loading="lazy" src="@/assets/svg/eyeIcon.svg" alt="" />
          </button>
          <button class="relative">
            <div
              class="p-1 rounded-full absolute top-[-5px] right-[-5px] h-[21.89px] w-[21.89px] text-[8.674px] font-Satoshi500 text-white bg-[#43D0DF]"
            >
              23
            </div>
            <img loading="lazy" src="@/assets/svg/loveIcon.svg" alt="" />
          </button>
          <button class="relative">
            <div
              class="p-1 rounded-full absolute top-[-5px] right-[-5px] h-[21.89px] w-[21.89px] text-[8.674px] font-Satoshi500 text-white bg-[#43D0DF]"
            >
              23
            </div>
            <img loading="lazy" src="@/assets/svg/message.svg" alt="" />
          </button>
          <button class="relative">
            <div
              class="p-1 rounded-full absolute top-[-5px] right-[-5px] h-[21.89px] w-[21.89px] text-[8.674px] font-Satoshi500 text-white bg-[#43D0DF]"
            >
              23
            </div>
            <img loading="lazy" src="@/assets/svg/share.svg" alt="" />
          </button>
          <button class="relative">
            <div
              class="p-1 rounded-full absolute top-[-5px] right-[-5px] h-[21.89px] w-[21.89px] text-[8.674px] font-Satoshi500 text-white bg-[#43D0DF]"
            >
              23
            </div>
            <img loading="lazy" src="@/assets/svg/share.svg" alt="" />
          </button>
        </div> -->
        <!-- <div class="container">
          <div
            class="w-full flex lg:flex-row flex-col lg:justify-between justify-center gap-8 items-center"
          >
            <div
              class="flex lg:flex-row flex-col items-center lg:justify-normal justify-center gap-6"
            >
              <div class="relative h-[100.955px] w-[100.955px] rounded-full">
                <img
                  loading="lazy"
                  src="@/assets/img/icon.webp"
                  class="h-[100.955px] w-[100.955px] rounded-full"
                  alt=""
                /><svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  class="absolute top-[-1px] right-3"
                >
                  <circle cx="8.94884" cy="8.8258" r="8.72814" fill="#00A939"></circle>
                </svg>
              </div>
              <div class="lg:text-left text-center">
                <p
                  class="text-[#000000] text-[20.839px] font-Satoshi500 leading-[19.739px]"
                >
                  Julia Ark
                </p>
                <p
                  class="text-[#00000066] text-[16.699px] leading-[20.739px] font-Satoshi400"
                >
                  Graphic Designer
                </p>
                <div class="flex items-center gap-2">
                  <p
                    class="lg:text-[19.319px] text-[14px] text-[#244034] font-Satoshi500"
                  >
                    $30k -$50k/yr
                  </p>
                  <div class="h-[6px] bg-[#010101e2] w-[6px] rounded-full"></div>
                  <p
                    class="text-[#244034] lg:text-[19.319px] text-[14px] font-Satoshi500"
                  >
                    California, US
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div class="flex md:flex-row flex-col lg:items-start items-center gap-4">
                <button class="btn-brand">Message</button>
              </div>
            </div>
          </div>
        </div>
        <div class="flex lg:flex-row flex-col gap-5 w-full">
          <div
            class="rounded-[22.343px] p-6 px-8 border-[0.508px] border-[#254035]/[0.6] w-full"
          >
            <div class="flex lg:flex-row flex-col gap-[54.841px]">
              <img
                loading="lazy"
                class="rounded-full w-[67.129px] h-[67.129px]"
                src="@/assets/img/userAvaterc.png"
                alt=""
              />
              <div class="w-full">
                <textarea
                  class="block w-full py-1.5 px-3 text-gray-800 border rounded-[15.576px] border-gray-300 transition duration-500 focus:outline-none"
                  name=""
                  id=""
                  cols="30"
                  rows="5"
                ></textarea>
                <div class="flex items-end justify-end mt-[30px]">
                  <button class="btn-brand !py-[8.63px] !px-[10.68] !text-[10.125px]">
                    Post a Comment
                  </button>
                </div>
              </div>
            </div>
            <hr class="text-[#254035AB] !my-[30px]" />
            <div class="flex flex-col gap-[29.45px]">
              <div v-for="i in 3" :key="i" class="flex items-center gap-4">
                <img
                  loading="lazy"
                  class="rounded-full w-[52.608px] h-[52.608px]"
                  src="@/assets/img/userAvaterc.png"
                  alt=""
                />
                <div>
                  <h4 class="text-[15.84px] flex gap-2 leading-[20.24px] font-Satoshi500">
                    Julia Ark.
                    <p class="text-[10.156px] font-Satoshi400">Aug 4, 2023</p>
                  </h4>
                  <p class="text-[16.168px] font-Satoshi500 leading-[23.241px]">
                    hmmm what should I say? A thank you I guess
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="lg:w-4/5">
            <h4 class="text-[#101621] text-[25px] leading-[62px] font-Satoshi500">
              More from Julia Ark
            </h4>
            <div class="grid grid-cols-2 gap-[22px]">
              <CaseStudyCard
                v-for="blog in blogPost"
                :key="blog"
                :image="blog.cover_image"
                :heading="blog.title"
                :text="blog.blog_description"
                :date="blog.created_at"
                :blog_category="blog.blog_category"
                :blog="blog"
              />
            </div>
          </div>
        </div> -->
      </div>
    </div>
    <div class="py-20 container">
      <h4 class="text-[#101621] text-[25px] leading-[62px] font-Satoshi500">
        You may also like
      </h4>

      <div class="flex lg:flex-row flex-col gap-5 w-full">
        <CaseStudyCard
          v-for="portfolio in talentPortfolios?.data?.slice(0, 5)"
          :key="portfolio.id"
          :image="portfolio?.featured_image"
          :heading="portfolio?.title"
          :blog="portfolio"
        />
      </div>
      <WorkFlow />
    </div>

    <Footer />
  </div>
</template>

<script setup>
import { ref, onMounted, computed, watchEffect, onUnmounted, reactive } from "vue";
import { useRouter, useRoute } from "vue-router";
import WorkFlow from "@/components/Bander/WorkFlow.vue";
import Navbar from "@/components/Navbar/Navbar.vue";
import Footer from "@/components/Footer.vue";
import CaseStudyCard from "@/components/CaseStudy/CaseStudyCard.vue";
import SampleThree from "@/assets/img/sampleThree.webp";
import { storeToRefs } from "pinia";
import { useTalentsStore } from "@/stores/talents";
const talentsStore = useTalentsStore();
const { talentPortfolio } = storeToRefs(talentsStore);
const route = useRoute();
const router = useRouter();
import { useQuery } from "vue-query";
import { usePorfolioStore } from "@/stores/portfolios";
const PorfolioStore = usePorfolioStore();
const { talentPortfolios } = storeToRefs(PorfolioStore);
import { useSkillsStore } from "@/stores/skills";
const skillsStore = useSkillsStore();
const { skills, jobTitle } = storeToRefs(skillsStore);
import Loader from "@/components/UI/Loader/Loader.vue";
const loading = ref(false);

// const blogPost = [
//   {
//     slug: 1,
//     cover_image: SampleThree,
//     title: "How to Build a Successful Career in the Creative Industry",
//     blog_category: "career development",
//     blog_description: "trdfgfg",
//     created_at: "16 Jul 2018",
//   },
//   {
//     slug: 2,
//     cover_image: SampleThree,
//     title: "How to Build a Successful Career in the Creative Industry",
//     blog_category: "Company news",
//     blog_description: "trdfgfg",
//     created_at: "16 Jul 2018",
//   },
//   {
//     slug: 3,
//     cover_image: SampleThree,
//     title: "How to Build a Successful Career in the Creative Industry",
//     blog_category: "Creativity and Design",
//     blog_description: "trdfgfg",
//     created_at: "16 Jul 2018",
//   },
//   {
//     slug: 4,
//     cover_image: SampleThree,
//     title: "How to Build a Successful Career in the Creative Industry",
//     blog_category: "Creativity and Design",
//     blog_description: "trdfgfg",
//     created_at: "16 Jul 2018",
//   },
// ];
const portfolio = computed(() => talentPortfolio.value?.data || []);
const category_id = computed(() => {
  const foundCategory = skills?.value?.data?.find(
    (category) => category.id === portfolio.value.category_id
  );
  return foundCategory ? foundCategory.name : null;
});

onMounted(async () => {
  loading.value = true;
  try {
    await talentsStore.SingleTalentPortfolio(route.params.id);
    await PorfolioStore.allPorfolio();
    await skillsStore.getskills();
    await skillsStore.getJobTitles();
    loading.value = false;
  } catch (error) {
    console.error;
    loading.value = false;
  }
});
// Watch for changes in the route query parameters
watchEffect(async () => {
  loading.value = true;
  try {
    await talentsStore.SingleTalentPortfolio(route.params.id);
    await PorfolioStore.allPorfolio();
    await skillsStore.getskills();
    await skillsStore.getJobTitles();
    loading.value = false;
  } catch (error) {
    console.error;
    loading.value = false;
  }
});
onUnmounted(() => {
  talentPortfolio.value = null;
});
// onMounted(async () => {
//   await PorfolioStore.allPorfolio();
// });

// const getSingleTalentPortfolio = async () => {
//   let response = await talentsStore.SingleTalentPortfolio(route.params.id);
//   return response;
// };
// const fetchData = async () => {
//   await Promise.all([getSingleTalentPortfolio()]);
// };
// fetchData();

// useQuery(["talents"], getSingleTalentPortfolio, {
//   retry: 10,
//   staleTime: 10000,
//   onSuccess: (data) => {
//     talentPortfolio.value = data;
//   },
// });
</script>

<style></style>
