<script setup>
import { defineAsyncComponent } from "vue";
const FormGroup = defineAsyncComponent(() =>
  import("@/components/ui/Form/Input/FormGroup.vue")
);

import { useStore } from "@/stores/user";
let store = useStore();
</script>

<template>
  <div class="p-0 lg:p-6 lg:py-3 py-4 mb-5">
    <p class="text-[#244034] text-[75.221px] mt-8 leading-[113%] font-EBGaramond500">
      Your application has<br />
      been received.
    </p>
    <p class="text-[#244034] text-[17.633px] mt-10 leading-[27.356px] font-Satoshi400">
      Seat back and relax while the recruiter takes a look at your resume and portfolio.
      We will keep you updated about position of this job.
    </p>
    <p class="text-[#244034] text-[17.633px] mt-6 leading-[27.356px] font-Satoshi400">
      Cheers <br />
      The MySpurr Team
    </p>
    <div class="bg-[#84B358] p-14 rounded-[7.973px] mt-12">
      <p class="text-[#FBFBEE] text-[47.239px] mt-6 leading-[56.484px] font-Satoshi500">
        Join our email community
      </p>
      <p class="text-[#FBFBEE] text-[21.714px] mt-4 leading-[25.964px] font-Satoshi500">
        Get the latest news and updates from MySpurr
      </p>
      <div class="flex gap-6 mt-4">
        <FormGroup
          labelClasses="font-Satoshi500 text-[15.606px]"
          label="Name"
          name="text"
          placeholder=""
          type=" text"
          inputClasses="w-full mt-2 font-light font-Satoshi400 !p-2 border-[#EDEDED] border-[0.509px] opacity-[0.8029] rounded-[6.828px] text-[12.68px]"
        ></FormGroup>
        <FormGroup
          labelClasses="font-Satoshi500 text-[15.606px]"
          label="Emaill"
          name="email"
          placeholder=""
          type="email"
          inputClasses="w-full mt-2 font-light font-Satoshi400 !p-2 border-[#EDEDED] border-[0.509px] opacity-[0.8029] rounded-[6.828px] text-[12.68px]"
        ></FormGroup>
      </div>
    </div>
  </div>
</template>
