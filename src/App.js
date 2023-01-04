import React, { useState } from 'react';
import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import AddTodo from './components/AddTodo';
import Sidenav from './components/Sidenav';
import TodoList from './components/TodoList';

function App() {
  // const [todoId, setTodoId] = useState("");

  // const getTodoHandler = (id) => {
  //   console.log("ID to be edited: ", id);
  //   setTodoId(id);
  // }

  return (
    <div>
      <Sidenav />
      <TodoList />
      {/* <AddTodo id={todoId} setTodoId={setTodoId} /> */}
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="addTodo" element={ <AddTodo  /> } />
        <Route path="todoList" element={ <TodoList />} />
      </Routes>
    </div>
  );
}

export default App;
