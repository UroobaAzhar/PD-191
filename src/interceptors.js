import axios from "axios";

const authFetch = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

// we can also do this:
// const axiosInstance = axios.create();

authFetch.interceptors.request.use(
  (request) => {
    request.headers["Accept"] = "application/json";
    console.log("request sent");
    return request;
  },
  (error) => {
    console.error("interceptor caught:", error);
    return Promise.reject(error);
  }
);
authFetch.interceptors.response.use(
  (response) => {
    console.log("response recieved");
    return response;
  },
  (error) => {
    console.error("interceptor caught:", error);
    if (error.response.status === 404) {
      console.log("NOT FOUND");
    }
    return Promise.reject(error);
  }
);

export default authFetch;
