import React, { useEffect, useState } from 'react';
import ContentCard from '../../components/ContentCard';
import HorizontalSlider from '../../components/HorizontalSlider';
import NavBar from '../../components/NavBar';
import { getTrendingMovies, getTrendingShows } from '../../services/trending.service';
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
        <div className='slider'>
            <HorizontalSlider
                perMove={1}
                perPage={5}
                slideWidth='300px'
            >
                {
                    movies.map((show) => {
                        return (
                            <ContentCard key={show.id}/>
                        );
                    })
                }
            </HorizontalSlider>
        </div>
    );

    const trendingShowsContent = (           
        <div className='slider'>
            <HorizontalSlider
                perMove={1}
                perPage={5}
                slideWidth='300px'
            >
                {
                    shows.map((show) => {
                        return (
                            <ContentCard key={show.id}/>
                        );
                    })
                }
            </HorizontalSlider>
        </div>
    );

    return (
        <div>
            <NavBar />
            {movies && movies.length > 0 ? trendingMoviesContent : null}
            {shows && shows.length > 0 ? trendingShowsContent : null}
        </div>
    );
};

export default HomePage;
