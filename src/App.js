import React from 'react';
import Header from './components/Header.jsx';
import TodoItem from './components/TodoItem.jsx';
import Buttomn from './components/Button.jsx';
import './styles.css';
import CounterComponent from './components/CounterComponent.jsx';

const App=()=> {
  return (
    <div className="todo-container">
      <CounterComponent />
      <Header />
      <TodoItem text = "eat"/>
      <TodoItem text = "code"/>
      <TodoItem text = "play" />
      <TodoItem text =" washroom"/>
      <TodoItem text= "sleep"/>      
      <Buttomn />
    </div>
  );
};
export default App;
