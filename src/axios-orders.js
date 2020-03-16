import axios from "axios";

const instance = axios.create({
  baseURL: "https://my-burger-app-react-5c423.firebaseio.com/"
});

export default instance;
