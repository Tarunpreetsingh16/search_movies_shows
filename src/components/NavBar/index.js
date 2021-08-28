import React from 'react';
import './style.css';
import SearchBox from '../SearchBox'

const NavBar = () => {
    return (
        <nav>
            <div>
                <h1 id="logo-title">
                    SearchToBinge
                </h1>
            </div>
            <SearchBox />
        </nav>
    );
};

export default NavBar;
