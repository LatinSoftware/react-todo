import React from 'react'
import "./TodoItem.css"

const TodoItem = ({todo}) => {
    const {text} = todo;
    return ( 
        <li className='TodoItem'>
            <label>
                <input type="checkbox" />
                <span>{text}</span>
            </label>
        </li>
    );
}
 
export default TodoItem;