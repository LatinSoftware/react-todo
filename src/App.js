import React from 'react'
import AppUI from './AppUI.jsx';
import { TodoProvider } from './Context/TodoContext.js';


function App() {
  return (
     <TodoProvider>
       <AppUI  />  
     </TodoProvider>
  );
}

export default App;
