<template>
  <div class="py-[10rem] tab:py-20 container !px-0">
    <div class="mob3:!w-[90%] mob3:mx-auto pb-[10rem]">
      <h3 class="text-[#00474F] font-EBGaramond500 text-[3.704rem] leading-[3.42rem] mob:text-[3rem] mob:leading-[3.4rem] font-[500]">Transforming how talent are <br class="mob3:hidden"> sourced from emerging markets</h3>
      <div class="mt-[4.37rem] grid grid-cols-customGrid3 gap-[3.32rem]">
        <article 
        class="flex flex-col gap-[0.81rem]"
        v-for="item in perks"
        :key="item.id"
        >
          <div
          >
            <component :is="item.component" />
          </div>
          <h4 class="text-[#00474F] text-[1.1rem]  font-Satoshi500 font-[500]">{{ item.title }}</h4>
          <p class="font-Satoshi400 text-[1rem] leading-[1.88rem]">
            {{ item.body }}
          </p>
        </article>
      </div>
    </div>
    <div>
      <div class="flex flex-col gap-[10rem]">
        <article
          class="grid grid-cols-2 tab:flex lg:gap-24 gap-8 items-center justify-center flex-wrap lg:flex-nowrap lg:flex-row flex-col-reverse rounded-[1.25238rem] bg-[#00474F] overflow-hidden tab:rounded-none !p-0"
        >
          <div class="w-full flex flex-col lg:gap-8 gap-8 px-[5rem] py-[5rem] tab:!w-[85%] tab:mx-auto tab:px-0">
            <p class="text-[#D3DA51] font-Satoshi500 text-[1.378rem] leading-[2.4rem]">Business Solution</p>
            <h3 class="text-[#E6F1F3] text-[4.125rem] leading-[4.4rem] font-EBGaramond500 md:text-[40px] heading lg:leading-[42px] text-3xl font-[500]">Get <span class="text-[#63D8E4]">skilled professionals</span> tailored to your needs
            </h3>
            <p class="text-[#FFF] font-Satoshi400 text-[1.24rem] leading-[2.31rem]">Unlock a full suite of hiring management tool, as well as access to Africa’s top talents</p>
            <div class="mb-4">
              <div class="border w-full bg-white border-white"></div>
              <div class="flex justify-between">
                <article 
                class="flex flex-col"
                v-for="item in stats"
                :key="item"
                >
                  <h3 class="text-[#FFF] text-[2.2055rem] leading-[5.17rem] mob3:leading-[3rem] mob3:text-[1.5rem]">{{ item.stat }}</h3>
                  <p class="text-[#FFF] leading-[1.86rem] text-[1.378rem] font-Satoshi400 mob3:text-[1rem]">{{ item.title }}</p>
                </article>
              </div>
            </div>

            <router-link to="/business">
              <button 
              class="w-[40%] text-white bg-[#43D0DF] rounded-[1.875rem] py-[1rem] text-[1rem] font-Satoshi500 btn-hover-1"
              >Learn More</button>
            </router-link>
          </div>
          <div class="w-full h-full !p-0">
            <img loading="lazy" class="w-full !h-full object-cover block" src="../../assets/img/lp-1.png" />
          </div>
        </article>
        <article
          class="flex grid-cols-2 lg:gap-24 gap-4 items-center justify-center flex-wrap lg:flex-nowrap lg:flex-row flex-col-reverse rounded-[1.25238rem] overflow-hidden tab:!w-[85%] tab:mx-auto"
        >
          <div class="lg:w-1/2 w-full flex flex-col lg:gap-8 py-[5rem] gap-8">
            <h3 class="text-[#254035] text-[4.125rem] leading-[4.4rem] font-EBGaramond500 mob3:text-[2.5rem] mob3:leading-[3rem] md:text-[40px] heading lg:leading-[42px] text-3xl font-[500]">
              Elevate Your Career with MySpurr – <span class="text-[#993939]">where talent meets opportunity.</span>
            </h3>
            <p class="text-[#000000b3] font-Satoshi400 text-[1.26rem] leading-[2.53rem]">We streamline your job search, offering tailored opportunities <br> that match your expertise. </p>
            
            <div class="flex flex-col gap-[2.6rem] lg:gap-4">
              <article 
              class="flex items-center gap-4"
              v-for="item in oppurtunities"
              :key="item"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="19" height="16" viewBox="0 0 19 16" fill="none">
                  <path d="M2.03462 8.00758L8.27006 13.5633C10.0954 10.4768 14.4624 3.76095 17.3279 1.58934" stroke="black" stroke-width="2.25264" stroke-linecap="round"/>
                </svg>
                <h3>{{ item.text }}</h3>
              </article>
            </div>
            <router-link to="/talent">
              <button class=" !mt-6 w-[40%] tab:w-fit text-white bg-[#00474F] rounded-[1.875rem] px-[2.39rem] py-[1rem] text-[1rem] font-Satoshi500 btn-hover-2">Find Opportunities</button>
            </router-link>
          </div>
          <div class="lg:w-1/2 h-[100%]">
            <img loading="lazy" class="w-full" src="../../assets/img/lp-2.png" />
          </div>
        </article>
        <article
          class="flex grid-cols-2 lg:gap-24 gap-4 items-center justify-center flex-wrap lg:flex-nowrap lg:flex-row flex-col-reverse rounded-[1.25238rem] overflow-hidden bg-[#853232] p-[5rem] tab:px-0 tab:rounded-none"
        >
          <div class="lg:w-1/2 w-full flex flex-col lg:gap-4 gap-8 tab:mt-[3.75rem] tab:!w-[85%] tab:mx-auto">
            <p class="text-[#FBFBEE] font-Satoshi500 text-[1.378rem] leading-[2.4rem]">MySpurr Internships</p>
            <h3 class="text-[#fff] text-[4.125rem] leading-[4.4rem] font-EBGaramond600 md:text-[40px] heading lg:leading-[42px] text-3xl">
              Secure opportunities that match your career goals.
            </h3>
            <p class="text-[#fff] font-Satoshi400 text-[1.26rem] leading-[2.53rem]">Designed to connect you with leading businesses across Africa, providing you with hands-on experience, mentorship, and the opportunity to grow your skills in real-world settings. </p>
            <a href="https://www.myspurr.net/internship">
              <button class="mt-6 tab:w-fit w-[40%] text-white bg-[#43D0DF] rounded-[1.875rem] px-[2.39rem] py-[1rem] text-[1rem] font-Satoshi500 btn-hover-1">Apply</button>
            </a>
          </div>
          <div class="lg:w-1/2 h-[100%] max-w-[43.3468rem] tab:!w-[85%] tab:mx-auto">
            <img loading="lazy" class="w-full h-full" src="../../assets/img/lp-3.png" />
          </div>
        </article>
      </div>
    </div>

  </div>
