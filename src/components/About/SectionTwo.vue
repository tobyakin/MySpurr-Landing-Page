<template>
  <SampleOne
    :heading="HeadingTwo"
    :list="section4List2"
    :image="ImageThree"
    :reverse="true"
    :reverseOnMobile="true"
  />
  <SampleOne
    :heading="HeadingThree"
    :list="section4List3"
    :image="ImageTwo"
    :reverseOnMobile="true"
  />
</template>

<script setup>
import { ref } from "vue";
import ImageTwo from "@/assets/img/unlock.png";
import ImageThree from "@/assets/img/empower.png";
import SampleOne from "@/components/genericComponents/sampleOne.vue";
const HeadingTwo = ` <span class="font-Satoshi700">Empowering  <br class="md:block hidden" /> Creative Talents in  <br class="md:block hidden" /> Africa  </span> `;
const HeadingThree = ` <span class="font-Satoshi700">Unlocking<br class="md:block hidden" /> Opportunities in<br class="md:block hidden" /> the Creative <br class="md:block hidden" /> Industry </span>   `;

const section4List2 = ref([
  {
    text:
      "At MySpurr, our mission is clear: to empower creative talents from all corners of the globe. We believe in the transformative power of creativity and its ability to shape lives.",
  },
  {
    text:
      " Our platform is dedicated to fostering a thriving creative community, connecting talents with opportunities, and fueling their aspirations.",
  },
]);

const section4List3 = ref([
  {
    text:
      "The creative industry in Africa is brimming with untapped potential, yet many talents face barriers to entry, limited support, and challenges in monetizing their skills. MySpurr is on a mission to break down these barriers and bridge the gap between talent and opportunity. We're here to revolutionize the creative landscape.",
  },
]);
</script>
