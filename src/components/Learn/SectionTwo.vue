<template>
  <SampleOne
    :heading="HeadingOne"
    :list="section4List1"
    :image="ImageOne"
    :yellowwithHiddenButton="true"
    :registerUrl="registerUrl"
    :hideText="true"
    :yellow="true"
  />
  <SampleOne
    :heading="HeadingTwo"
    :list="section4List2"
    :yellowwithHiddenButton="true"
    :image="ImageThree"
    :registerUrl="registerUrl"
    :hideText="true"
    :yellow="true"
    :reverse="true"
  />
  <SampleOne
    :heading="HeadingThree"
    :list="section4List3"
    :image="ImageTwo"
    :yellowwithHiddenButton="true"
    :registerUrl="registerUrl"
    :hideText="true"
    :yellow="true"
  />
  <div class="flex justify-center items-center pb-[6rem]">
    <a role="button" class="btn-brand font-Satoshi400"> Start Free Trial </a>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import ImageOne from '@/assets/img/skill.webp'
import ImageTwo from '@/assets/img/career.webp'
import ImageThree from '@/assets/img/expert.webp'
import SampleOne from '@/components/genericComponents/sampleOne.vue'
const HeadingOne = ` Tailored  <span class="font-Satoshi700">Skill</span>    <br class="md:block hidden" /> Enhancement`
const HeadingTwo = ` <span class="font-Satoshi700">Expert-Led  </span>  <br class="md:block hidden" /> Guidance`
const HeadingThree = ` <span class="font-Satoshi700">Career </span>   <br class="md:block hidden" /> Empowerment`

const section4List1 = ref([
  {
    text: 'Get a personalized learning experience designed for the unique needs as a creative talent. '
  },
  {
    text: 'Our courses are carefully curated to address industry-specific challenges, ensuring you acquire skills that are directly relevant to your creative journey.'
  }
])
const section4List2 = ref([
  {
    text: 'Learn from the best in the industry. Take courses led by seasoned professionals and experts who understand the intricacies of the African creative landscape. '
  },
  {
    text: 'Benefit from their insights, practical knowledge, and real-world experiences to accelerate your growth.'
  }
])

const section4List3 = ref([
  {
    text: 'Beyond just learning, we equip you with the tools to shape a successful creative career. '
  },
  {
    text: 'Gain access to resources that help you navigate the industry, build a strong portfolio, and connect with opportunities. Your journey from creative talent to industry trailblazer starts here.'
  }
])

// const registerUrl = import.meta.env.VITE_DASHBOARD_BASEURL;
</script>
