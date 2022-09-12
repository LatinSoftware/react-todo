import React from 'react';


import './App.css';
import SearchBox from './Components/Search/Search';
import { TodoCounter } from './Components/TodoCounter/TodoCounter';
import TodoItem from './Components/TodoItem/TodoItem';
import TodoList from './Components/TodoList/TodoList';


const todos = [
  {
    text: "tarea 1",
    completed: false,
  },{
    text: "tarea 2",
    completed: false,
  },{
    text: "tarea 3",
    completed: false,
  },{
    text: "tarea 4",
    completed: true,
  },
]

function App() {
  return (
      <React.Fragment>
        {/** Search Component **/}
        <SearchBox />
        {/** Counter component **/}
        <TodoCounter />
        {/** Todo List Component **/}
        <TodoList>
          {/** Todo Item Component **/}
          {todos.map(todo => (
            <TodoItem key={todo.text} todo={todo} />
          ))}
        </TodoList>
        {/** Add Buttom Component **/}
      </React.Fragment>    
  );
}

export default App;
