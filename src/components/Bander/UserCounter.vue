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
            ${{ formatNumber(paymentProcessed) }}
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
import { ref, watchEffect, nextTick, onMounted } from "vue";

const creativeTalents = ref(0);
const paymentProcessed = ref(0);
const supportedBusinesses = ref(0);
const availableCountries = ref(0);

const targetValues = {
  creativeTalents: 300,
  paymentProcessed: 4855, // Change this to the actual value
  supportedBusinesses: 15,
  availableCountries: 1,
};

// Function to increment a value gradually with animation
const incrementValue = (valueRef, targetValue, intervalDuration) => {
  let current = 0;
  const intervalId = setInterval(() => {
    current += 1; // Increment by 1 for a smoother animation, you can adjust as needed
    if (current >= targetValue) {
      current = targetValue;
      clearInterval(intervalId);
    }
    valueRef.value = current;
  }, intervalDuration);
};
// Function to format a number with k, M, B, etc.
const formatNumber = (number) => {
  if (number >= 1e9) {
    return (number / 1e9).toFixed(1) + "B";
  } else if (number >= 1e6) {
    return (number / 1e6).toFixed(1) + "M";
  } else if (number >= 1e3) {
    return (number / 1e3).toFixed(1) + "k";
  } else {
    return number.toString();
  }
};
watchEffect(() => {
  (async () => {
    await nextTick(); // Wait for the DOM to be fully initialized
    const boundingBox = document.querySelector(".counter").getBoundingClientRect();

    // Check if the element is in the viewport
    if (boundingBox.top < window.innerHeight && boundingBox.bottom >= 0) {
      // Start counting animation when the element is in the viewport
      incrementValue(creativeTalents, targetValues.creativeTalents, 50); // Adjust the interval duration if needed
      incrementValue(paymentProcessed, targetValues.paymentProcessed, 10); // Adjust the interval duration if needed
      incrementValue(supportedBusinesses, targetValues.supportedBusinesses, 50); // Adjust the interval duration if needed
      incrementValue(availableCountries, targetValues.availableCountries, 50); // Adjust the interval duration if needed
    }
  })();
});
onMounted(async () => {
  await nextTick(); // Wait for the DOM to be fully initialized
  const boundingBox = document.querySelector(".counter").getBoundingClientRect();

  // Check if the element is in the viewport
  if (boundingBox.top < window.innerHeight && boundingBox.bottom >= 0) {
    // Start counting animation when the element is in the viewport
    incrementValue(creativeTalents, targetValues.creativeTalents, 50); // Adjust the interval duration if needed
    incrementValue(paymentProcessed, targetValues.paymentProcessed, 10); // Adjust the interval duration if needed
    incrementValue(supportedBusinesses, targetValues.supportedBusinesses, 50); // Adjust the interval duration if needed
    incrementValue(availableCountries, targetValues.availableCountries, 50); // Adjust the interval duration if needed
  }
});
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
