import React from 'react'
import "./TodoItem.css"

const TodoItem = ({todo}) => {
    const {text, completed} = todo;
    return ( 
        <li className='TodoItem'>
            <label className='TodoItem-checkbox__container' >
                <input type="checkbox" checked={completed} className='TodoItem-checkbox' />
                <span>{text}</span>
            </label>
        </li>
    );
}
 
export default TodoItem;