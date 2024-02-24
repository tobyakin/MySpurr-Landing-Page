<template>
  <div>
    <div class="jobs_tabs flex gap-12 py-4 mt-6">
      <a
        class=""
        @click="activateTab('all_jobs')"
        :class="[activetab === 'all_jobs' ? 'active' : '']"
      >
        <slot name="tab1"></slot>
      </a>
      <a
        class=""
        @click="activateTab('branding_jobs')"
        :class="[activetab === 'branding_jobs' ? 'active' : '']"
      >
        <slot name="tab2"></slot>
      </a>
    </div>
    <!-- jobs_tabs  view  start here -->
    <div class="pt-12">
      <div v-if="activetab === 'all_jobs'" class="">
        <slot name="view1"></slot>
      </div>
      <div v-if="activetab === 'branding_jobs'" class="">
        <slot name="view2"></slot>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const activetab = ref("all_jobs");

function activateTab(tab) {
  activetab.value = tab;
}
</script>
<style scoped>
/* Style the jobs_tabs */

.jobs_tabs {
  padding-bottom: 0 !important;
  scroll-padding-bottom: 0;
  text-transform: capitalize !important;
  @apply text-[14px] leading-[18.2px] font-Satoshi500 bg-none;
}

.jobs_tabs::-webkit-scrollbar {
  width: 0px;
}

.jobs_tabs a {
  cursor: pointer;
  transition: color 0.2s;
  @apply p-0 py-2 text-center lg:text-[36.637px] text-[18px] text-[#244034] font-Satoshi400;
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
