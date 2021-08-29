import axiosInstance from "../axiosSetup";

export const getTrendingMovies = async () => {
    try {
        const response = await axiosInstance.get(
            '/trending/movie/day',
        );
        return response.data;
    } catch(err) {
        console.log(err);
        throw err;
    }
};

export const getTrendingShows = async () => {
    try {
        const response = await axiosInstance.get(
            '/trending/tv/day',
        );
        return response.data;
    } catch(err) {
        console.log(err);
        throw err;
    }
};
