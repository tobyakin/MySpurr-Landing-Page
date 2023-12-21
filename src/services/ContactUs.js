import axios from '../axios'
import { catchAxiosError, catchAxiosSuccess } from './Response'

export const sendMessage = async (payload) => {
  try {
    let res = await axios.post(`contact-us`, payload)
    catchAxiosSuccess(res)
    return res.data
  } catch (error) {
    catchAxiosError(error)
    throw error
  }
}
