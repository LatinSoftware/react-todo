import React from 'react'
import { useContext } from 'react';
import { TodoContext } from '../../Context/TodoContext';
import './TodoCounter.css'
const TodoCounter = () => {

    const {completedTodo, totalTodo} = useContext(TodoContext);
    return ( 
        <h2 className='TodoCounter'>Completado { completedTodo } de { totalTodo } Todo</h2>
     );
}
 
export { TodoCounter };