import React, { useEffect, useState } from 'react';
import { getTrendingMovies, getTrendingShows } from '../../services/trending.service';
import Slider from './childrenComponents/Slider';
import './style.css';

const HomePage = () => {

    const [shows, setShows] = useState([]);
    const [movies, setMovies] = useState([]);

    const fetchTrendingMoviesToday = async () => {
        const data = await getTrendingMovies();
        setMovies(data.results);
    } ;

    const fetchTrendingShowsToday = async () => {
        const data = await getTrendingShows();
        setShows(data.results);
    } ;

    useEffect(() => {
        fetchTrendingMoviesToday();
        fetchTrendingShowsToday();
    }, []);

    const trendingMoviesContent = (
        <Slider title='Movies' content={movies} />
    );

    const trendingShowsContent = (           
        <Slider title='Shows' content={shows} />
    );

    return (
        <div>
            <h2 className='heading local-sub-heading'>
                Trending Today
            </h2>
            {movies && movies.length > 0 ? trendingMoviesContent : null}
            {shows && shows.length > 0 ? trendingShowsContent : null}
        </div>
    );
};

export default HomePage;
