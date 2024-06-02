import axios from '../axios'
import { catchAxiosError } from './Response'

export const visitor = async () => {
  try {
    await axios.post(`visitors`)
  } catch (error) {
    catchAxiosError(error)
    throw error
  }
}