import axios from 'axios';

const config = {
  BASE_PATH: 'http://localhost:5000/api',
};

const Axios = axios.create({
  baseURL: config.BASE_PATH,
  headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
});

export { config, Axios };
