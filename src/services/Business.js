import axios from '../axios'
import { catchAxiosError, catchAxiosSuccess } from './Response'

export const getSingleBusiness = async (uuid)=>{
    try {
        let res = await axios.get(`business/${uuid}`)
        catchAxiosSuccess(res.data)
        return res.data;
    } catch (error) {
        catchAxiosError(error)
        throw error
    }
}

export const getBusinessOpenJobs = async (id)=>{
    try {
        let res = await axios.get(`business/${id}/open-jobs`)
        catchAxiosSuccess(res.data)
        return res.data;
    } catch (error) {
        catchAxiosError(error)
        throw error
    }
}