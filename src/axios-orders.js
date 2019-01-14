import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://reactburger-824b8.firebaseio.com/'
});

export default instance;