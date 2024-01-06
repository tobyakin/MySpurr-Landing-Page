<template>
  <div class="border-[#2440341A] rounded-[11.799px] border-[1.794px] relative p-4 lg:p-8">
    <RatedBadge class="absolute top-0 left-0" />
    <div>
      <div
        class="w-full flex lg:flex-row flex-col lg:justify-between justify-center gap-8 items-center"
      >
        <div class="flex lg:flex-row flex-col items-center lg:justify-normal justify-center gap-6">
          <div class="relative h-[100.955px] w-[100.955px] rounded-full">
            <img
              loading="lazy"
              :src="talent?.image ? talent?.image : Icon"
              class="h-[100.955px] w-[100.955px] rounded-full"
              alt=""
            />
            <GreenIcon class="absolute top-1 right-3" />
          </div>
          <div class="lg:text-left text-center">
            <p class="text-[#000000] text-[20.839px] capitalize font-Satoshi500 leading-[19.739px]">
              {{ talent.first_name }}
              {{ talent.last_name }}
            </p>
            <p class="text-[#00000066] text-[16.699px] leading-[20.739px] font-Satoshi400">
              {{ talent.skill_title }}
            </p>
            <div class="flex items-center gap-2">
              <p class="lg:text-[19.319px] text-[14px] text-[#244034] font-Satoshi500">
                ${{ talent.rate }}/hr
              </p>
              <div class="h-[6px] bg-[#010101e2] w-[6px] rounded-full"></div>
              <p class="text-[#244034] lg:text-[19.319px] text-[14px] font-Satoshi500">
                {{ talent.location }}
              </p>
            </div>
          </div>
        </div>
        <div>
          <div class="flex md:flex-row flex-col lg:items-start items-center gap-4">
            <div class="flex lg:justify-normal gap-4 items-center justify-center">
              <button><LoveIcon /></button><button><SearchIcon /></button>
            </div>
            <button class="btn-brand">Message</button>
          </div>
        </div>
      </div>
    </div>
    <div class="flex flex-row gap-6 w-full overflow-hidden mt-6 hide-scrollbar overflow-x-auto">
      <img
        loading="lazy"
        v-for="item in talent?.portfolio"
        :key="item"
        :src="item?.cover_image"
        class="h-[140.078px] flex flex-col w-auto rounded-lg"
        alt=""
      />
    </div>
    <router-link
      :to="{
        name: 'talent-profile',
        params: { id: talent.uniqueId, name: talent.first_name }
      }"
      class="flex items-center gap-4 mt-6"
    >
      <p class="lg:text-[20.699px] text-[14px] font-Satoshi500 text-[#244034]">View Profile</p>
      <ArrowRight />
    </router-link>
  </div>
</template>
<script setup>
import RatedBadge from '@/components/icons/ratedBadge.vue'
import GreenIcon from '@/components/icons/greenIcon.vue'
import LoveIcon from '@/components/icons/loveIcon.vue'
import SearchIcon from '@/components/icons/searchIcon.vue'
import SampleOne from '@/assets/img/sampleOne.webp'
import SampleTwo from '@/assets/img/sampleTwo.webp'
import SampleThree from '@/assets/img/sampleThree.webp'
import SampleFour from '@/assets/img/sampleFour.webp'
import ArrowRight from '@/components/icons/arrowRight.vue'
import Icon from '@/assets/defultAvater.png'

const Porfolio = [
  { img: SampleOne },
  { img: SampleTwo },
  { img: SampleThree },
  { img: SampleFour },
  { img: SampleThree },
  { img: SampleFour },
  { img: SampleThree },
  { img: SampleFour }
]
defineProps({
  talent: Object
})
</script>
