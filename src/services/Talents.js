import axios from '../axios'
import { catchAxiosError, catchAxiosSuccess } from './Response'

export const getAllTalents = async (page) => {
  try {
    let res = await axios.get(`talents?page=${page}`)
    catchAxiosSuccess(res.data)
    return res.data;
  } catch (error) {
    catchAxiosError(error)
    throw error
  }
}
export const getOneTalents = async (uuid) => {
  try {
    let res = await axios.get(`talent/${uuid}`)
    catchAxiosSuccess(res.data)
    return res.data;
  } catch (error) {
    catchAxiosError(error)
    throw error
  }
}
export const getSingleTalentPortfolio = async (id) => {
  try {
    let res = await axios.get(`talent/portfolio/single/${id}`)
    // catchAxiosSuccess(res)
    return res.data
  } catch (error) {
    catchAxiosError(error)
    throw error
  }
}
