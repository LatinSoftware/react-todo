import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

import "./Search.css"

const SearchBox = ({setSearchValue}) => {
    const OnChangeHandler = (event) => {
        setSearchValue(event.target.value)
    }
    return ( 
        <div className='SearchBox-container'>
            <div className='SearchBox'>
                <input 
                onChange={OnChangeHandler}
                type='text' 
                className='SearchBox-input' 
                placeholder='Search Task' 
                />
                <button className='SearchBox-button' type='button'>
                    <FontAwesomeIcon className='SearchBox-icon' icon={faMagnifyingGlass} />
                </button>
            </div>
        </div>
    );
}
 
export default SearchBox;