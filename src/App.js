import React from 'react';


import './App.css';
import { TodoCounter } from './Components/TodoCounter/TodoCounter';
import TodoItem from './Components/TodoItem/TodoItem';
import TodoList from './Components/TodoList/TodoList';


const todos = [
  {
    text: "tarea 1",
    done: false,
  },{
    text: "tarea 2",
    done: false,
  },{
    text: "tarea 3",
    done: false,
  },{
    text: "tarea 4",
    done: true,
  },
]

function App() {
  return (
      <React.Fragment>
        {/** Counter component **/}
        <TodoCounter />
        {/** Search Component **/}
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
