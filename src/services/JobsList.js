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
