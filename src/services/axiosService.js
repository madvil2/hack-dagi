// import axios from "axios";
// import humps from "humps";

// export const axiosInstance = axios.create({
//   baseURL: "https://api.safe.madvil2.me/api/v1/me",
//   withCredentials: true,
//   headers: {
//     "Content-Type": "application/json",
//   },
// });

// axiosInstance.interceptors.request.use((config) => {
//   if (config.data) {
//     config.data = humps.decamelizeKeys(config.data);
//   }
//   if (config.params) {
//     config.params = humps.decamelizeKeys(config.params);
//   }
//   return config;
// });
