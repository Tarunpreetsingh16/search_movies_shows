import React from 'react';
import './style.css';

const CustomInputField = ({type, placeholder}) => {
    return (
        <div>
            <input type={type} placeholder={placeholder} />
        </div>
    );
};

export default CustomInputField;
