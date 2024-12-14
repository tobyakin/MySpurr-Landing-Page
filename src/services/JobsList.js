import axios from '../axios'
import { catchAxiosError, catchAxiosSuccess } from './Response'

export const getAllJobs = async (page) => {
  try {
    let res = await axios.get(`list-jobs?page=${page}`)
    catchAxiosSuccess(res.data)
    return res.data
  } catch (error) {
    catchAxiosError(error)
    throw error
  }
}

export const viewJobsDetailsBySlug = async (slug) => {
  try {
    let res = await axios.get(`list-jobs/${slug}`)
    return res.data
  } catch (error) {
    catchAxiosError(error)
    throw error
  }
}

export const getExternalJobs = async (page)=>{
  try {
    let res = await axios.get(`external-job?page=${page}`)
    catchAxiosSuccess(res.data)
    return res.data
  } catch (error) {
    catchAxiosError(error)
    throw error
  }
}

export const viewExternalJobsDetailsBySlug = async (slug) => {
  try {
    let res = await axios.get(`external-job/${slug}`)
    return res.data
  } catch (error) {
    catchAxiosError(error)
    throw error
  }
}


