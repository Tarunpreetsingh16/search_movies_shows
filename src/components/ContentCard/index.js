import React from 'react';
import './style.css';
import star from '../../assets/img/star.png';

const ContentCard = ({details}) => {
    const title = details.media_type === 'tv' 
        ? details.original_name
        : details.original_title;
    return (
        <div className='content-container'>
            <div className='picture-container'>
                <img
                    src={`http://image.tmdb.org/t/p/w185/${details.poster_path}`}
                    alt={title}
                    className='poster'
                />
                <div className='picture-overlay'>
                    <p>
                        {details.overview}
                    </p>
                </div>
            </div>
            <div className='details-container'>
                <div className='basic-details'>
                    <div className='details-intro'>
                        <h3 className='heading title' title={title}>{title}</h3>
                    </div>
                    <div className='rating'>
                        <h4 className='heading rating-text'>{details.vote_average}</h4>
                        <img
                            src={star}
                            alt={`${details.vote_average} stars`}
                            className='star'
                        />
                    </div>
                </div>
                <div className='popularity-container'>
                    <div className='popularity-meter'>
                        <div className='meter'>
                            {Math.trunc(details.popularity)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContentCard;
