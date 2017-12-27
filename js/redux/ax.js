import axios from 'axios';

const AUTH_TOKEN = '1ce49250';

const ax = axios.create({
  baseURL: 'https://my.api.mockaroo.com/articles.json',
  timeout: 1000
})

ax.defaults.headers.common['Authorization'] = AUTH_TOKEN

export default ax;
