import axios from "axios";

axios.defaults.baseURL = "https://webdev-api.loftschool.com";

const token = localStorage.getItem("token");

if (token) {
  axios.defaults.headers['Authorization'] = `Bearer ${token}`;
}

axios.interceptors.response.use(function (response) {

  if ((response.config.url.includes('login')) ||
    (response.config.url.includes('categories')) ||
    (response.config.url.includes('skills'))) {

  }
  
  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data
  return response;
}, function (error) { 
  if (error.response.status >= 400) {
    if (error.response.data.error === "token_expired") {
      (async () => {
        const response = await axios.post("/refreshToken", token);

        const newToken = response.data.token;
        localStorage.setItem("token", newToken);
        axios.defaults.headers["Authorization"] = `Bearer ${newToken}`;
        console.log("newToken",newToken);
      })();
    }
  }
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  return Promise.reject(error);
});

export default axios;