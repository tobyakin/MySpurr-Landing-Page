<template>
 <section class="container lg:!px-0">
  <div class="flex gap-[2.04rem] lg:flex-row flex-col">
    <div class="w-full flex-auto lg:w-[40%] lg:max-w-[30.47rem] py-[7rem] tab:py-4">
      <h3 class="text-[#254035] text-[4.125rem] leading-[4rem] font-EBGaramond600 font-[500] mob3:text-[2.5rem] mob3:leading-[3rem] md:text-[40px] heading lg:leading-[42px] text-3xl">
        Hear directly from our satisfied clients and partners
      </h3>
    </div>
    <div class="lg:w-[67%] relative py-[3rem] flex-1">
      <div class="bg-[#ECFAFC] absolute h-full w-[90%] top-0 left-[50%] translate-x-[-50%] !z-[-1]"></div>
      <div 
      class="!z-[99] flex overflow-x-auto gap-[3rem] hide-scrollbar px-4"
      ref="slider"
      @mouseenter="pauseScroll"
      @mouseleave="resumeScroll"
      >
        <article 
        class="flex flex-col p-[2rem] bg-white shrink-0 lg:basis-[70%] basis-[50%] msgTab:basis-full rounded-[0.63869rem] shadow-xl shadow-[#00000033]"
        v-for="item in comments"
        :key="item.id"
        >
          <div class="flex flex-col gap-[0.5rem] mb-[2rem]">
            <h3 class="text-[#2F929C] font-Satoshi500 text-[1.25rem] leading-[1.85rem] tab:text-[1rem]">{{ item.header }}</h3>
            <starsIcon />
          </div>
          <div>
            <h3 class="text-[#000000] font-Satoshi400 text-[1.1rem] leading-[1.5rem] !mb-[2rem] tab:text-[1rem]">
              {{ item.body }}
            </h3>
            <div class="w-full bg-[#000000] border border-[#000000] !mb-[2rem]"></div>
            <div class="flex justify-between items-center">
              <div class="text-[1.149rem] leading-[1.79rem] tab:text-[1rem]">
                <h3 class="text-[#000000] font-Satoshi500">{{ item.author }}</h3>
                <p class="text-[#00000080] font-Satoshi400">{{ item.location }}</p>
              </div>
              <div class="mob:w-[0.73rem] mob:h-[0.73rem] w-[2rem] h-[2rem]">
                <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 42 40" fill="none">
                  <path d="M17.4973 10.033C13.8432 18.4768 6.16975 17.7426 2.50939 13.1118C-1.15096 8.48095 3.42922 2.50699 7.44866 1.77274C11.4681 1.0385 17.8627 3.79192 17.8516 13.0004C17.8367 25.2686 5.1505 37.0226 3.75643 38.0547" stroke="#D0E3D9" stroke-width="2.04378" stroke-linecap="round"/>
                  <path d="M40.2453 10.033C36.5913 18.4768 28.9178 17.7426 25.2574 13.1118C21.5971 8.48095 26.1773 2.50699 30.1967 1.77274C34.2162 1.0385 40.6107 3.79192 40.5996 13.0004C40.5848 25.2686 27.8986 37.0226 26.5045 38.0547" stroke="#D0E3D9" stroke-width="2.04378" stroke-linecap="round"/>
                </svg>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  </div>
 </section>
</template>

<script setup>
import { onMounted, onBeforeUnmount, ref } from 'vue';
import starsIcon from '../icons/starsIcon.vue';
const slider = ref(null);
let scrollAnimationFrame = null; 
let scrollAmount = 2; 
let isPaused = false; 
const buffer = 2;

const startScroll = () => {
  const scrollContent = () => {
    if (!isPaused) {
      if (slider.value.scrollLeft + slider.value.clientWidth + buffer >= slider.value.scrollWidth) {
        slider.value.scrollLeft = 0;
      } else {
        slider.value.scrollLeft += scrollAmount;
      }
    }
    scrollAnimationFrame = requestAnimationFrame(scrollContent);
  };
  scrollAnimationFrame = requestAnimationFrame(scrollContent);
};

const pauseScroll = () => {
  isPaused = true;
};

const resumeScroll = () => {
  isPaused = false;
};

const handleResize = () => {
  if (slider.value.scrollLeft + slider.value.clientWidth + buffer >= slider.value.scrollWidth) {
    slider.value.scrollLeft = 0;
  }
};

onMounted(() => {
  startScroll();
  window.addEventListener('resize', handleResize);
});

onBeforeUnmount(() => {
  cancelAnimationFrame(scrollAnimationFrame);
  window.removeEventListener('resize', handleResize);
});

  

  const comments = [
    {
      id: 1,
      header: 'Highly recommended',
      body: `“This is absolutely unique and clean design that I'm looking for. Also, the code quality is great!”`,
      author: 'Zubayer Al Hasan',
      location: 'Dhaka'
    },
    {
      id: 2,
      header: 'Nice work.',
      body: `“MySpurr connected us with top-tier African talent, transforming our creative projects. The streamlined hiring process and personalized support made it seamless”`,
      author: 'Abubarkar Sani',
      location: 'Abuja'
    },
    {
      id: 3,
      header: 'A game changer',
      body: `“The quality of talent we found through MySpurr has been outstanding. Their platform made it easy to find, hire, and collaborate with skilled professionals”`,
      author: 'Victoria Nwosi',
      location: 'United Kingdom'
    },
    {
      id: 4,
      header: 'It’s a partnership',
      body: `“MySpurr's support team is exceptional. They guided us every step of the way, ensuring we found the perfect fit for our needs. It’s more than just a platform”`,
      author: 'Emmanuel Alison',
      location: 'Alaska'
    },
    {
      id: 1,
      header: 'Highly recommended',
      body: `“MySpurr connected us with top-tier African talent, transforming our creative projects. The streamlined hiring process and personalized support made it seamless”`,
      author: 'Zubayer Al Hasan',
      location: 'Dhaka'
    },
    {
      id: 2,
      header: 'Nice work.',
      body: `“The quality of talent we found through MySpurr has been outstanding. Their platform made it easy to find, hire, and collaborate with skilled professionals”`,
      author: 'Rashed ka.',
      location: 'Alaska'
    },
    {
      id: 3,
      header: 'A game changer',
      body: `“The quality of talent we found through MySpurr has been outstanding. Their platform made it easy to find, hire, and collaborate with skilled professionals”`,
      author: 'Victoria Nwosi',
      location: 'United Kingdom'
    },
    {
      id: 4,
      header: 'It’s a partnership',
      body: `“MySpurr's support team is exceptional. They guided us every step of the way, ensuring we found the perfect fit for our needs. It’s more than just a platform”`,
      author: 'Emmanuel Alison',
      location: 'Alaska'
    },
  ]
</script>

<style lang="scss" scoped>

</style>