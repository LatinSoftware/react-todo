import React from 'react';
import './todoLoading.css';

function TodoError({error}){
    return <p>{error}</p>
}

function TodoLoading(){
    return (
        <div className="LoadingTodo-container">
          <span className="LoadingTodo-completeIcon"></span>
          <p className="LoadingTodo-text">Cargando TODOs...</p>
        </div>
    );
}

function TodoEmpty(){
    return <p>Crea tu primer todo..</p>
}

export { TodoError, TodoLoading, TodoEmpty }