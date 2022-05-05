 import axios from "axios";

axios.defaults.baseURL = "https://webdev-api.loftschool.com";

const token = localStorage.getItem("token");

if (token) {
  axios.defaults.headers['Authorization'] = `Bearer ${token}`;
}

axios.interceptors.response.use(function (response) {
  
  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data

  return response;

}, async function (error) { 

  const originalRequest = error.config;

  if (error.response.status === 401) {
    
    const response = await axios.post("/refreshToken");
    const newToken = response.data.token;

    localStorage.setItem("token", newToken);
    
    axios.defaults.headers["Authorization"] = `Bearer ${newToken}`;
    originalRequest.headers["Authorization"] = `Bearer ${newToken}`;
    
    return axios(originalRequest);
  }

  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error

  return Promise.reject(error);
  
});

export default axios;