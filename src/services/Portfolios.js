import axios from '../axios'
import { catchAxiosError, catchAxiosSuccess } from './Response'

export const getAllPortfolio = async () => {
  try {
    let res = await axios.get(`all-portfolios`)
    // catchAxiosSuccess(res)
    return res.data;
  } catch (error) {
    catchAxiosError(error)
    throw error
  }
}
