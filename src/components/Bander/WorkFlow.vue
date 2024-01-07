<template>
  <div
    class="lg:my-40 my-10 py-10 border-t-[#EBEBEB] border-b-[#EBEBEB] border-t-[1px] border-b-[1px]"
  >
    <div
      class="flex lg:flex-nowrap flex-wrap lg:gap-0 gap-10 items-center justify-between"
    >
      <div class="w-full">
        <h2
          class="text-[#101621] w-full text-[30px] lg:text-[40px] text-center lg:text-left leading-[29px] lg:leading-[44px] font-EBGaramond500"
        >
          Transform your work flow
        </h2>
        <p
          class="text-[#00000099] text-[20px] font-Satoshi400 text-center lg:text-left leading-[32px]"
        >
          we believe that your work should know no bounds.
        </p>
      </div>
      <div
        class="flex lg:flex-nowrap flex-wrap invisible gap-8 lg:gap-1 justify-center lg:justify-end w-full lg:py-14 py-3 font-Satoshi500"
      >
        <div>
          <a target="_blank" role="button" class="btn-light text-[18px]">
            Looking for Creative talent?
          </a>
        </div>
        <div>
          <a
            :href="dashboardUrl + 'signup'"
            role="button"
            class="bg-brand p-3 mx-auto rounded-full px-10 text-white text-[16px] font-Satoshi400"
            >Sign up for free
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
const dashboardUrl = import.meta.env.VITE_DASHBOARD;
</script>
