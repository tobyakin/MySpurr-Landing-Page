<template>
  <div>
    <div
      class="chart_tabs gap-4 mt-6 flex flex-row border-b-[#254035AB] border-b-[0.8px]"
    >
      <a
        class=""
        @click="activateTab('overview')"
        :class="[activetab === 'overview' ? 'active' : '']"
      >
        <slot name="tab1"></slot>
      </a>
      <a
        class=""
        @click="activateTab('jobs_view')"
        :class="[activetab === 'jobs_view' ? 'active' : '']"
      >
        <slot name="tab2"></slot>
      </a>
      <a
        class=""
        @click="activateTab('jobs_applied')"
        :class="[activetab === 'jobs_applied' ? 'active' : '']"
      >
        <slot name="tab3"></slot>
      </a>
    </div>
    <!-- chart_tabs  view  start here -->
    <div class="pt-[20px] px-4 w-full h-full">
      <div v-if="activetab === 'overview'" class="w-full h-full">
        <slot name="view1"></slot>
      </div>
      <div v-if="activetab === 'jobs_view'" class="w-full h-full">
        <slot name="view2"></slot>
      </div>
      <div v-if="activetab === 'jobs_applied'" class="w-full h-full">
        <slot name="view3"></slot>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const activetab = ref("overview");

function activateTab(tab) {
  activetab.value = tab;
}
</script>
<style scoped>
/* Style the chart_tabs */

.chart_tabs {
  text-transform: capitalize !important;
}

.chart_tabs::-webkit-scrollbar {
  width: 0px;
}

.chart_tabs a {
  cursor: pointer;
  transition: color 0.2s;
  @apply p-0 py-2 text-center text-[#244034] !text-[12.554px] font-Satoshi400;
}

.chart_tabs a:last-child {
  border-right: 0px solid #ccc;
}
.chart_tabs a:first-child {
  border-right: 0px solid #ccc;
  @apply ml-4;
}

/* Change background color of chart_tabs on hover */
/* .chart_tabs a:hover {
    color: #484848;
} */

/* Styling for active tab */
.chart_tabs a.active {
  cursor: default;
  @apply border-b-[2.096px] border-b-[#43D0DF];
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
