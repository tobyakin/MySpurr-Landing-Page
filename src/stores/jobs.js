import { ref } from 'vue'
import { defineStore } from 'pinia'
import { getAllJobs, viewJobsDetailsBySlug, getExternalJobs, viewExternalJobsDetailsBySlug } from '@/services/JobsList'

export const useJobsStore = defineStore('jobs', () => {
  const Job = ref([])
  const JobDetails = ref({})
  const externalJobs = ref([])
  const externalJobDetails = ref({})

  const allJobs = async (page) => {
    try {
      Job.value = await getAllJobs(page)
      return Job.value
    } catch (error) {
      console.error(error)
    }
  }

  const allExternalJobs = async (page) => {
    try {
      externalJobs.value = await getExternalJobs(page)
      return externalJobs.value
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

  const handleGetExternalJobDetailsBySlug = async (slug) => {
    try {
      externalJobDetails.value = await viewExternalJobsDetailsBySlug(slug)
      return externalJobDetails.value
    } catch (error) {
      console.error(error)
    }
  }

  const abbr = (num, digits) => {
    let si = [
      { value: 1, symbol: '' },
      { value: 1e3, symbol: 'K' },
      { value: 1e6, symbol: 'M' },
      { value: 1e9, symbol: 'G' },
      { value: 1e12, symbol: 'T' },
      { value: 1e15, symbol: 'P' },
      { value: 1e18, symbol: 'E' }
    ]
    let rx = /\.0+$|(\.[0-9]*[1-9])0+$/
    let i
    for (i = si.length - 1; i > 0; i--) {
      if (num >= si[i].value) {
        break
      }
    }
    return (num / si[i].value).toFixed(digits).replace(rx, '$1') + si[i].symbol
  }
  return {
    Job,
    allJobs,
    JobDetails,
    handleGetJobDetailsBySlug,
    abbr,
    allExternalJobs,
    handleGetExternalJobDetailsBySlug,
    externalJobs
  }
})
