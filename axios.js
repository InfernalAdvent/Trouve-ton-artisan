import axios from 'axios'

const api = axios.create({
baseURL: 'http://localhost:3000/api'
});

export default api;


const renderStars = (note) => {
  const fullStars = Math.floor(note);
  const emptyStars = 5 - fullStars;
  return '★'.repeat(fullStars) + '☆'.repeat(emptyStars);
};