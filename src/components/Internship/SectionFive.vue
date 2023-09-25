<template>
  <section class="container my-16 lg:my-16">
    <h4
      class="lg:text-[70px] text-[#007582] text-[40px] font-EBGaramond500 leading-[40px] lg:leading-[67.5px] mb-20"
    >
      The journey from student to professional has never been more promising.
    </h4>
    <div
      :style="{ backgroundImage: `url(${image})` }"
      class="relative rounded-[29.842px] background p-4 bg-[#00000054]"
    >
      <div class="lg:p-12 lg:py-12">
        <p class="lg:text-[32px] lg:leading-[49.478px] font-Satoshi500 text-white">
          Join MySpurr Internships and embark <br class="md:block hidden" />
          on a journey of professional growth, <br class="md:block hidden" />
          skill development, and career <br class="md:block hidden" />
          advancement.
        </p>
        <div
          class="flex lg:flex-row flex-col lg:justify-start justify-center lg:items-start items-center gap-4 mt-8"
        >
          <button class="btn-brand font-Satoshi400 w-[193.602px] text-[16px] !px-0">
            Sign Up for internships</button
          ><button class="btn-brand font-Satoshi400 w-[193.602px]">Contact us</button>
        </div>
      </div>
      <!-- <img class="rounded-[29.842px]" src="@/assets/img/internbander.png" alt="" /> -->
    </div>
  </section>
</template>
<script setup>
import mainbg from "@/assets/img/internbander.png";
const image = mainbg;
</script>

<style scoped>
.background {
  background-size: cover;
  background-blend-mode: overlay;
}
</style>
