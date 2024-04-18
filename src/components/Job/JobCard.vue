<template>
  <div class="border-[#2440341A] rounded-[11.799px] border-[1.794px] relative p-4 lg:p-8">
    <!-- <RatedBadge class="absolute top-0 text-[#43D0DF] left-0" /> -->
    <div>
      <div
        class="w-full flex lg:flex-row flex-col lg:justify-between justify-center gap-8 items-center"
      >
        <div
          class="flex lg:flex-row flex-col items-center lg:justify-normal justify-center gap-6"
        >
          <div class="relative h-[100.955px] w-[100.955px] rounded-full">
            <img
              loading="lazy"
              :src="props?.talent?.image ? props?.talent?.image : Icon"
              class="h-[100.955px] w-[100.955px] rounded-full"
              alt=""
            />
            <GreenIcon class="absolute top-1 right-3" />
          </div>
          <div class="lg:text-left text-center">
            <p
              class="text-[#000000] text-[20.839px] flex gap-[8px] items-center capitalize font-Satoshi500 leading-[19.739px]"
            >
              {{ props?.talent.first_name }}
              {{ props?.talent.last_name }}
              <span
                v-if="props?.talent?.experience_level"
                class="bg-[#00474F] rounded-full py-[0.5px] capitalize text-[10.519px] text-[#E6F1F3] font-medium px-[19px]"
                >{{ props?.talent?.experience_level }}</span
              >
            </p>
            <p
              class="text-[#00000066] text-[16.699px] leading-[20.739px] font-Satoshi400"
            >
              {{ props?.talent.skill_title }}
            </p>
            <div class="flex items-center gap-2">
              <p class="lg:text-[19.319px] text-[14px] text-[#244034] font-Satoshi500">
                ${{ props?.talent.rate }}/hr
              </p>
              <div class="h-[6px] bg-[#010101e2] w-[6px] rounded-full"></div>
              <p class="text-[#244034] lg:text-[19.319px] text-[14px] font-Satoshi500">
                {{ props?.talent.location }}
              </p>
            </div>
          </div>
        </div>
        <div>
          <div class="flex md:flex-row flex-col lg:items-start items-center gap-4">
            <div class="flex lg:justify-normal gap-4 items-center justify-center">
              <!-- <button><LoveIcon /></button> -->

              <button @click="copyUrl()"><SearchIcon /></button>
            </div>
            <!-- <button class="btn-brand">Message</button> -->
          </div>
        </div>
      </div>
    </div>
    <div
      class="flex flex-row gap-6 w-full overflow-hidden mt-6 hide-scrollbar overflow-x-auto"
    >
      <img
        @click="redirectToPortfolio(props?.talent.first_name, item.id)"
        role="button"
        loading="lazy"
        v-for="(item, index) in props?.talent?.portfolio"
        :key="item"
        :src="item?.featured_image"
        class="h-[140.078px] flex flex-col w-[285.44px] bg-[#EFF6F3] object-cover rounded-lg"
        :alt="`portfolio` + `` + index + 1"
      />
    </div>
    <router-link
      :to="{
        name: 'talent-profile',
        params: {
          id: props?.talent.uniqueId,
          name: `${props?.talent.first_name}-${props?.talent.last_name}`,
        },
      }"
      class="flex items-center gap-4 mt-6"
    >
      <p class="lg:text-[20.699px] text-[14px] font-Satoshi500 text-[#244034]">
        View Profile
      </p>
      <ArrowRight />
    </router-link>
  </div>
</template>
<script setup>
import { onMounted } from "vue";
import RatedBadge from "@/components/icons/ratedBadge.vue";
import GreenIcon from "@/components/icons/greenIcon.vue";
// import LoveIcon from "@/components/icons/loveIcon.vue";
import SearchIcon from "@/components/icons/searchIcon.vue";
import ArrowRight from "@/components/icons/arrowRight.vue";
import Icon from "@/assets/defultAvater.png";
import { useClipboard } from "@vueuse/core";
import { useToast } from "vue-toastification";
import { useRouter } from "vue-router";
const router = useRouter();

const redirectToPortfolio = (name, id) => {
  router.push({
    name: "single-portfolio",
    params: { name: name, id: id },
  });
};

const toast = useToast();

const props = defineProps({
  talent: Object,
});
let source = "";

onMounted(() => {
  source =
    import.meta.env.VITE_LANDING_PAGE +
    `talent/` +
    `${props?.talent?.first_name}-${props?.talent?.last_name}/` +
    props?.talent?.uniqueId;
});

// let source = window.location.href;
const { copy, copied, isSupported } = useClipboard({ source });
const copyUrl = () => {
  if (isSupported) {
    if (copied) {
      copy(source);
      toast.success("Link Copied", {
        timeout: 4000,
      });
    }
  } else {
    toast.error("Your browser does not support Clipboard API", {
      timeout: 4000,
    });
  }
};
</script>
