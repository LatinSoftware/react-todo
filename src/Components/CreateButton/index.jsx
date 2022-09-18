import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './index.css';



const CreateButton = ({setOpenModal}) =>{

    const handleClick = () =>{
        setOpenModal(prev => !prev);
    }

    return (
        <div className='CreateButton blue-btn'>
            <button type='button' onClick={handleClick}>
                <FontAwesomeIcon icon={faPlus} className="CreateButton--icon" />
            </button>
        </div>
    )
}

export { CreateButton }