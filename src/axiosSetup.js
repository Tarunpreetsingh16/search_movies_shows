import axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    params: { 
        api_key: process.env.NODE_ENV === 'development' 
            ? null
            :process.env.REACT_APP_TMDB_API_KEY,
    }
});


export default axiosInstance;
