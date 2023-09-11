<script setup>
import { ref } from "vue";
const body = document.querySelector("body");
body.classList.remove("overflow-hidden");
const showMobile = ref(false);
const toogleMobileMenu = () => {
  const body = document.querySelector("body");
  showMobile.value = !showMobile.value;
  if (showMobile.value) {
    body.classList.add("overflow-hidden");
  } else {
    body.classList.remove("overflow-hidden");
  }
};

// const landingUrl = import.meta.env.VITE_LANDING_PAGE;
</script>
<template>
  <div class="auth_container">
    <header class="py-8">
      <div class="lg:px-[15px] mx-auto flex items-center justify-between font-Satoshi700">
        <div class="flex items-center justify-between space-x-4 lg:space-x-6">
          <router-link to="/">
            <img
              src="@/assets/Logo.png"
              class="h-[40px] md:h-[27.53px] w-auto"
              alt="MySpurr logo"
            />
          </router-link>
        </div>
        <div class="hidden md:flex items-center gap-12">
          <ul class="hidden lg:flex gap-14 text-sm"></ul>
          <div role="button" class="flex gap-2">
            <!-- <a :href="landingUrl" class="font-Satoshi400 text-center text-brand">
              back to website
            </a> -->
            <!-- <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="21"
              viewBox="0 0 20 21"
              fill="none"
            >
              <path
                d="M3.75 10.5391L16.25 10.5391M16.25 10.5391L10.625 4.91406M16.25 10.5391L10.625 16.1641"
                stroke="#2F929C"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg> -->
          </div>
        </div>
        <div class="hidden">
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
</template>
