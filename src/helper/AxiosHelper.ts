import axios from 'axios';

const axiosHelper = () => {
  const instance = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL + '/api/v1',
  //   headers: {
  //     'Content-Type' : 'application/json',
  //     'Access-Control-Allow-Headers' : 'Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token',
  //     'Access-Control-Allow-Methods' : 'OPTIONS,POST,GET,PUT',
  //     'Access-Control-Allow-Credentials' : true,
  //     'Access-Control-Allow-Origin' : '*',
  //     'X-Requested-With' : '*'
  // },
  });
  return instance;
};

export default axiosHelper;
