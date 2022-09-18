import React from 'react'
import { useContext } from 'react';
import { useState } from 'react';
import { TodoContext } from '../../Context/TodoContext';
import './index.css';



function TodoForm() {

    const [newTodoValue, setNewTodoValue] = useState('');
    const {addTodo, setOpenModal} = useContext(TodoContext);
    const handleSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
        setNewTodoValue('');
    }

    const handleCancel = () => {
        setOpenModal(false);
    }

    const handleTextareaChange = (event) => {
        setNewTodoValue(event.target.value);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Escribe tu nuevo TODO</label>
            <textarea
                value={newTodoValue}
                onChange={handleTextareaChange}
                placeholder="Cortar la cebolla para el almuerzo"
            />
            <div className="TodoForm-buttonContainer">
                <button
                    type="button"
                    className="TodoForm-button TodoForm-button--cancel"
                    onClick={handleCancel}
                >
                    Cancelar
                </button>
                <button
                    type="submit"
                    className="TodoForm-button TodoForm-button--add"
                >
                    Añadir
                </button>
            </div>
        </form>
    )
}

export { TodoForm }