import React, { useEffect } from 'react';
import HorizontalSlider from '../components/HorizontalSlider';
import NavBar from '../components/NavBar';
import { getTrendingMovies, getTrendingShows } from '../services/trending.service';

const HomePage = () => {
    const fetchTrendingMoviesToday = async () => {
        const data = await getTrendingMovies();
        console.log(data);
    } ;

    const fetchTrendingShowsToday = async () => {
        const data = await getTrendingShows();
        console.log(data);
    } ;

    useEffect(() => {
        fetchTrendingMoviesToday();
        fetchTrendingShowsToday();
    }, []);

    return (
        <div>
            <NavBar />
            {/* <h2>
                <h3>
                    Trending  
                </h3>
            </h2> */}
            <HorizontalSlider />
        </div>
    );
};

export default HomePage;
