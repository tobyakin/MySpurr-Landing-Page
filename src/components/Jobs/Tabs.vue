<template>
  <div>
    <div class="jobs_tabs flex gap-12 py-4">
      <a
        class=""
        @click="activateTab('myspurr_jobs')"
        :class="[activetab === 'myspurr_jobs' ? 'active' : '']"
      >
        <slot name="tab1"></slot>
      </a>
      <a
        class=""
        @click="activateTab('featured_jobs')"
        :class="[activetab === 'featured_jobs' ? 'active' : '']"
      >
        <slot name="tab2"></slot>
      </a>
      <a
        class=""
        @click="activateTab('myspurr_gigs')"
        :class="[activetab === 'myspurr_gigs' ? 'active' : '']"
      >
        <slot name="tab3"></slot>
      </a>
    </div>
    <!-- jobs_tabs  view  start here -->
    <div class="pt-12">
      <div v-if="activetab === 'myspurr_jobs'" class="">
        <slot name="view1"></slot>
      </div>
      <div v-if="activetab === 'featured_jobs'" class="">
        <slot name="view2"></slot>
      </div>
      <div v-if="activetab === 'myspurr_gigs'" class="">
        <slot name="view3"></slot>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const emit = defineEmits(['currentTab'])

const activetab = ref("myspurr_jobs");

function activateTab(tab) {
  activetab.value = tab;
  emit("currentTab", tab)
}
</script>
<style scoped>
/* Style the jobs_tabs */

.jobs_tabs {
  padding-bottom: 0 !important;
  scroll-padding-bottom: 0;
  text-transform: capitalize !important;
  @apply text-[0.88rem] leading-[1.14rem] font-Satoshi500 bg-none;
}

.jobs_tabs::-webkit-scrollbar {
  width: 0px;
}

.jobs_tabs a {
  cursor: pointer;
  transition: color 0.2s;
  @apply p-0 py-2 text-center lg:text-[1.19rem] text-[1.13rem] text-[#244034] font-Satoshi400;
}

.jobs_tabs a:last-child {
  border-right: 0px solid #ccc;
}

/* Change background color of jobs_tabs on hover */
/* .jobs_tabs a:hover {
    color: #484848;
} */

/* Styling for active tab */
.jobs_tabs a.active {
  cursor: default;
  font-weight: 400;
  @apply border-b-2 border-b-[#244034];
}

/* Style the tab content */

.tabcontent .map {
  height: 173px;
  width: 220px;
  background: #d3eafb;
  margin-left: 60px;
  border: 1px solid #ccc;
  border-radius: 10px;
}

.tabcontent {
  padding-top: 10px;
}
</style>
