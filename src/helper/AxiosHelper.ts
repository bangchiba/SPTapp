import axios from 'axios';

const axiosHelper = () => {
  const instance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL
  })
  return instance
}

export default axiosHelper;
