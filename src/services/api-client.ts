import axios from 'axios';

export default axios.create({
  baseURL: 'https://snappfood.ir/mobile/v3/'
});
export const CanceledError = axios.CanceledError;
