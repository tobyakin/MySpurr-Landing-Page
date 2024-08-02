import { ref } from 'vue'
import { defineStore } from 'pinia'
import { getAllEvents, getOneEventSlug, getAllRelated, registerEvent } from '@/services/Event'

export const useEventStore = defineStore('event', () => {

    const event = ref([])
    const singleEventSlug = ref({})
    const getRelatedEvent = ref([])

    const registerEventData = ref({
        event_id: '',
        first_name: '',
        last_name: '',
        creative_profession: '',
        email: '',
        phone_number: '',
        description: ''
    });

    const allEvents = async () => {
        try {
            event.value = await getAllEvents()
            return event.value
        } catch (error) {
            console.error(error)
        }
    }

    const handleGetEventDetailsBySlug = async (slug) => {
        try {
            singleEventSlug.value = await getOneEventSlug(slug)
            return singleEventSlug.value
        } catch (error) {
            console.error(error)
        }
    }

    const related = async () => {
        try {
            getRelatedEvent.value = await getAllRelated()
            return getRelatedEvent.value
        } catch (error) {
            console.error(error)
        }
    }

    const handleRegisterEvent = async () => {

        let payload = {
            event_id: registerEventData.value.event_id,
            first_name: registerEventData.value.first_name,
            last_name: registerEventData.value.last_name,
            creative_profession: registerEventData.value.creative_profession,
            email: registerEventData.value.email,
            phone_number: registerEventData.value.phone_number,
            description: registerEventData.value.description,
        }

        try {
            let res = await registerEvent(payload)
            return res
        } catch (error) {
            /**/
        }
    }

    return {
        allEvents,
        handleGetEventDetailsBySlug,
        related,
        handleRegisterEvent,
        registerEventData
    }


})






