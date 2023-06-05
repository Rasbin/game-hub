import axios from "axios";

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: '6c3712f73c544b1b8c8a94d5b4e49df9'
  }
})