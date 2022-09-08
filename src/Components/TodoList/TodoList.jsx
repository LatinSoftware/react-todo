import React from 'react';
import './TodoList.css'
const TodoList = (props) => {
    return (
        <section className='TodoList'>
            <h4 className='TodoList--title'>Todo Task</h4>
            <ul className='TodoList--ul'>
                {props.children}
            </ul>
        </section>
    );
}
 
export default TodoList;