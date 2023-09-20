import axios from "axios";

export default axios.create({
    baseURL: 'http://localhost:3000'
})
export const isCansel = (value: any) => axios.isCancel(value)
export const CanceledError = axios.CanceledError