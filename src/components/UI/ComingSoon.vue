<script setup>


defineProps({ title: String });
</script>
<template>
  <div class="p-0 lg:p-6 lg:py-20 py-4 mb-5">
    <p class="text-[#244034] lg:text-[75.221px] text-[43px] mt-8 lg:leading-[113%] font-EBGaramond500">
      {{ title }} is yet to go live.
    </p>
    <p class="text-[#24403 4] text-[17.633px] mt-10 leading-[27.356px] font-Satoshi400">
      Is there anything you’ll like to see, email
      <a href="mailto: hello@myspurr.net" class="underline-offset-2 underline"
        >hello@myspurr.net</a
      >
    </p>
    <p class="text-[#244034] text-[17.633px] mt-10 leading-[27.356px] font-Satoshi400">
      Cheers
    </p>
  </div>
</template>
