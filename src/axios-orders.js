import axios from 'axios';

const  instance = axios.create({

    baseURL: 'https://flashrhymes-b5590.firebaseio.com'
});

export default instance;