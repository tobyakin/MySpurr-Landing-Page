<template>
  <div id="counterSection" class="lg:!my-40 counter !my-20 lg:p-40 p-10 lg:py-20 bg-[#FBFBEE]">
    <div class="flex lg:flex-row flex-col gap-10 items-center lg:justify-between justify-center">
      <div class="text-center h-full">
        <vue3-autocounter
          class="text-[#007582] w-full text-[50px] lg:text-[80.526px] leading-[29px] lg:leading-[120px] font-Satoshi700"
          ref="counter"
          :startAmount="0"
          :endAmount="targetValues.creativeTalents"
          :duration="3"
          prefix=""
          suffix=""
          separator=""
          decimalSeparator=""
          :autoinit="startcount.creativeTalents"
        />

        <!-- <transition name="fade">
          <h2
            key="creative-talents"
            class="text-[#007582] w-full text-[50px] lg:text-[80.526px] leading-[29px] lg:leading-[120px] font-Satoshi700"
          ></h2>
        </transition> -->
        <p class="text-[#007582] font-Satoshi400 text-[18.286px]">creative talents</p>
      </div>
      <div class="text-center">
        <!-- <transition name="fade">
          <h2
            key="payment-processed"
            class="text-[#007582] w-full text-[50px] lg:text-[80.526px] leading-[29px] lg:leading-[120px] font-Satoshi700"
          >
            $4k
          </h2>
        </transition> -->
        <vue3-autocounter
          class="text-[#007582] w-full text-[50px] lg:text-[80.526px] leading-[29px] lg:leading-[120px] font-Satoshi700"
          ref="counter"
          :startAmount="0"
          :endAmount="targetValues.paymentProcessed"
          :duration="3"
          prefix="$"
          suffix="k"
          separator=""
          decimalSeparator=""
          :autoinit="startcount.paymentProcessed"
        />

        <p class="text-[#007582] font-Satoshi400 text-[18.286px]">payment processed</p>
      </div>
      <div class="text-center">
        <!-- <transition name="fade">
          <h2
            key="supported-businesses"
            class="text-[#007582] w-full text-[50px] lg:text-[80.526px] leading-[29px] lg:leading-[120px] font-Satoshi700"
          > -->
        <vue3-autocounter
          class="text-[#007582] w-full text-[50px] lg:text-[80.526px] leading-[29px] lg:leading-[120px] font-Satoshi700"
          ref="counter"
          :startAmount="0"
          :endAmount="targetValues.supportedBusinesses"
          :duration="3"
          prefix=""
          suffix=""
          separator=""
          decimalSeparator=""
          :autoinit="startcount.supportedBusinesses"
        />

        <!-- </h2>
        </transition> -->
        <p class="text-[#007582] font-Satoshi400 text-[18.286px]">supported businesses</p>
      </div>
      <div class="text-center">
        <transition name="fade">
          <h2
            key="available-countries"
            class="text-[#007582] w-full text-[50px] lg:text-[80.526px] leading-[29px] lg:leading-[120px] font-Satoshi700"
          >
            <vue3-autocounter
              ref="counter"
              :startAmount="0"
              :endAmount="targetValues.availableCountries"
              :duration="3"
              prefix=""
              suffix=""
              separator=""
              decimalSeparator=""
              :autoinit="startcount.availableCountries"
            />
          </h2>
        </transition>
        <p class="text-[#007582] font-Satoshi400 text-[18.286px]">available countries</p>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted, watch, reactive } from 'vue'
// import { useScroll } from "@vueuse/core";

// const creativeTalents = ref(0);
// const paymentProcessed = ref(0);
// const supportedBusinesses = ref(0);
// const availableCountries = ref(0);
let counter = ref(null)

const targetValues = {
  creativeTalents: 300,
  paymentProcessed: 4,
  supportedBusinesses: 15,
  availableCountries: 1
}
let startcount = reactive({
  creativeTalents: true,
  paymentProcessed: true,
  supportedBusinesses: true,
  availableCountries: true
})
const onScroll = () => {
  startcount.creativeTalents = true
  startcount.paymentProcessed = true
  startcount.supportedBusinesses = true
  startcount.availableCountries = true
}

onMounted(() => {
  const counterSection = document.querySelector('#counterSection')
  window.addEventListener('scroll', () => {
    if (window.scrollY == counterSection.clientHeight) {
      onScroll()
    }
  })
})
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
