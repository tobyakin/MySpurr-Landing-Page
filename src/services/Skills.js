import axios from '../axios'
import { catchAxiosError } from './Response'

export const getAllSkills = async () => {
  try {
    let res = await axios.get(`job-title`)
    return res.data
  } catch (error) {
    catchAxiosError(error)
    throw error
  }
}
export const getJobTitle = async () => {
  try {
    let res = await axios.get(`job-title`)
    return res.data
  } catch (error) {
    catchAxiosError(error)
    throw error
  }
}
