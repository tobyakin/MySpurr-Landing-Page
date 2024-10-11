import axios from '../axios'
import { catchAxiosError, catchAxiosSuccess } from './Response'

export const getAllTalents = async (page, filters) => {
  try {
    const params = new URLSearchParams({
      page,
      ...filters
    }).toString();

    let res = await axios.get(`talents?${params}`);
    catchAxiosSuccess(res.data);
    return res.data;
  } catch (error) {
    catchAxiosError(error);
    throw error;
  }
};


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
    return res.data
  } catch (error) {
    catchAxiosError(error)
    throw error
  }
}
