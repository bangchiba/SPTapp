import axios from 'axios';

const axiosHelper = () => {
  const instance = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL + '/api/v1',
  })
  return instance
}

export default axiosHelper;
