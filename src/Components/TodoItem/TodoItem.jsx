import React from 'react'
import "./TodoItem.css"

const TodoItem = ({todo, onClick, color}) => {
    const {text, completed} = todo;
   
    return ( 
        <li className='TodoItem' >
            <label className='TodoItem-checkbox__container'  >
                <input type="checkbox" 
                    onClick={onClick}
                    defaultChecked={completed} 
                    className='TodoItem-checkbox TodoItem-checkbox--blue' 
                />
                <span>{text}</span>
            </label>
        </li>
    );
}
 
export default TodoItem;