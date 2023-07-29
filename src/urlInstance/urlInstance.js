import axios from 'axios';

// Create an instance of Axios with your desired default configurations
const instance = axios.create({
  baseURL: 'https://ab.teleobi.com', // Replace this with your actual deployed URL
});

export default instance;
