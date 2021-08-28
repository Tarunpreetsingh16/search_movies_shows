import React from 'react';
import CustomInputField from '../CustomInputField';
import './style.css';
import magnifyingGlass from '../../assets/img/magnifyingGlass.png';

const SearchBox = () => {
    return (
        <div className='search-box'>
            <CustomInputField
                type="text"
                placeholder="Search for movies, shows, episodes .... "
            />
            <div className='magnifying-glass-container'>
                <img
                    src={magnifyingGlass}
                    alt='magnifying glass'
                    className='magnifying-glass'
                />
            </div>
        </div>
    );
};

export default SearchBox;
