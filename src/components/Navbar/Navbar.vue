<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";

import SearchBarIcon from "@/components/icons/searchBarIcon.vue";
const body = document.querySelector("body");
body.classList.remove("overflow-hidden");
const showMobile = ref(false);
const route = useRoute();

const toogleMobileMenu = () => {
  const body = document.querySelector("body");
  showMobile.value = !showMobile.value;
  if (showMobile.value) {
    body.classList.add("overflow-hidden");
  } else {
    body.classList.remove("overflow-hidden");
  }
};

const landingUrl = import.meta.env.VITE_LANDING_PAGE;
</script>
<template>
  <div class="sticky top-0 z-30 bg-[#ffffff]">
    <div class="!max-w-[93%] container mx-auto">
      <header class="py-[18px]">
        <div
          class="lg:px-[15px] mx-auto flex items-center justify-between font-Satoshi700"
        >
          <div class="flex items-center justify-between space-x-4 lg:space-x-6">
            <router-link to="/">
              <img
                src="@/assets/Logo.png"
                class="h-[30px] md:h-[34.421px] w-auto"
                alt="MySpurr logo"
              />
            </router-link>
          </div>
          <div class="hidden xl:flex items-center gap-12">
            <ul class="hidden xl:flex gap-14 text-sm">
              <li>
                <div class="w-full relative hidden lg:flex">
                  <SearchBarIcon class="absolute left-3 top-3" /><input
                    class="w-full font-light font-Satoshi400 text-[14px] p-3 pl-9 pr-24 border-[#F0F0F0] border-[1px] opacity-[0.8029] rounded-[7px] text-sm"
                    placeholder=" Search here.."
                    type="text"
                  /><button
                    class="absolute right-0 top-3 font-Satoshi400 text-[16px] px-[21px] border-l-[#F0F0F0] border-l-[1px]"
                  >
                    Find job
                  </button>
                </div>
              </li>
            </ul>
          </div>
          <div class="hidden xl:flex">
            <ul class="flex flex-row font-Satoshi500 items-center gap-5">
              <li>
                <router-link
                  to="/business"
                  :class="route.name === 'business' ? 'text-[#2F929C] ' : ''"
                  class="p-[10px] pr-0 flex justify-start rounded-[5px]"
                >
                  <span class="place-self-center text-[16px] leading-[21.6px]"
                    >For Business
                  </span>
                </router-link>
              </li>
              <li>
                <router-link
                  to="/learn"
                  :class="route.name === 'learn' ? 'text-[#2F929C] ' : ''"
                  class="p-[10px] pr-0 flex justify-start rounded-[5px]"
                >
                  <span class="place-self-center text-[16px] leading-[21.6px]"
                    >Learn
                  </span>
                </router-link>
              </li>
              <li>
                <router-link
                  to="/hire-talent"
                  :class="route.name === 'hire-talent' ? 'text-[#2F929C] ' : ''"
                  class="p-[10px] pr-0 flex justify-start rounded-[5px]"
                >
                  <span class="place-self-center text-[16px] leading-[21.6px]"
                    >Hire Talent
                  </span>
                </router-link>
              </li>
            </ul>
          </div>
          <div class="hidden lg:flex items-center gap-4">
            <a
              role="button"
              target="_blank"
              :href="landingUrl + 'login'"
              class="btn-light font-Satoshi500 !text-[16px]"
            >
              Sign in
            </a>
            <a
              role="button"
              target="_blank"
              :href="landingUrl + 'signup'"
              class="btn-brand font-Satoshi500"
              >Start free trial</a
            >
          </div>
          <div class="lg:hidden">
            <button @click="toogleMobileMenu">
              <svg
                v-if="!showMobile"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-8 h-8"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
              <svg
                v-else
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-8 h-8"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </header>
    </div>
  </div>
</template>
