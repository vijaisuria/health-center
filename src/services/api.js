import axios from "axios";

const api = axios.create({
  baseURL: "https://helth-center-api.onrender.com/api",
  //baseURL: "http://localhost:5000/api",
});

// Add a response interceptor to handle server errors
// api.interceptors.response.use(
//   (response) => response,
//   (error) => {
//     if (error.response && error.response.status === 500) {
//       // Redirect to 500 server error page
//       window.location.replace("/error");
//       // Alternatively, you can use your preferred routing method (e.g., React Router)
//       // history.push("/500-error");
//     }
//     return Promise.reject(error);
//   }
// );

export default api;
