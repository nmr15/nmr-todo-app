import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { FaCheckSquare, FaCheck, FaEdit, FaTrashAlt } from 'react-icons/fa';
import { HiPlusCircle } from 'react-icons/hi';
import { IconContext } from 'react-icons/lib';
import TodoDataServices from '../services/todos.services';
import './TodoList.scss';
import AddTodo from './AddTodo';
import Sidenav from './Sidenav';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [doneTodos, setDoneTodos] = useState(false);
  const [done, setDone] = useState(false);
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
    // console.log("ID to be edited: ", id);
    setTodoId(id);
    setModal("block");
  }

  const newDone = 
  {
    done,
  };

  const getDoneId = async(id) =>
  {
    console.log("ID of done is: ", id);
    const docSnap = await TodoDataServices.getTodo(id);
    console.log("Done record is: ", docSnap.data());

    updateDoneHandler(id);
    
    // setDone(true);
    // console.log(done);

    // await TodoDataServices.updateDone(id, newDone);
    // alert("Todo updated");
  }

  const updateDoneHandler = async(id) =>
  {
    setDone(true);
    console.log(done);

    await TodoDataServices.updateDone(id, newDone);
    alert("Todo updated");
    window.location.reload(false);
  }

  const deleteHandler = async(id) =>
  {
    await TodoDataServices.deleteTodo(id);
    getTodos();
  }

  useEffect(() => {
    getTodos();
    updateDoneHandler();
  }, []);

  return (
    <>
      <Sidenav doneTodos={doneTodos} setDoneTodos={setDoneTodos} modal={modal} setModal={setModal} />
      <section className="section__todo">
        {/* <div className="tabs">
          <a href="#" className="tabs__link tabs__link-bgRed" onClick={() => setDoneTodos(false)} >View Not Completed</a>
          <a href="#" className="tabs__link tabs__link-bgBlue" onClick={() => setDoneTodos(true)} >View Completed</a>
        </div> */}
        <div className="todo">
          {todos
            .filter(todo => todo.done === doneTodos)
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
                <div className="todo__buttons" style={{justifyContent: todo.done ? "flex-end" : "space-between"}}>
                  <a href="#" onClick={(e) => getDoneId(todo.id)} style={{display: todo.done ? "none" : "block"}} >Complete</a>
                  <div>
                    <IconContext.Provider value={{ className: "todo__icons" }}>
                      {/* <FaCheck className="todo__icons-bgblue" onClick={(e) => getDoneId(todo.id)} /> */}
                      <FaEdit className="todo__icons-bggreen" onClick={(e) => getTodoId(todo.id)} />
                      <FaTrashAlt className="todo__icons-bgred" onClick={(e) => deleteHandler(todo.id)} />
                    </IconContext.Provider>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        {/* <div className="todo__btn-modal">
          <IconContext.Provider value={{ className: "todo__btn-modal-icon" }}>
            <HiPlusCircle onClick={() => setModal("block")} />
          </IconContext.Provider>
        </div> */}
      </section>
      <AddTodo modal={modal} setModal={setModal} id={todoId} setTodoId={setTodoId} />
    </>
  )
}

export default TodoList