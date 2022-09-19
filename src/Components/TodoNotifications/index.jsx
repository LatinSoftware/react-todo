import React from 'react';
import './todoLoading.css';

function TodoError({error}){
    return <p>{error}</p>
}

function TodoLoading(){
    return (
        <div className='TodoLoading-container'>
            <span className='TodoLoading-complete-icon'></span>
            <p className="TodoLoading-text">Cargando Todo...</p>
            <span className="TodoLoading-delete-icon"></span>
        </div>
    )
}

function TodoEmpty(){
    return <p>Crea tu primer todo..</p>
}

export { TodoError, TodoLoading, TodoEmpty }