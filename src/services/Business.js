import axios from '../axios'
import { catchAxiosError, catchAxiosSuccess } from './Response'

export const getSingleBusiness = async (uuid, page)=>{
    try {
        let res = await axios.get(`business/${uuid}?page=${page}`)
        catchAxiosSuccess(res.data)
        return res.data;
    } catch (error) {
        catchAxiosError(error)
        throw error
    }
}

export const getBusinessOpenJobs = async (id, page)=>{
    try {
        let res = await axios.get(`business/${id}/open-jobs?page=${page}`)
        catchAxiosSuccess(res.data)
        return res.data;
    } catch (error) {
        catchAxiosError(error)
        throw error
    }
}