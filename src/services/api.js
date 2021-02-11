import axios from 'axios';

const api = axios.create({
  baseURL: 'https://desolate-brushlands-20405.herokuapp.com/',
});

export default api;
