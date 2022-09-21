import React from 'react'

import TodoItem from './Components/TodoItem/TodoItem';
import TodoList from './Components/TodoList/TodoList';
import SearchBox from './Components/Search/Search';
import { TodoContext } from './Context/TodoContext';
import { useContext } from 'react';
import { Modal } from './Components/Modal/index.js';
import { CreateButton } from "./Components/CreateButton/index";
import { TodoForm } from './Components/TodoForm';
import { TodoLoading } from './Components/TodoNotifications';
import './App.css';

function AppUI () {

    const {isLoading, todoFiltered, handleTodosState, openModal, setOpenModal} = useContext(TodoContext);
    return ( 
        <React.Fragment>
            {/** Search Component **/}
            <SearchBox />
            {/** Todo List Component **/}

            <TodoList>
                    {/** Todo Item Component **/}
                    {isLoading && <TodoLoading />}
                    {!isLoading && todoFiltered.length === 0 && <p>Escribe tu primer todo</p>}
                    {todoFiltered.map(todo => (
                        <TodoItem 
                            onClick={() => handleTodosState(todo.text)}
                            key={todo.text} 
                            todo={todo}
                        />
                    ))}
            </TodoList>     

           
            {/** Add Buttom Component **/}
             <CreateButton setOpenModal={setOpenModal} />
            {/** Modal **/}
            {!!openModal && (
                <Modal>
                    <TodoForm />
                </Modal>
            )}
        </React.Fragment>
    );
}
 
export default AppUI;