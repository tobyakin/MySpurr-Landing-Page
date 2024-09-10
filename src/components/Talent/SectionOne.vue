<template>
  <div
    class="min-h-[630px] flex items-center background py-20"
    :style="{ backgroundImage: `url(${image})` }"
  >
    <div class="flex container gap-8 py-8 lg:flex-row flex-col-reverse justify-center">
      <div class="lg:py-12 py-4">
        <h1
          class="text-[4rem] font-normal !mb-6 text-white leading-[4.3125rem] font-EBGaramond500 text-center eventBreak:text-[2.5rem] eventBreak:leading-[2.8rem]"
        >
        Find, hire and work with <span class="text-[#63D8E4]">African Talents</span> in Brand Marketing, Design and Technology
        </h1>
        <p class="text-[1.25rem] text-[#ffffffbf] font-Satoshi400 !my-8 md:!my-6 text-center eventBreak:text-[1rem]">
          Our clients are startups, SMEs, and large corporations seeking diverse, skilled talent from emerging markets.
        </p>
        <div class="flex gap-[6.8rem] bg-white py-4 px-[3.49rem] rounded-[0.625rem] w-[70%] lg:w-[90%] break1:w-full mx-auto items-center shadow-customShadow search_field eventBreak:gap-6 msgTab:px-4">
          <div class="flex w-full msgMob:justify-center msgMob:gap items-center">
            <div class="flex flex-col w-full text-left">
              <Label class="font-Satoshi400 text-[#9098AD] !text-[0.87rem] eventBreak:!text-[0.7rem] leading-[1.75rem] !mb-2 eventBreak:!mb-0 mob:text-[0.22475rem]">Job Categories</Label>
              <div
                class="w-full mt-0 font-light font-Satoshi400 bg-white !p-0 opacity-[0.8029] rounded-[6.828px] text-[12.68px] !border-none mob:!py-[0.75rem]"
              >
                <select
                  v-model="category"
                  placeholder="Candidate Type"
                  :bordered="false"
                  :show-arrow="false"
                  class="w-full !outline-none !px-0 cursor-pointer text-[#000000] font-Satoshi500 text-[1rem] leading-[1.75rem] eventBreak:!text-[0.75rem]"
                  show-search
                 
                >
                  <option disabled value="Job Categories">Job Categories</option>
                  <option v-for="item in CandidateType" :key="item" :value="item">
                    {{ item }}
                  </option>
                </select>
              </div>
            </div>
            <div class="slash mx-[2rem] w-[0.0625rem] !h-full bg-[#E1E1E1] min-h-[3.9rem]"></div>
            <div class="flex flex-col w-full text-left">
              <Label class="font-Satoshi400 text-[#9098AD] !text-[0.87rem] eventBreak:!text-[0.7rem] leading-[1.75rem] !mb-2 eventBreak:!mb-0 mob:text-[0.22475rem]">Location</Label>
              <div
                class="w-full mt-0 font-light font-Satoshi400 bg-white !p-0 opacity-[0.8029] rounded-[6.828px] text-[12.68px] !border-none mob:!py-[0.75rem]"
              >
                <select
                  v-model="location"
                  placeholder="Location"
                  :bordered="false"
                  :show-arrow="false"
                  class="w-full !outline-none !px-0 cursor-pointer text-[#000000] font-Satoshi500 text-[1rem] leading-[1.75rem] eventBreak:!text-[0.75rem]"
                  show-search
                 
                >
                  <option disabled value="Select Location">Select Location</option>
                  <option v-for="state in states?.data" :key="state.id" :value="state.name">
                    {{ state.name }}
                  </option>
                </select>
              </div>
            </div>
            <div class="slash mx-[2rem] w-[0.0625rem] h-full bg-[#E1E1E1] eventBreak:!hidden"></div>
            <FormGroup
            v-model="keyword"
            class="eventBreak:!hidden"
              labelClasses="font-Satoshi400 text-[#9098AD] !text-[0.87rem] eventBreak:!text-[0.7rem] leading-[1.75rem] !mb-2 eventBreak:!mb-0 mob:text-[0.22475rem]"
              label="Keyword or Title"
              name="Name"
              placeholder="Design, Branding"
              type="text"
              inputClasses="w-full !outline-none !px-0 cursor-pointer text-[#000000] font-Satoshi500 text-[1rem] mob2:!border-none border leading-[1.75rem] eventBreak:!text-[0.75rem]"
            ></FormGroup>
          </div>
          <button
            class="bg-[#43D0DF] text-white h-fit w-fit text-center rounded-full font-Satoshi500 text-[0.975rem] uppercase items-center btn-hover-1 py-4 eventBreak:px-[1.5rem] eventBreak:w-[50%] px-[2.76rem] eventBreak:!text-[0.7rem] mob:px-[0.69rem] mob:!text-[0.25rem]"
            @click="handleSearch"
          >
            Search
          </button>
          
          
        </div>
      </div>
      <!-- <div class="flex justify-center items-center gap-4">
        <p class="font-Satoshi700 text-[20px] text-white">How to use MySpurr</p>
        <button
          class="bg-[#EDF0B8] rounded-full p-4 h-[76.477px] w-[76.477px] items-center justify-center flex"
        >
          <PlayButton />
        </button>
      </div> -->
    </div>
  </div>
</template>
<script setup>
import FormGroup from "@/components/Form/Input/FormGroup.vue";
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import { useSkillsStore } from "@/stores/skills";
import { storeToRefs } from "pinia";
// import PlayButton from "@/components/icons/playButton.vue";
const image = 'https://ik.imagekit.io/ldtt3hq8g2/Landing%20Page/talent-bg.png?updatedAt=1725963397227';
const dashboardUrl = import.meta.env.VITE_DASHBOARD;
const CandidateType = ["Freelance", "Full-time", "Part-time", "Internship", "Contract"];
const router = useRouter()
const category = ref('Job Categories')
const location = ref('Select Location')
const keyword = ref('')

const handleSearch = () => {
  router.push({
    name: 'hire-talent',
    query: {
      category: category.value,
      location: location.value,
      keyword: keyword.value
    }
  });
};

const skillsStore = useSkillsStore();
const { states } = storeToRefs(skillsStore);

onMounted(async()=>{
  let payload = "NG"
  await skillsStore.handleGetStates(payload);
})
</script>

<style scoped>
.background {
  background-size: cover;
  background-position: center +20%;
  background-blend-mode: overlay;
  background: linear-gradient(
      from 270deg at 50% 50%,
      rgba(15, 14, 14, 0.28) 184.15632963180542deg,
      rgba(13, 11, 11, 0.33) 270.5531358718872deg,
      rgba(18, 16, 16, 0.32) 353.79907608032227deg
    ),
    lightgray 50%;
}
</style>
