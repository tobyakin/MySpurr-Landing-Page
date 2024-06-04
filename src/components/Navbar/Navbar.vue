<script setup>
import { onMounted, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import SearchBarIcon from "@/components/icons/searchBarIcon.vue";
import { visitor } from "../../services/Visitor";


onMounted(async () => {
  try {
    await visitor()
  } catch (error) {
    console.log(error)
  }
})

const body = document.querySelector("body");
body.classList.remove("overflow-hidden");
const showMobile = ref(false);
const route = useRoute();
const router = useRouter();

const toogleMobileMenu = () => {
  const body = document.querySelector("body");
  showMobile.value = !showMobile.value;
  if (showMobile.value) {
    body.classList.add("overflow-hidden");
  } else {
    body.classList.remove("overflow-hidden");
  }
};

const dashboardUrl = import.meta.env.VITE_DASHBOARD;
const searchQuery = ref("");

const redirectToJobPage = () => {
  router.push({
    name: "jobs",
    query: { search: searchQuery.value },
  });
};
// const handleSearchInput = (event) => {
//   const searchQuery = event.target.value;
//   redirectToJobPage(searchQuery);
// };

const redirectWithSearchQuery = () => {
  // const inputField = document.querySelector(".search-input");
  // if (searchQuery.value) {
  redirectToJobPage();
  // }
};
</script>
<template>
  <div class="sticky top-0 z-30 bg-[#ffffff] exclude-from-print">
    <div class="!max-w-[93%] container mx-auto">
      <header class="py-[18px]">
        <div
          class="lg:px-[15px] mx-auto flex items-center justify-between font-Satoshi700"
        >
          <div class="flex items-center justify-between space-x-4 lg:space-x-6">
            <router-link to="/">
              <img
                loading="lazy"
                src="@/assets/Logobeta.png"
                class="h-[40px] md:h-[49.421px] w-auto"
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
                    v-model="searchQuery"
                  /><button
                    @click="redirectWithSearchQuery"
                    class="absolute right-0 top-3 font-Satoshi400 text-[16px] px-[21px] border-l-[#F0F0F0] border-l-[1px]"
                  >
                    Find job
                  </button>
                </div>
              </li>
            </ul>
          </div>
          <div class="hidden lg:flex">
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
                  to="/courses"
                  :class="route.name === 'courses' ? 'text-[#2F929C] ' : ''"
                  class="p-[10px] pr-0 flex justify-start rounded-[5px]"
                >
                  <span class="place-self-center text-[16px] leading-[21.6px]"
                    >Courses
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
              :href="dashboardUrl + 'login'"
              class="btn-light font-Satoshi500 !text-[16px]"
            >
              Sign in
            </a>
            <a
              role="button"
              target="_blank"
              :href="dashboardUrl + 'signup'"
              class="btn-brand font-Satoshi500"
              >Sign up for free
            </a>
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
                class="w-8 h-8"
                viewBox="0 0 40 40"
                fill="none"
              >
                <g clip-path="url(#clip0_2694_20501)">
                  <path
                    d="M20.2725 3.75C11.2862 3.75 4.02246 11.0137 4.02246 20C4.02246 28.9862 11.2862 36.25 20.2725 36.25C29.2587 36.25 36.5225 28.9862 36.5225 20C36.5225 11.0137 29.2587 3.75 20.2725 3.75ZM20.2725 33C13.1062 33 7.27246 27.1663 7.27246 20C7.27246 12.8337 13.1062 7 20.2725 7C27.4387 7 33.2725 12.8337 33.2725 20C33.2725 27.1663 27.4387 33 20.2725 33ZM26.1062 11.875L20.2725 17.7087L14.4387 11.875L12.1475 14.1663L17.9812 20L12.1475 25.8337L14.4387 28.125L20.2725 22.2913L26.1062 28.125L28.3975 25.8337L22.5637 20L28.3975 14.1663L26.1062 11.875Z"
                    fill="#007582"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_2694_20501">
                    <rect
                      width="39"
                      height="39"
                      fill="white"
                      transform="translate(0.772461 0.5)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </button>
          </div>
        </div>
      </header>
      <div
        v-if="showMobile"
        :class="{ 'animate__animated animate__slideOutLeft': !showMobile }"
        class="sticky z-20 bg-white animate__animated animate__slideInLeft lg:hidden w-full h-screen"
      >
        <div class="flex justify-start mb-8">
          <div class="flex-grow">
            <ul class="flex flex-col font-Satoshi500 gap-4">
              <li>
                <div class="w-full relative flex">
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

              <li>
                <router-link
                  to="/business"
                  :class="route.name === 'business' ? 'text-[#2F929C] ' : ''"
                  class="p-[10px] px-0 flex justify-start rounded-[5px]"
                >
                  <span class="place-self-center text-[16px] leading-[21.6px]"
                    >For Business
                  </span>
                </router-link>
              </li>
              <li>
                <router-link
                  to="/courses"
                  :class="route.name === 'learn' ? 'text-[#2F929C] ' : ''"
                  class="p-[10px] px-0 flex justify-start rounded-[5px]"
                >
                  <span class="place-self-center text-[16px] leading-[21.6px]"
                    >Courses
                  </span>
                </router-link>
              </li>
              <li>
                <router-link
                  to="/hire-talent"
                  :class="route.name === 'hire-talent' ? 'text-[#2F929C] ' : ''"
                  class="p-[10px] px-0 flex justify-start rounded-[5px]"
                >
                  <span class="place-self-center text-[16px] leading-[21.6px]"
                    >Hire Talent
                  </span>
                </router-link>
              </li>
            </ul>
            <div class="flex flex-col mt-12 items-center gap-4">
              <a
                role="button"
                target="_blank"
                :href="dashboardUrl + 'login'"
                class="btn-light font-Satoshi500 !text-[16px]"
              >
                Sign in
              </a>
              <a
                role="button"
                target="_blank"
                :href="dashboardUrl + 'signup'"
                class="btn-brand font-Satoshi500"
                >Sign up for free
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
