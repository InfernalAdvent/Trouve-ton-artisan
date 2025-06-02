import axios from 'axios';

const api = axios.create({
baseURL: 'https://trouve-ton-artisan-noko.onrender.com'
});

export default api;
