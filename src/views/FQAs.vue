<script setup>
import { computed, reactive } from "vue";
import { useHead } from "@vueuse/head";
import Navbar from "@/components/Navbar/Navbar.vue";
import Footer from "@/components/Footer.vue";
import WorkFlow from "@/components/Bander/WorkFlow.vue";
import useFaqStore from "@/stores/faq";
import { ref } from "vue";
const store = useFaqStore();

const tab = ref("ALL");
const filteredTab = ref([]);

// const faqs = store.faqs;
const siteData = reactive({
  title: `MySpurr | FAQs`,
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
      content: "faqs",
    },
  ],
});
const toogleFaq = (index) => {
  store.faqs[index].showContent = !store.faqs[index].showContent;
};

const filterTab = (category) => {
  tab.value = category;
  filteredTab.value = [];
  if (category != "ALL") {
    filteredTab.value = store.blogPost.filter((item) => item.blog_category == category);
  }
};
</script>

<template>
  <div>
    <Navbar />
    <div class="py-20 container">
      <div class="my-10">
        <h4
          class="font-EBGaramond500 lg:text-[64px] text-[30px] text-center text-[#007582]"
        >
          Frequently Asked Questions
        </h4>
        <p class="text-[#007582] text-[22px] font-Satoshi400 text-center">
          Have a question that isn’t here? Contact us
        </p>
      </div>
      <div class="font-Satoshi400">
        <ul
          class="hidden my-24 md:flex text-sm justify-between font-semibold flex-wrap gap-y-[40px]"
        >
          <li>
            <a
              href="javascript:void(0)"
              @click="filterTab('ALL')"
              :class="{ 'bg-[#43D0DF] text-[#244034] ': tab == 'ALL' }"
              class="px-4 py-2 hover:bg-[#43D0DF] hover:text-[#244034] text-[#00000080] rounded-[12px]"
            >
              All
            </a>
          </li>
          <li>
            <a
              href="javascript:void(0)"
              @click="filterTab('User Accounts')"
              :class="{
                'bg-[#43D0DF] text-[#244034] ': tab == 'User Accounts',
              }"
              class="px-4 py-2 hover:bg-[#43D0DF] hover:text-[#244034] text-[#00000080] rounded-[12px]"
            >
              User Accounts
            </a>
          </li>
          <li>
            <a
              href="javascript:void(0)"
              @click="filterTab('Creative Talent')"
              :class="{
                'bg-[#43D0DF] text-[#244034] ': tab == 'Creative Talent',
              }"
              class="px-4 py-2 hover:bg-[#43D0DF] hover:text-[#244034] text-[#00000080] rounded-[12px]"
            >
              Creative Talent
            </a>
          </li>
          <li>
            <a
              href="javascript:void(0)"
              @click="filterTab('Business')"
              :class="{
                'bg-[#43D0DF] text-[#244034] ': tab == 'Business',
              }"
              class="px-4 py-2 hover:bg-[#43D0DF] hover:text-[#244034] text-[#00000080] rounded-[12px]"
            >
              Business
            </a>
          </li>
          <li>
            <a
              href="javascript:void(0)"
              @click="filterTab('Subscription and Payments')"
              :class="{
                'bg-[#43D0DF] text-[#244034] ': tab == 'Subscription and Payments',
              }"
              class="px-4 py-2 hover:bg-[#43D0DF] hover:text-[#244034] text-[#00000080] rounded-[12px]"
            >
              Subscription and Payments
            </a>
          </li>
          <li>
            <a
              href="javascript:void(0)"
              @click="filterTab('Technical Support')"
              :class="{
                'bg-[#43D0DF] text-[#244034] ': tab == 'Technical Support',
              }"
              class="px-4 py-2 hover:bg-[#43D0DF] hover:text-[#244034] text-[#00000080] rounded-[12px]"
            >
              Technical Support
            </a>
          </li>
          <li>
            <a
              href="javascript:void(0)"
              @click="filterTab('Privacy')"
              :class="{
                'bg-[#43D0DF] text-[#244034] ': tab == 'Privacy',
              }"
              class="px-4 py-2 hover:bg-[#43D0DF] hover:text-[#244034] text-[#00000080] rounded-[12px]"
            >
              Privacy
            </a>
          </li>
          <li>
            <a
              href="javascript:void(0)"
              @click="filterTab(' Community Guidelines')"
              :class="{
                'bg-[#43D0DF] text-[#244034] ': tab == ' Community Guidelines',
              }"
              class="px-4 py-2 hover:bg-[#43D0DF] hover:text-[#244034] text-[#00000080] rounded-[12px]"
            >
              Community Guidelines
            </a>
          </li>
        </ul>
      </div>

      <div class="py-16">
        <ul class="flex flex-col font-Satoshi500 text-[#404041]">
          <li v-for="(faq, index) in store.faqs" :key="faq">
            <div
              @click="toogleFaq(index)"
              class="py-8 px-6 flex justify-between items-center cursor-pointer border-b-[#00000014] border-b-[1px] text-xl"
            >
              <div>{{ faq.name }}</div>
              <div>
                <div
                  v-if="!faq.showContent"
                  class="w-6 transition delay-100 text-[24px] ease-in-out h-6"
                >
                  +
                </div>
                <div
                  v-if="faq.showContent"
                  class="w-6 transition delay-100 text-[24px] ease-in-out h-6"
                >
                  -
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  :class="{ 'rotate-180': faq.showContent }"
                  class="w-6 transition hidden delay-100 ease-in-out h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </div>
            </div>
            <div v-if="faq.showContent" class="p-4">
              <h3 class="text-sm font-Satoshi400 mb-4">{{ faq.content }}</h3>
              <ul>
                <li class="lg:flex mb-4" v-for="list in faq.sub_content" :key="list">
                  <h3 class="font-Satoshi700 lg:mr-2">{{ list.heading }}</h3>
                  <p class="font-Satoshi400">{{ list.content }}</p>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>

      <div></div>
      <WorkFlow />
    </div>
    <Footer />
  </div>
</template>

<style scoped></style>
