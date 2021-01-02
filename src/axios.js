import axios from "axios";

const instance = axios.create({
  baseURL: "https://amazon-cfunc.herokuapp.com",
});

axios.defaults.baseURL = "https://amazon-cfunc.herokuapp.com";

export default instance;
