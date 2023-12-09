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
  if (tab.value == "ALL") {
    store.faqs[index].showContent = !store.faqs[index].showContent;
  } else {
    filteredTab.value[index].showContent = !filteredTab.value[index].showContent;
  }
};

const filterTab = (category) => {
  tab.value = category;
  filteredTab.value = [];
  if (category != "ALL") {
    filteredTab.value = store.faqs.filter((item) => item.fags_category == category);
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
              @click="filterTab('user-accounts')"
              :class="{
                'bg-[#43D0DF] text-[#244034] ': tab == 'user-accounts',
              }"
              class="px-4 py-2 hover:bg-[#43D0DF] hover:text-[#244034] text-[#00000080] rounded-[12px]"
            >
              User Accounts
            </a>
          </li>
          <li>
            <a
              href="javascript:void(0)"
              @click="filterTab('creative-talents')"
              :class="{
                'bg-[#43D0DF] text-[#244034] ': tab == 'creative-talents',
              }"
              class="px-4 py-2 hover:bg-[#43D0DF] hover:text-[#244034] text-[#00000080] rounded-[12px]"
            >
              Creative Talent
            </a>
          </li>
          <li>
            <a
              href="javascript:void(0)"
              @click="filterTab('business')"
              :class="{
                'bg-[#43D0DF] text-[#244034] ': tab == 'business',
              }"
              class="px-4 py-2 hover:bg-[#43D0DF] hover:text-[#244034] text-[#00000080] rounded-[12px]"
            >
              Business
            </a>
          </li>
          <li>
            <a
              href="javascript:void(0)"
              @click="filterTab('subscription-and-payments')"
              :class="{
                'bg-[#43D0DF] text-[#244034] ': tab == 'subscription-and-payments',
              }"
              class="px-4 py-2 hover:bg-[#43D0DF] hover:text-[#244034] text-[#00000080] rounded-[12px]"
            >
              Subscription and Payments
            </a>
          </li>
          <li>
            <a
              href="javascript:void(0)"
              @click="filterTab('technical-support')"
              :class="{
                'bg-[#43D0DF] text-[#244034] ': tab == 'technical-support',
              }"
              class="px-4 py-2 hover:bg-[#43D0DF] hover:text-[#244034] text-[#00000080] rounded-[12px]"
            >
              Technical Support
            </a>
          </li>
          <li>
            <a
              href="javascript:void(0)"
              @click="filterTab('privacy')"
              :class="{
                'bg-[#43D0DF] text-[#244034] ': tab == 'privacy',
              }"
              class="px-4 py-2 hover:bg-[#43D0DF] hover:text-[#244034] text-[#00000080] rounded-[12px]"
            >
              Privacy
            </a>
          </li>
          <li>
            <a
              href="javascript:void(0)"
              @click="filterTab('community-guidelines')"
              :class="{
                'bg-[#43D0DF] text-[#244034] ': tab == 'community-guidelines',
              }"
              class="px-4 py-2 hover:bg-[#43D0DF] hover:text-[#244034] text-[#00000080] rounded-[12px]"
            >
              Community Guidelines
            </a>
          </li>
        </ul>
      </div>

      <div class="py-16">
        <ul
          v-if="store.faqs.length && tab == 'ALL'"
          class="flex flex-col font-Satoshi500 text-[#404041]"
        >
          <li
            v-for="(faq, index) in store.faqs"
            :key="faq"
            class="border-b-[#00000014] border-b-[1px]"
          >
            <div
              @click="toogleFaq(index)"
              class="py-8 px-6 flex justify-between items-center cursor-pointer text-xl"
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
              <div v-html="faq.content" class="text-[16px] font-Satoshi400 mb-4"></div>
              <ul>
                <li class="lg:flex mb-4" v-for="list in faq.sub_content" :key="list">
                  <h3 class="font-Satoshi700 lg:mr-2">{{ list.heading }}</h3>
                  <p class="font-Satoshi400">{{ list.content }}</p>
                </li>
              </ul>
            </div>
          </li>
        </ul>

        <ul v-else class="flex flex-col font-Satoshi500 text-[#404041]">
          <li
            v-for="(faq, index) in filteredTab"
            :key="faq"
            class="border-b-[#00000014] border-b-[1px]"
          >
            <div
              @click="toogleFaq(index)"
              class="py-8 px-6 flex justify-between items-center cursor-pointer text-xl"
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
              <div v-html="faq.content" class="text-[16px] font-Satoshi400 mb-4"></div>
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
