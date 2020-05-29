import axios from 'axios';

const api = axios.create({
   baseURL: 'https://api.coinranking.com/v1/public/'
});

export default api;