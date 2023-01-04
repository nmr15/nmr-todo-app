import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { HiPlusCircle } from 'react-icons/hi';
import { IconContext } from 'react-icons/lib';
import Sidenav from './Sidenav';
import TodoList from './TodoList';
import AddTodo from './AddTodo';
import './Home.scss';

const Home = () => {
  // const [showModal, setShowModal] = useState(false);
  const [todoId, setTodoId] = useState("");
  const navigate = useNavigate();
  
  const getTodoHandler = (id) => {
    // console.log("ID to be edited: ", id);
    setTodoId(id);
    // console.log("TodoId is", id);
  }

  return (
    <>
      <section className="section__home">
        <div className="home">
          {/* <Sidenav /> */}
          {/* <TodoList getTodoId={getTodoHandler}/> */}
          {/* <AddTodo id={todoId} setTodoId={setTodoId} /> */}
          {/* <div className="home__icon">
            <Link to="addTodo" state={{todoId}}>
              <IconContext.Provider value={{ className: "home__icon-add" }}>
                <HiPlusCircle />
              </IconContext.Provider>
            </Link>
          </div> */}
        </div>
      </section>
      
    </>
  )
}

export default Home