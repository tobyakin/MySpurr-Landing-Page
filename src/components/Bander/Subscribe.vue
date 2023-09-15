<template>
  <div>
    <p class="lg:text-[24.693px] text-[19px] font-Satoshi400 text-[#000000] capitalize">
      Join & get important new regularly
    </p>
    <div
      class="bg-[#0000000A] p-4 lg:px-10 px-4 flex lg:flex-row flex-col my-4 items-center gap-3 rounded-[11.158px]"
    >
      <FormGroup
        placeholder="Enter your email"
        class="!bg-transparent !border-none font-Satoshi400 text-[25.504px]"
      />
      <button class="btn-brand">Subscribe</button>
    </div>
    <p class="text-[16.316px] font-Satoshi400 text-[#979797]">
      We only send interesting and relevant emails.
    </p>
  </div>
</template>
<script setup>
import { defineAsyncComponent } from "vue";

const FormGroup = defineAsyncComponent(() => import("@/components/Form/Input/Input.vue"));
</script>
