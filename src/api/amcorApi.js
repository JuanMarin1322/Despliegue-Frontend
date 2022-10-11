import axios from "axios";

const amcorApi = axios.create({
    baseURL: 'https://afcali-amcor-backend.herokuapp.com/amcor/api/',
});

amcorApi.interceptors.request.use( config => {

    config.headers = {
        ...config.headers,
        'x-token': localStorage.getItem('token'),
    }

    return config;

})


export default amcorApi;