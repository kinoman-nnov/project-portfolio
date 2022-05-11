import axios from "axios";

axios.defaults.baseURL = "https://webdev-api.loftschool.com";

const token = localStorage.getItem("token");

if (token) {
  axios.defaults.headers['Authorization'] = `Bearer ${token}`;
}

axios.interceptors.response.use(function (response) { // перехватчик axios

  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data

  return response;

}, async function (error) {

  const originalRequest = error.config; // сохранил конфиг запроса с истекшим токеном

  if (error.response.status === 401) {

    const response = await axios.post("/refreshToken");
    const refreshedToken = response.data.token;

    localStorage.setItem("token", refreshedToken);

    axios.defaults.headers["Authorization"] = `Bearer ${refreshedToken}`;
    originalRequest.headers["Authorization"] = `Bearer ${refreshedToken}`;

    return axios(originalRequest);
  }

  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error

  return Promise.reject(error);

});

export default axios;