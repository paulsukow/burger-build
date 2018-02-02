import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-f738e.firebaseio.com/'
});

export default instance;