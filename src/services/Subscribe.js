import axios from '../axios'
import { catchAxiosError, catchAxiosSuccess } from './Response'

export const subscribe = async (payload) => {
  try {
    let res = await axios.post(`subscribe`, payload)
    catchAxiosSuccess(res)
    return res.data
  } catch (error) {
    catchAxiosError(error)
    throw error
  }
}
