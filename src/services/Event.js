import axios from '../axios'
import { catchAxiosError, catchAxiosSuccess } from './Response'

export const getAllEvents = async () => {
    try {
      let res = await axios.get('noauth/event/all')
      catchAxiosSuccess(res.data)
      return res.data;
    } catch (error) {
      catchAxiosError(error)
      throw error
    }
}

export const getOneEventSlug = async (slug) => {
    try {
      let res = await axios.get(`noauth/event/${slug}`)
      catchAxiosSuccess(res.data)
      return res.data;
    } catch (error) {
      catchAxiosError(error)
      throw error
    }
}

export const getAllRelated = async () => {
    try {
      let res = await axios.get(`noauth/event/related`)
      catchAxiosSuccess(res.data)
      return res.data;
    } catch (error) {
      catchAxiosError(error)
      throw error
    }
}
  
export const registerEvent = async (payload) => {
    try {
      let res = await axios.post(`noauth/event/register`, payload, {
      })
      catchAxiosSuccess(res)
      return res.data
    } catch (error) {
      catchAxiosError(error)
      throw error
    }
}
