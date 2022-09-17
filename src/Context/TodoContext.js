import React, { useState, useEffect } from 'react'
import { useLocalStorage } from '../Hooks/UseLocalStorage';

const TodoContext = React.createContext({});

function TodoProvider(props) {
    const {
        items: todos,
        saveItem: setTodos,
        isLoading
    } = useLocalStorage("TODO", []);
    const [searchValue, setSearchValue] = useState("");
    const [completedTodo, setCompletedTodo] = useState(todos.filter(todo => todo.completed === true).length);
    const totalTodo = todos.length;

    let todoFiltered = todos.filter(todo => {
        const todoText = todo.text.toLowerCase();
        const searchText = searchValue.toLowerCase();
        return todoText.includes(searchText);
    })

    const handleTodosState = text => {
        const todoIndex = todos.findIndex(todo => todo.text === text);
        const completed = todos[todoIndex].completed;
        todos[todoIndex].completed = !completed;
        const newTodoList = [...todos];
        setTodos(newTodoList);
    }

    useEffect(() => {
        const completedTodos = todos.filter(todo => todo.completed === true).length;
        setCompletedTodo(completedTodos)
    }, [todos])

    return (
        <TodoContext.Provider value={{
            isLoading,
            completedTodo,
            totalTodo,
            todoFiltered,
            handleTodosState,
            setSearchValue,
        }}>
            {props.children}
        </TodoContext.Provider>
    )
}


export { TodoProvider, TodoContext }