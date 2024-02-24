import { ref } from 'vue'
import { defineStore } from 'pinia'
import { getAllJobs, viewJobsDetailsBySlug } from '@/services/JobsList'

export const useJobsStore = defineStore('jobs', () => {
  const Job = ref([])
    const JobDetails = ref({})

  const allJobs = async () => {
    try {
      Job.value = await getAllJobs()
      return Job.value
    } catch (error) {
      console.error(error)
    }
  }
    const handleGetJobDetailsBySlug = async (slug) => {
        try {
          JobDetails.value = await viewJobsDetailsBySlug(slug)
          return JobDetails.value
        } catch (error) {
          console.error(error)
        }
      }

  return {
    Job,
    allJobs,
    JobDetails,
    handleGetJobDetailsBySlug
  }
})