</template>

<script setup>
import { ref } from "vue";
import personSearch from "@/components/icons/personSearch.vue"
import sort from "@/components/icons/sort.vue"
import libraryBooks from "@/components/icons/libraryBooks.vue"
import supportAgent from "@/components/icons/supportAgent.vue"



const perks = [
  {
    id: 1,
    title: 'Access to Curated African Talents',
    body: `We ensure that companies can easily find and hire the right talent, whether for short-term projects or long-term roles.`,
    component: personSearch
  },
  {
    id: 2,
    title: 'Streamlined Hiring Process',
    body: `We handle everything from matching candidates to ensuring seamless communication and secure payments.`,
    component: sort
  },
  {
    id: 3,
    title: 'Commitment to Upskilling',
    body: `By fostering continuous growth and development, we maintain a steady supply of highly-skilled professionals.`,
    component: libraryBooks
  },
  {
    id: 4,
    title: 'End-to-End Support',
    body: `Robust support throughout the hiring process, from vetting candidates to seamless onboarding,`,
    component: supportAgent
  },
]

const stats = [
  {
    stat: '3k+',
    title: 'Worldwide Client'
  },
  {
    stat: '5%',
    title: 'Top Talents '
  },
  {
    stat: '10K',
    title: 'Dollar Payout'
  },

]

const oppurtunities = [
  {
    text: 'Work on impactful projects'
  },
  {
    text: ' Build your portfolio'
  },
  {
    text: 'Get paid securely'
  }
]

</script>

<style scoped>
@media (min-width: 1280px){
  html {
      font-size: 13px !important;
      color: red;
  }
}

</style>
