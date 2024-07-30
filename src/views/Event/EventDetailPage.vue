<script setup>
import Navbar from '@/components/Navbar/Navbar.vue'
import Footer from '@/components/Footer.vue'
import { onMounted, reactive, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import calendarIcon from '@/components/icons/eventCalendarIcon.vue'
import locationIcon from '@/components/icons/eventLocationIcon.vue'
import timerIcon from '@/components/icons/eventTimerIcon.vue'
import rightArrowM from '@/components/icons/rightArrowM.vue'
import Share from '@/components/UI/SocialShare.vue'
import googleCalendarIcon from '@/components/icons/googleCalendarIcon.vue'
import outlookCalendarIcon from '@/components/icons/outlookCalendarIcon.vue'
import Loader from '@/components/UI/Loader/Loader.vue'
import { useEventStore } from '../../stores/event'
import { storeToRefs } from 'pinia'
import SpinnerComponent from '@/components/spinner/SpinnerComponent.vue'

const showCalendarOptions = ref(false)
const calendarOption = ref()
const route = useRoute()
const router = useRouter()
const eventStore = useEventStore()
const { registerEventData } = storeToRefs(eventStore);
const singleEvent = ref({})
const loading = ref(false)
const relatedEvents = ref([])
const dashboardUrl = import.meta.env.VITE_DASHBOARD_HOST;
const apiLoading = ref(false)

const states = reactive({
    'first_name': '',
    'last_name': '',
    'profession': '',
    'email': '',
    'phone_number': '',
    'message': '',
})

const parseDateToUTC = (dateStr, timeStr) => {
    const [day, monthName, year] = dateStr.split(' ');
    const month = new Date(Date.parse(monthName + " 1, 2024")).getMonth();

    let [time, modifier] = timeStr.split(' ');
    let [hours, minutes] = time.split(':');
    hours = parseInt(hours);
    minutes = parseInt(minutes);

    if (modifier === 'PM' && hours !== 12) {
        hours += 12;
    } else if (modifier === 'AM' && hours === 12) {
        hours = 0;
    }

    const localDate = new Date(year, month, day, hours, minutes);
    const utcDate = new Date(localDate.getTime() - (0 * 60 * 60 * 1000));

    return utcDate;
}

const formatDateToUTC = (date) => {
    const pad = (num) => num.toString().padStart(2, '0')

    const year = date.getUTCFullYear()
    const month = pad(date.getUTCMonth() + 1)
    const day = pad(date.getUTCDate())
    const hours = pad(date.getUTCHours())
    const minutes = pad(date.getUTCMinutes())
    const seconds = pad(date.getUTCSeconds())

    return `${year}${month}${day}T${hours}${minutes}${seconds}Z`
}

const formatDateToOutlook = (date) => {
    const pad = (num) => num.toString().padStart(2, '0')

    const year = date.getUTCFullYear()
    const month = pad(date.getUTCMonth() + 1)
    const day = pad(date.getUTCDate())
    const hours = pad(date.getUTCHours())

    return `${year}-${month}-${day}T${hours}`
}

const addToCalendar = () => {
    //   showCalendarOptions.value = true
    const startDate = parseDateToUTC(singleEvent.value.event_date, singleEvent.value.event_time);

    if (isNaN(startDate.getTime())) {
        return;
    }

    const endDate = new Date(startDate);
    endDate.setHours(endDate.getHours() + 2);

    if (isNaN(endDate.getTime())) {
        return;
    }

    const googleCalendarUrl = `https://calendar.google.com/calendar/r/eventedit?text=${encodeURIComponent(
        singleEvent.value.title
    )}&dates=${formatDateToUTC(startDate)}/${formatDateToUTC(endDate)}&details=${encodeURIComponent(
        singleEvent.value.content
    )}&location=${encodeURIComponent(singleEvent.value.event_link)}`;

    const outlookCalendarUrl = `https://outlook.live.com/owa/?path=/calendar/action/compose&subject=${encodeURIComponent(
        singleEvent.value.title
    )}&startdt=${encodeURIComponent(formatDateToOutlook(startDate))}&enddt=${encodeURIComponent(
        formatDateToOutlook(endDate)
    )}&body=${encodeURIComponent(singleEvent.value.content)}&location=${encodeURIComponent(
        singleEvent.value.event_link
    )}`

    if (calendarOption.value === 'google') {
        window.open(googleCalendarUrl, '_blank')
    } else if (calendarOption.value === 'outlook') {
        window.open(outlookCalendarUrl, '_blank')
    }
}

const showRegistrationCompletedNotification = ref(false)
const eventRegistered = ref(false)
const showOptions = ref(false)
const showSocials = ref(false)

const fetchSingleEvent = async () => {
    loading.value = true

    try {
        const res = await eventStore.handleGetEventDetailsBySlug(route.params.slug)
        if (res && res.data) {
            singleEvent.value = res.data
        } else {
            console.error('No data returned from API')
        }
    } catch (error) {
        console.error('Error fetching event details:', error)
    } finally {
        loading.value = false
    }
}

const fetchRelatedEvents = async () => {
    loading.value = true

    try {
        const res = await eventStore.related()
        if (res && res.data) {
            relatedEvents.value = res.data
        } else {
            console.error('No data returned from API')
        }
    } catch (error) {
        console.error('Error fetching event details:', error)
    } finally {
        loading.value = false
    }
}

onMounted(() => {
    fetchSingleEvent()
    fetchRelatedEvents()
})

watch(
    () => route.params.slug,
    async (newSlug, oldSlug) => {
        if (newSlug !== oldSlug) {
            await fetchSingleEvent()
            await fetchRelatedEvents()
        }
    }
)

const handleRegisterNotification = async () => {
    
    registerEventData.value.event_id = singleEvent.value.id ?? '';
    registerEventData.value.first_name = states.first_name ?? '';
    registerEventData.value.last_name = states.last_name ?? '';
    registerEventData.value.creative_profession = states.profession ?? '';
    registerEventData.value.email = states.email ?? '';
    registerEventData.value.phone_number = states.phone_number ?? '';
    registerEventData.value.description = states.message ?? '';

    apiLoading.value = true;
    try {
        const res = await eventStore.handleRegisterEvent();
        if (res.status === true) {
            showRegistrationCompletedNotification.value = true
        }
        return res;
    } catch (error) {
        console.log(error);
    } finally {
        apiLoading.value = false;
    }
}

function handleAddtoGoogleCalendar() {
    calendarOption.value = 'google'
    addToCalendar()
    showCalendarOptions.value = false
    showOptions.value = false
    handleCloseNotification()
}

function handleAddtoOutlookCalendar() {
    calendarOption.value = 'outlook'
    addToCalendar()
    showCalendarOptions.value = false
    showOptions.value = false
    handleCloseNotification()
}

function handleShowOptions() {
    showCalendarOptions.value = true
}

function handleCloseNotification() {
    showRegistrationCompletedNotification.value = false
    showCalendarOptions.value = false
    eventRegistered.value = true
}

const handleViewMore = () => {
    router.push({ name: 'events' })
}
</script>

<template>
    <Navbar />
    <section class="event-detail">
        <Loader v-if="loading" />
        <section class="w-[80%] eventBreak:w-[90%] mx-auto mt-[4rem]" v-else>
            <article class="flex justify-between flex-col md:flex-row gap-[4.65rem] msgTab:gap-[2rem] items-end">
                <div class="flex flex-col gap-4 w-full md:w-3/6">
                    <span
                        class="bg-[#00474F] rounded-[0.86rem] text-[#fff] font-Satoshi700 text-[0.59rem] leading-[0.39rem] py-[0.7rem] eventBreak1:text-[0.4rem] eventBreak1:w-[50%] px-[1.47] w-[40%] text-center uppercase tracking-[0.38rem] eventBreak1:tracking-[0.15rem] eventBreak1:mb-4">online
                        event</span>
                    <h3
                        class="text-[#000] font-Satoshi700 text-[2rem] eventBreak1:text-[1rem] eventBreak1:leading-[1.2rem] leading-[2.26463rem]">
                        {{ singleEvent.title }}
                    </h3>
                    <div class="md:hidden rounded-[2.1875rem] h-full min-h-[300px] msgMob:min-h-[auto] w-full md:w-3/6">
                        <div class="h-full rounded-[2.1875rem] overflow-hidden msgMob:rounded-[0.5rem]">
                            <img :src="singleEvent.featured_graphics" alt="event image"
                            class="object-cover w-full h-full min-h-[300px] msgMob:object-contain msgMob:min-h-[auto]"/>
                        </div>
                    </div>
                    <div
                        class="eventBreak1:mt-4 bg-[#ECFAFC] rounded-[20px] eventBreak1:px-4 px-[2.2rem] py-[1.5rem] eventBreak1:py-[0.7rem] flex gap-10 justify-between w-full w-full-auto">
                        <div class="schedule flex flex-col gap-4 eventBreak1:gap-[0.5rem]">
                            <div>
                                <label for="date">Date</label>
                                <h3 id="date" class="">{{ singleEvent.event_date }}</h3>
                            </div>
                            <div>
                                <label for="">Time</label>
                                <h3>{{ singleEvent.event_time }}</h3>
                            </div>
                        </div>
                        <div class="schedule flex flex-col gap-4 eventBreak1:gap-[0.5rem]">
                            <div>
                                <label for="">Location</label>
                                <h3>{{ singleEvent.address }}</h3>
                            </div>
                            <div>
                                <label for="">Time-zone</label>
                                <h3>{{ singleEvent.timezone }}</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="hidden md:block rounded-[2.1875rem] h-full min-h-[300px] msgMob:min-h-[auto] w-full md:w-3/6">
                        <div class="h-full rounded-[2.1875rem] overflow-hidden msgMob:rounded-[0.5rem]">
                            <img :src="singleEvent.featured_graphics" alt="event image"
                            class="object-cover w-full h-full min-h-[300px] msgMob:object-contain msgMob:min-h-[auto]"/>
                        </div>
                    </div>
            </article>
            <div class="mt-[8rem] flex justify-between msgTab:flex-col">
                <div class="w-[50%] msgTab:w-full">
                    <article class="detail-container md:mt-0">
                        <div>
                            <h3 class="font-Satoshi700 text-[#000] text-[1.8rem] leading-4">About the Event</h3>
                            <div class="about mt-6 font-Satoshi400 text-[#000] leading-[1.5rem] text-4 eventBreak1:text-[0.8rem] eventBreak1:leading-[1.3rem]"
                            v-html="singleEvent.content">
                            </div>
                        </div>
                    </article>
                    <article class="my-[3rem] msgMob:w-ful eventBreak1:my-[2rem]">
                        <div class="mb-[3.5rem]">
                            <h3
                                class="font-Satoshi700 text-[#000] text-[1.5rem] leading-6 eventBreak1:text-[1rem] eventBreak1:leading-4">
                                Speaker:
                            </h3>
                            <div class="mt-6 eventBreak1:mt-4 flex items-center gap-6">
                                <div class="w-[4rem] h-[4rem] rounded-[100%] overflow-hidden">
                                    <img :src="singleEvent.featured_speaker" alt="" class="w-full h-full" />
                                </div>
                                <div>
                                    <h3 class="font-Satoshi700 text-[#000] text-4 leading-4 eventBreak1:text-[0.9rem]">
                                        {{ singleEvent.speaker }}
                                    </h3>
                                    <p class="text-sm font-normal">{{ singleEvent.speaker_title }}</p>
                                    <div class="mt-3 cursor-pointer">
                                        <a :href="singleEvent.linkedln" target="_blank" class="mt-[0.2rem]">
                                            <img src="@/assets/img/LinkedIn.png" alt="">
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h3 class="font-Satoshi700 text-[#000] text-[1rem] leading-4">
                                About {{ singleEvent.speaker }}
                            </h3>
                            <p
                                class="mt-6 font-Satoshi400 text-[#000] leading-[1.5rem] text-4 eventBreak1:text-[0.8rem] eventBreak1:leading-[1.3rem]">
                                {{ singleEvent.speaker_bio }}
                            </p>
                        </div>
                    </article>
                    <article class="msgMob:w-full">
                        <h3 class="font-Satoshi700 text-[#000] text-[1rem] leading-4">Sponsors</h3>
                        <div v-if="singleEvent.brand_partners && singleEvent.brand_partners.length === 0">
                            <p class="pt-3">No sponsor available.</p>
                        </div>
                        <div class="flex gap-[1.4rem] flex-wrap mt-[1.7rem] msgMob:justify-center">
                            <div class="w-[4rem] h-[4rem] overflow-hidden" v-for="image in singleEvent.brand_partners"
                                :key="image">
                                <img :src="image.image" alt="" class="object-fit" />
                            </div>
                        </div>
                    </article>
                </div>
                <div class="w-[35%] msgTab:w-full msgTab:mt-[4rem]">
                    <div class="bg-[#007582] rounded-[1.4rem] py-[1.76rem] eventBreak1:py-4 eventBreak1:rounded-[0.5rem] w-full"
                        :class="{ registered: eventRegistered }">
                        <div class="w-full grid place-items-center "
                        v-if="!eventRegistered"
                        >
                            <h3
                                class="text-[#fff] font-Satoshi500 text-[1.8rem] eventBreak1:text-[1rem] mt-4">
                                Register
                            </h3>
                            <div class="w-full">
                                <form @submit.prevent="handleRegisterNotification" action="" class="w-[82%] mx-auto mt-[2.02rem]">
                                    <div class="form_center flex flex-col gap-[1.5rem]">
                                        <div class="inputField w-full">
                                            <input type="text" placeholder="First Name" v-model="states.first_name" class="rounded-[1.0625rem] border-2 border-[#fff] px-[1.13rem] py-[0.9rem] text-[#fff] font-Satoshi500 leading-[0.887rem] text-[1rem] w-full bg-inherit"
                                            >
                                        </div>
                                        <div class="inputField w-full">
                                            <input type="text" placeholder="Last Name" v-model="states.last_name" class="rounded-[1.0625rem] border-2 border-[#fff] px-[1.13rem] py-[0.9rem] text-[#fff] font-Satoshi500 leading-[0.887rem] text-[1rem] w-full bg-inherit"
                                            >
                                        </div>
                                        <div class="inputField w-full">
                                            <input type="text" placeholder="Creative Profession" v-model="states.profession" class="rounded-[1.0625rem] border-2 border-[#fff] px-[1.13rem] py-[0.9rem] text-[#fff] font-Satoshi500 leading-[0.887rem] text-[1rem] w-full bg-inherit"
                                            >
                                        </div>
                                        <div class="inputField w-full">
                                            <input type="text" placeholder="Email Address" v-model="states.email" class="rounded-[1.0625rem] border-2 border-[#fff] px-[1.13rem] py-[0.9rem] text-[#fff] font-Satoshi500 leading-[0.887rem] text-[1rem] w-full bg-inherit"
                                            >
                                        </div>
                                        <div class="inputField w-full">
                                            <input type="text" placeholder="Phone Number" v-model="states.phone_number" class="rounded-[1.0625rem] border-2 border-[#fff] px-[1.13rem] py-[0.9rem] text-[#fff] font-Satoshi500 leading-[0.887rem] text-[1rem] w-full bg-inherit"
                                            >
                                        </div>
                                        <div class="inputField w-full">
                                            <textarea v-model="states.message" id="" placeholder="Do you have any specific questions you’d want the speaker to address?" class="rounded-[1.0625rem] border-2 border-[#fff] px-[1.13rem] py-[0.8rem] text-[#fff] font-Satoshi500 leading-[0.887rem] text-[1rem] w-full bg-inherit h-[9rem]" ></textarea>
                                        </div>
                                    </div>
                                    <div class="w-[70%] mx-auto mb-[2rem]">
                                        <button
                                            class="mt-[2.2rem] bg-[#ECFAFC] rounded-[1.6rem] w-full mx-auto text-center py-[1rem] text-[#000] font-Satoshi500 leading-[0.8rem] text-[1rem] eventBreak1:text-[0.7rem]"
                                            >
                                            <div class="flex items-center justify-center">
                                                <span v-if="apiLoading"><SpinnerComponent /></span>
                                                <span v-else>Register for this Event</span>
                                            </div>
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div class="w-full text-center" v-if="eventRegistered">
                            <h3
                                class="text-[#000] font-Satoshi500 leading-[1.5rem] text-[1.5rem] eventBreak1:text-[1rem] !mb-[0.5rem]">
                                Thanks for registering, {{ states.first_name }}
                            </h3>
                            <p class="eventBreak1:text-[0.7rem] text-[1rem]">We recommend you:</p>
                            <div class="relative mt-[0.6rem] recommendations">
                                <div class="cursor-pointer flex items-center gap-[0.7rem] w-[90%] mx-auto">
                                    <svg width="39" height="39" viewBox="0 0 39 39" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="19.0771" cy="19.6328" r="19" fill="#92E4EC" />
                                        <path d="M18.9571 15.3128H15.7571V13.0128H21.4171V27.6328H18.9571V15.3128Z"
                                            fill="#007582" />
                                    </svg>
                                    <div
                                        class="text-center rounded-[0.4rem] text-[#000] border border-[#2C4C50] w-[100%] eventBreak1:w-full py-[0.5rem] gap-4">
                                        <a 
                                        :href="dashboardUrl + 'signup'"
                                        target="_blank"
                                        role="button"
                                        >
                                            <h3>Create your MySpurr account </h3>
                                        </a>
                                    </div>
                                </div>
                                <div class="cursor-pointer flex items-center gap-[0.7rem] w-[90%] mx-auto"
                                    @click="showOptions = !showOptions">
                                    <svg width="39" height="39" viewBox="0 0 39 39" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="19.0771" cy="19.6328" r="19" fill="#92E4EC" />
                                        <path
                                            d="M24.1371 27.6128L13.9971 27.6328V25.7128L18.7771 21.6728C20.7571 19.9928 21.4171 19.0328 21.4171 17.6328C21.4171 15.9728 20.5171 15.0328 18.9771 15.0328C17.3771 15.0328 16.3771 16.1528 16.3571 18.0328H13.8171C13.8371 14.8328 15.8771 12.7528 18.9771 12.7528C22.0971 12.7528 24.0371 14.5328 24.0371 17.4928C24.0371 19.5328 22.9171 21.0728 20.6971 22.9728L18.0571 25.2328H24.1371V27.6128Z"
                                            fill="#007582" />
                                    </svg>
                                    <div
                                        class="flex items-center rounded-[0.4rem] bg-[#43D0DF] text-[#fff] w-[100%] eventBreak1:w-full py-[0.5rem] justify-center">
                                        <calendarIcon class="!text-white" />
                                        <div class="flex items-center gap-[0.5rem]">
                                            <h3 class="">Add to Calendar</h3>
                                            <rightArrowM class="!text-white rotate-90" />
                                        </div>
                                    </div>
                                </div>
                                <div class="w-full h-auto">
                                    <ul class="w-[90%] mx-auto h-auto calendarIcons mt-4 transitionItem"
                                        :class="{ hideOptions: !showOptions }">
                                        <li class="flex items-center justify-center h-[fit] border border-[#007582] rounded-[0.5rem] py-[0.2rem] gap-4 text-[#000] font-Satoshi500 cursor-pointer"
                                            @click="handleAddtoGoogleCalendar">
                                            <googleCalendarIcon />
                                            <h3>Google</h3>
                                        </li>
                                        <li class="flex items-center justify-center h-[fit] border border-[#007582] rounded-[0.5rem] py-[0.2rem] gap-4 text-[#000] font-Satoshi500 mt-[0.5rem] cursor-pointer"
                                            @click="handleAddtoOutlookCalendar">
                                            <outlookCalendarIcon />
                                            <h3>Outlook</h3>
                                        </li>
                                    </ul>
                                </div>
                                
                                <div class="share w-[90%] ml-auto h-auto mr-4 calendarIcons mt-[0.5rem] transitionItem"
                                    :class="{ hideOptions: !showSocials }">
                                    <Share class="!justify-center !gap-6" />
                                </div>
                            </div>
                            <!-- <div class="mt-4">
                                <h3
                                    class="font-Satoshi400 leading-4 text-[#000] eventBreak1:text-[0.7rem] eventBreak1:text-center">
                                    No longer attending?
                                    <span class="!text-[#853232] pl-[0.5rem] cursor-pointer"
                                        @click="handleCancelRegistration">
                                        Cancel Registration</span>
                                </h3>
                            </div> -->
                        </div>
                    </div>
                </div>
            </div>
            <article class="w-[95%] msgMob:w-full mx-auto mt-[3rem]">
                <div class="text-center">
                    <h3 class="font-Satoshi700 text-[#000] leading-5">Related Events</h3>
                </div>
                <div class="my-10">
                    <div class="flex gap-3 flex-col md:flex-row">
                        <div class="mb-4" v-for="event in relatedEvents" :key="event.id">
                            <div class="w-full md:w-[320px]">
                                <div class="rounded-t-[1rem] h-[200px]">
                                    <img :src="event.featured_graphics" alt=""
                                    class="w-full h-full object-cover rounded-t-[1rem]" />
                                </div>
                                <div class="px-[0.7rem] py-[0.5rem] bg-[#ECFAFC] rounded-b-[1rem]">
                                    <h1 class="text-[#000] text-[0.8rem] font-Satoshi700 leading-[1rem] mb-4">
                                    {{ event.title }}
                                    </h1>
                                    <div class="event_details flex flex-col gap-[0.29rem] my-[0.5rem]">
                                    <div class="flex items-center gap-[0.63rem]">
                                        <locationIcon />
                                        <p>{{ event.address }}</p>
                                    </div>
                                    <div class="flex items-center gap-[0.63rem]">
                                        <calendarIcon />
                                        <p>{{ event.event_date }}</p>
                                    </div>
                                    <div class="flex items-center gap-[0.63rem]">
                                        <timerIcon />
                                        <p>{{ event.event_time }}</p>
                                    </div>
                                    </div>
                                    <router-link :to="{ name: 'event-detail', params: { slug: event.slug } }"
                                    class="event_btn">
                                    <div class="w-[100%] flex items-center justify-between px-4 py-[0.7rem] bg-[#43D0DF] rounded-[0.46rem] btn-hover-1 my-3">
                                        <h3 class="reg font-Satoshi700 text-[#000] text-[0.865rem] leading-4 eventBreak1:text-[0.7rem]">
                                        Register
                                        </h3>
                                        <rightArrowM class="reg" />
                                    </div>
                                    </router-link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="grid place-items-center !my-[5.78rem]">
                    <button
                        class="bg-[#31795A] rounded-[1.7rem] py-[1rem] font-Satoshi500 leading-[0.7rem] text-[#fff] w-[30%] btn-hover-2 eventBreak1:text-[0.8rem] msgMob:w-[50%] msgMob:text-[0.7rem]"
                        @click="handleViewMore">
                        View More Events
                    </button>
                </div>
            </article>
            <div class="fixed top-0 left-0 bg-[#87878780] w-full h-[100vh] z-[999] grid place-items-center"
                v-if="showRegistrationCompletedNotification">
                <div class="bg-white rounded-[1rem] p-[2rem] pt-4 text-center msgMob:w-[90%]">
                    <div class="w-full flex justify-end cursor-pointer" @click="handleCloseNotification">
                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="24" viewBox="0 0 19 24"
                            fill="none">
                            <path
                                d="M18.9534 2.83711L17.08 0.46875L9.6532 9.8582L2.22635 0.46875L0.353027 2.83711L7.77988 12.2266L0.353027 21.616L2.22635 23.9844L9.6532 14.5949L17.08 23.9844L18.9534 21.616L11.5265 12.2266L18.9534 2.83711Z"
                                fill="#323232" />
                        </svg>
                    </div>
                    <div class="flex flex-col items-center">
                        <div class="w-[100px] mb-6">
                            <img src="../../assets/Logo.png" alt="" />
                        </div>
                        <div class="w-[85%] msgMob:w-full mb-[0.5rem]">
                            <h3 class="text-[#011B1F] font-Satoshi400 text-[1rem] leading-4 msgMob:text-[0.8rem]">
                                You are successfully registered for:
                            </h3>
                            <p
                                class="text-[#6BA336] font-Satoshi700 text-[1rem] leading-4 mt-[0.5rem] msgMob:text-[0.8rem]">
                                {{ singleEvent.title }}
                            </p>
                        </div>
                        <div class="shareEvent flex items-center gap-[0.7rem]">
                            <h3 class="font-Satoshi400 leading-4 text-4 msgMob:text-[0.8rem]">Share event:</h3>
                            <Share />
                        </div>
                        <div class="w-full">
                            <button
                                class="bg-[#007582] rounded-[0.5rem] w-[50%] mx-auto py-[0.5rem] mt-4 text-[#fff] text-[1rem] msgMob:text-[0.8rem] btn-hover-1"
                                @click="handleShowOptions">
                                Add to calendar
                            </button>
                            <ul class="w-[50%] mx-auto calendarIcons mt-4 transitionItem"
                                v-if="showCalendarOptions">
                                <li class="flex items-center justify-center h-[fit] border border-[#007582] rounded-[0.5rem] py-[0.2rem] gap-4 text-[#000] font-Satoshi500 cursor-pointer"
                                    @click="handleAddtoGoogleCalendar">
                                    <googleCalendarIcon />
                                    <h3>Google</h3>
                                </li>
                                <li class="flex items-center justify-center h-[fit] border border-[#007582] rounded-[0.5rem] py-[0.2rem] gap-4 text-[#000] font-Satoshi500 mt-[0.5rem] cursor-pointer"
                                    @click="handleAddtoOutlookCalendar">
                                    <outlookCalendarIcon />
                                    <h3>Outlook</h3>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </section>
    <Footer />
</template>

<style scoped>

</style>
