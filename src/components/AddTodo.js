import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { RxCross1 } from 'react-icons/rx';
import { IconContext } from 'react-icons/lib';
import TodoDataServices from '../services/todos.services';
import './AddTodo.scss';

const AddTodo = ({ modal, setModal, id, setTodoId }) => {
  const [todo_title, setTitle] = useState("");
  const [todo_body, setBody] = useState("");
  const [done, setDone] = useState(false);
  

  const navigate = useNavigate();

  const handleSubmit = async(e) =>
  {
    e.preventDefault();

    if(todo_title === "" || todo_body === "")
    {
      alert("All fields are required");
    }

    const newTodo =
    {
      todo_title,
      todo_body,
      done,
    };

    // console.log(newTodo);

    try
    {
      if(id !== undefined && id !== "")
      {
        await TodoDataServices.updateTodo(id, newTodo);
        setTodoId("");
        alert("Todo updated");
      }
      else
      {
        await TodoDataServices.addTodo(newTodo);
        alert("New todo added");
      }
      
    }
    catch(err)
    {
      console.log(err);
    }

    setModal("none");
    window.location.reload(false);
  }

  const editHandler = async() =>
  {
    try
    {
      const docSnap = await TodoDataServices.getTodo(id);
      console.log("The record is: ", docSnap.data());
      setTitle(docSnap.data().todo_title);
      setBody(docSnap.data().todo_body);
    }
    catch (err)
    {
      console.log(err);
    }
  }

  useEffect(() =>
  {
    // console.log("The id here is: ", id);
    if(id !== undefined && id !== "")
    {
      editHandler();
    }
  }, [id]);

  return (
    <>
      <section className="section__addtodo">
        <div className="addtodo" style={{display: modal}}>
          <IconContext.Provider value={{ className: "addtodo__btn-close"}}>
            <RxCross1 onClick={() => setModal("none")} />
          </IconContext.Provider>
          <form className="addtodo__form" onSubmit={handleSubmit}>
            <label htmlFor="title" className="addtodo__label">Title</label>
            <input
              type="text"
              placeholder="Title"
              className="addtodo__input"
              value={todo_title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <label htmlFor="description" className="addtodo__label">Description</label>
            <input
              type="text"
              placeholder="Description"
              className="addtodo__input"
              value={todo_body}
              onChange={(e) => setBody(e.target.value)}
            />
            <button type="submit" className="btn addtodo__button">Submit</button>
          </form>
        </div>
      </section>
      
    </>
  )
}

export default AddTodo