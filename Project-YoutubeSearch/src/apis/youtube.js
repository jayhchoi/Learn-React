import axios from "axios";

const KEY = "AIzaSyA7m_LCdJRmTk9RAIP3U1T7pcVu_eLtIdo";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
});
