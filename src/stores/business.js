import { ref } from 'vue'
import { defineStore } from 'pinia'
import { 
    getSingleBusiness, 
    getBusinessOpenJobs 
} from '@/services/Business'

export const useBusinessStore = defineStore('business', ()=>{
    const singleBusiness = ref([])
    const businessOpenJobs = ref([])

    const handleSingleBusiness = async (uuid, page) => {
        try {
            singleBusiness.value = await getSingleBusiness(uuid, page)
            return singleBusiness.value
        } catch (error) {
            console.log(error)
        }
    }

    const handleBusinessOpenJobs = async (id) => {
        try {
            businessOpenJobs.value = await getBusinessOpenJobs(id)
            return businessOpenJobs.value
        } catch (error) {
            console.log(error)
        }
    }

    return {
        handleSingleBusiness,
        singleBusiness,
        handleBusinessOpenJobs,
        businessOpenJobs
    }
})