import React from 'react';
import './style.css';
import {Splide, SplideSlide} from '@splidejs/react-splide';

const HorizontalSlider = ({children, perPage, perMove, slideWidth}) => {
    return (
        <Splide
            options={ {
                width  : '100%',
                gap    : '1rem',
                perPage,
                perMove,
                fixedWidth: slideWidth,
            } }
        >
            {
                React.Children.map(children, child => <SplideSlide>{child}</SplideSlide>)
            }
        </Splide>
    );
};

export default HorizontalSlider;
