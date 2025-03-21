import React from 'react';
import Header from './components/Header.jsx';
import TodoItem from './components/TodoItem.jsx';
import Buttomn from './components/Button.jsx';
import './styles.css';
const App=()=> {
  return (
    <div className="todo-container">
      <Header />
      <TodoItem />
      <TodoItem />
      <TodoItem />
      <TodoItem />
      <TodoItem />      
      <Buttomn />
    </div>
  );
};
export default App;
