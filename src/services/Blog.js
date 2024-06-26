import axios from '../axios'
import { catchAxiosError, catchAxiosSuccess } from './Response'


export const getAllBlogs = async (page) => {
    try {
      let res = await axios.get(`blog/all?page=${page}`)
      catchAxiosSuccess(res.data)
      return res.data;
    } catch (error) {
      catchAxiosError(error)
      throw error
    }
}

export const getOneBlogSlug = async (slug) => {
    try {
      let res = await axios.get(`blog/${slug}`)
      catchAxiosSuccess(res.data)
      return res.data;
    } catch (error) {
      catchAxiosError(error)
      throw error
    }
}

export const getAllCategory = async () => {
    try {
      let res = await axios.get(`blog/category`)
      catchAxiosSuccess(res.data)
      return res.data;
    } catch (error) {
      catchAxiosError(error)
      throw error
    }
}

export const getAllRecent = async () => {
  try {
    let res = await axios.get(`blog/recent`)
    catchAxiosSuccess(res.data)
    return res.data;
  } catch (error) {
    catchAxiosError(error)
    throw error
  }
}

