import axios from '../axios'
import { catchAxiosError, catchAxiosSuccess } from './Response'

export const getAllJobs = async () => {
  try {
    let res = await axios.get(`list-jobs`)
    catchAxiosSuccess(res.data)
    return res.data
  } catch (error) {
    catchAxiosError(error)
    throw error
  }
}
export const viewJobsDetailsBySlug = async (slug) => {
  try {
    let res = await axios.get(`list-jobs/${slug}`, {})
    return res.data
  } catch (error) {
    catchAxiosError(error)
    throw error
  }
}
