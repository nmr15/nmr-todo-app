import { db } from "../firebase-config";
import { collection, query, where, getDocs, getDoc, addDoc, updateDoc, deleteDoc, doc } from "firebase/firestore";

const todoCollectionRef = collection(db, "tbl_todo");

const todoNotDone = query(todoCollectionRef, where("done", "==", false));
const todoDone = query(todoCollectionRef, where("done", "==", true));

class TodoDataServices
{
  getAllTodos = () =>
  {
    return getDocs(todoCollectionRef);
  };

  getAllDoneTodos = () =>
  {
    return getDocs(todoDone);
  };

  addTodo = (newTodo) =>
  {
    return addDoc(todoCollectionRef, newTodo);
  };

  updateTodo = (id, updatedTodo) =>
  {
    const todoDoc = doc(db, "tbl_todo", id);
    return updateDoc(todoDoc, updatedTodo);
  }

  deleteTodo = (id) =>
  {
    const todoDoc = doc(db, "tbl_todo", id);
    return deleteDoc(todoDoc);
  }

  getTodo = (id) =>
  {
    const todoDoc = doc(db, "tbl_todo", id)
    return getDoc(todoDoc);
  }
}

export default new TodoDataServices();