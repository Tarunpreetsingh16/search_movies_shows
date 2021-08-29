import  React from 'react';
import './style.css';
import tmdbLogo from '../../assets/img/tmdbLogo.svg';

const Footer = () => {
    return (
        <div className='footer'>
            <h3>Copyright © 2021  SEARCHTOBINGE. All Rights Reserved</h3>
            <div>
                <h4>Powered By</h4>
                <img src={tmdbLogo} alt='The Movie Data Base' className='tmdb-logo' />
            </div>
        </div>
    );
};

export default Footer;
