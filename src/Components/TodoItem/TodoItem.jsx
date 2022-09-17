import React from 'react'
import "./TodoItem.css"

const TodoItem = ({todo, onClick}) => {
    const {text, completed} = todo;
    const onChangeHandler = (event) => {
        
    }
    return ( 
        <li className='TodoItem' onClick={onClick} >
            <label className='TodoItem-checkbox__container'  >
                <input type="checkbox" 
                    onChange={onChangeHandler}
                    defaultChecked={completed} 
                    className='TodoItem-checkbox' 
                />
                <span>{text}</span>
            </label>
        </li>
    );
}
 
export default TodoItem;