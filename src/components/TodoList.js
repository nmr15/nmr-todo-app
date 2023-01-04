import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import { HiPlusCircle } from 'react-icons/hi';
import { IconContext } from 'react-icons/lib';
import TodoDataServices from '../services/todos.services';
import './TodoList.scss';
import AddTodo from './AddTodo';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [isDone, setIsDone] = useState(false);
  const [modal, setModal] = useState("none")
  const [todoId, setTodoId] = useState("");

  

  const getTodos = async() =>
  {
    const data = await TodoDataServices.getAllTodos();
    // console.log(data.docs);
    setTodos(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
    // console.log(todos);
  }

  const getTodoId = (id) => {
    console.log("ID to be edited: ", id);
    setTodoId(id);
  }

  const deleteHandler = async(id) =>
  {
    await TodoDataServices.deleteTodo(id);
    getTodos();
  }

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <>
      <section className="section__todo">
        <div className="todo">
          <button onClick={() => setIsDone(true)}>Done</button>
          <button onClick={() => setIsDone(false)}>Not Done</button>
          {todos
            .filter(todo => todo.done === isDone)
            .map((todo) =>
           {
            return (
              <div className="todo__item" key={todo.id}>
                <div className="todo__header">
                  <h3 classname="todo__header-title">{todo.todo_title}</h3>
                </div>
                <div className="todo__body">
                  <p className="todo__body-content">{todo.todo_body}</p>
                </div>
                <FaEdit onClick={(e) => getTodoId(todo.id)} />
                <FaTrashAlt onClick={(e) => deleteHandler(todo.id)} />
                {/* <p>{todo.done}</p> */}
              </div>
            );
          })}
        </div>
        <div className="todo__icon">
          <IconContext.Provider value={{ className: "todo__icon-add" }}>
            <HiPlusCircle onClick={() => setModal("block")} />
          </IconContext.Provider>
        </div>
      </section>
      <AddTodo modal={modal} setModal={setModal} id={todoId} setTodoId={setTodoId} />
    </>
  )
}

export default TodoList