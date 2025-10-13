<template>
   <article class="flex flex-col h-full">
        <div class="rounded-t-[1.13825rem]">
            <img :src="props.event?.featured_graphics" alt="" class="w-full object-cover rounded-t-[1rem]">
        </div>
        <div class="flex-grow px-[1.24rem] pb-[2rem] pt-4 bg-[#ECFAFC] rounded-b-[1.32038rem] flex flex-col justify-between">
            <h1 class="text-[#000] leading-[1.097rem] font-SegeoUI font-[600] mb-[0.98rem] tab:text-[0.865rem]">{{ props.event?.title }}</h1>
            <div class="event_details flex flex-col gap-[0.39rem] my-4">
                <div class="flex items-center gap-[0.63rem]">
                    <locationIcon />
                    <span class="text-[0.592rem] leading-[0.911rem] text-[#000] font-SegeoUI capitalize">{{ props.event?.address }}</span>
                </div>
                <div class="flex items-center gap-[0.63rem]">
                    <calendarIcon />
                    <span class="text-[0.592rem] leading-[0.911rem] text-[#000] font-SegeoUI capitalize">{{ props.event?.event_date }}</span>
                </div>
                <div class="flex items-center gap-[0.63rem]">
                    <timerIcon />
                    <span class="text-[0.592rem] leading-[0.911rem] text-[#000] font-SegeoUI capitalize">{{ props.event?.event_time }}</span>
                </div>
            </div>
            <a 
            :href="props.event?.youtube_link" 
            v-if="isPastDate(props.event?.event_date, props.event?.event_time)" 
            target="_blank"
            >
                <div 
                    class="event_btn"
                    :class="{ 'opacity-50 cursor-not-allowed': !(props.event?.youtube_link?.length > 0) }"
                    :style="{ pointerEvents: !(props.event?.youtube_link?.length > 0) ? 'none' : 'auto' }"
                >
                    <div class="w-[100%] flex items-center justify-between px-4 py-[0.7rem] bg-[#43D0DF] rounded-[0.46rem] btn-hover-1 cursor-pointer">
                    <h3 
                        class="reg font-Satoshi700 text-[#000] text-[0.865rem] leading-4 tab:text-[0.7rem]"
                    >
                        <span v-if="props.event?.youtube_link?.length > 0">Watch Replay</span>
                        <span v-else>Replay Coming Soon</span>
                    </h3>
                    <rightArrowM v-if="props.event?.youtube_link?.length > 0" class="reg"/>
                    </div>
                </div>
            </a>
            <router-link :to="{name: 'event-detail', params: {slug: props.event?.slug}}" v-else>
                <div class="event_btn">
                    <div class="w-[100%] flex items-center justify-between px-4 py-[0.7rem] bg-[#43D0DF] rounded-[0.46rem] btn-hover-1 cursor-pointer">
                        <h3 class="reg font-Satoshi700 text-[#000] text-[0.865rem] leading-4 tab:text-[0.7rem]">Register</h3>
                        <rightArrowM class="reg"/>
                    </div>
                </div>
            </router-link>
        </div>
    </article>
</template>

<script setup>
import calendarIcon from "@/components/icons/eventCalendarIcon.vue"
import rightArrowM from "@/components/icons/rightArrowM.vue";
import locationIcon from "@/components/icons/eventLocationIcon.vue"
import timerIcon from "@/components/icons/eventTimerIcon.vue"

const props = defineProps(['event'])

const isPastDate = (date, time) => {
    // Remove 'th', 'rd', 'nd', 'st' from the date string for proper parsing
    const formattedTime = time.replace(/([AP]M)$/, ' $1');
    const dateString = `${date}, ${formattedTime}`
    const formattedDateString = dateString.replace(/(\d+)(th|rd|nd|st)/, '$1');
    
    // // Parse the date string into a Date object
    const givenDate = new Date(formattedDateString);
        
    // // Get the current date and time
    const currentDate = new Date();

    // // Compare the given date and current date (including time)
    return givenDate.getTime() < currentDate.getTime();
};


</script>

<style lang="scss" scoped>

</style>