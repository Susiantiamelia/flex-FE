import axios from 'axios';
import react from 'react'

const Api = axios.create({
  baseURL: 'https://ghibliapi.herokuapp.com',
  timeout: 30000,
});


Api.interceptors.response.use(
  (response) => {
    return response;
  },
  function (error) {
    if (error?.message === "Network Error") {
    //   ToastAndroid.show("Server can't be reach",ToastAndroid.LONG,  ToastAndroid.CENTER);
    }
    return Promise.reject(error);
  }


);


export default Api;
