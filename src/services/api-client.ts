import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "042311e95b7c4275af5a3477ce04167a",
  },
});
