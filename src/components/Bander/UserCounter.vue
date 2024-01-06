<template>
  <div class="lg:my-40 counter my-20 lg:p-40 p-10 lg:py-20 bg-[#FBFBEE]">
    <div
      class="flex lg:flex-row flex-col gap-10 items-center lg:justify-between justify-center"
    >
      <div class="text-center h-full">
        <transition name="fade">
          <h2
            key="creative-talents"
            class="text-[#007582] w-full text-[50px] lg:text-[80.526px] leading-[29px] lg:leading-[120px] font-Satoshi700"
          >
            {{ creativeTalents }}
          </h2>
        </transition>
        <p class="text-[#007582] font-Satoshi400 text-[18.286px]">creative talents</p>
      </div>
      <div class="text-center">
        <transition name="fade">
          <h2
            key="payment-processed"
            class="text-[#007582] w-full text-[50px] lg:text-[80.526px] leading-[29px] lg:leading-[120px] font-Satoshi700"
          >
            $4k
          </h2>
        </transition>
        <p class="text-[#007582] font-Satoshi400 text-[18.286px]">payment processed</p>
      </div>
      <div class="text-center">
        <transition name="fade">
          <h2
            key="supported-businesses"
            class="text-[#007582] w-full text-[50px] lg:text-[80.526px] leading-[29px] lg:leading-[120px] font-Satoshi700"
          >
            {{ supportedBusinesses }}
          </h2>
        </transition>
        <p class="text-[#007582] font-Satoshi400 text-[18.286px]">supported businesses</p>
      </div>
      <div class="text-center">
        <transition name="fade">
          <h2
            key="available-countries"
            class="text-[#007582] w-full text-[50px] lg:text-[80.526px] leading-[29px] lg:leading-[120px] font-Satoshi700"
          >
            {{ availableCountries }}
          </h2>
        </transition>
        <p class="text-[#007582] font-Satoshi400 text-[18.286px]">available countries</p>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { useScroll } from "@vueuse/core";

const creativeTalents = ref(0);
const paymentProcessed = ref(0);
const supportedBusinesses = ref(0);
const availableCountries = ref(0);

const targetValues = {
  creativeTalents: 300,
  paymentProcessed: 4855,
  supportedBusinesses: 15,
  availableCountries: 1,
};

const handleScroll = useScroll((event) => {
  if (event && event.target) {
    const boundingBox = event.target.getBoundingClientRect();

    if (boundingBox.top < window.innerHeight && boundingBox.bottom >= 0) {
      animateValue(creativeTalents, targetValues.creativeTalents);
      animateValue(paymentProcessed, targetValues.paymentProcessed);
      animateValue(supportedBusinesses, targetValues.supportedBusinesses);
      animateValue(availableCountries, targetValues.availableCountries);
      handleScroll.stop(); // Unbind the scroll event after counting starts
    }
  }
});

const animateValue = (valueRef, targetValue) => {
  const start = performance.now();
  const duration = 1000; // Animation duration in milliseconds

  const update = (currentTime) => {
    const progress = (currentTime - start) / duration;
    const current = Math.min(progress * targetValue, targetValue);
    valueRef.value = Math.floor(current);

    if (progress < 1) {
      requestAnimationFrame(update);
    }
  };

  requestAnimationFrame(update);
};
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
