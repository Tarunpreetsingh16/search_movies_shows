import React from 'react';
import './style.css';
import sliderArrow from '../../assets/img/sliderArrow.png';

const HorizontalSlider = () => {
    return (
        <div className='horizontal-slider'>
            <div className='slide-arrow-container'>
                <img
                    src={sliderArrow}
                    alt='slide left'
                    className='slider-arrow'
                />
            </div>
            <div className='slide-arrow-container'>
                <img
                    src={sliderArrow}
                    alt='slide right'
                    className='slider-arrow flip-slider-arrow'
                />
            </div>
        </div>
    );
};

export default HorizontalSlider;
