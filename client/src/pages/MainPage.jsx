import { useCallback, useContext, useState, useEffect } from "react";
import "./Main.scss";
import axios from "axios";
import { AuthContext } from "../context/AuthContext.js";

const MainPage = () => {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);
  const { userId } = useContext(AuthContext);

  const getTodo = useCallback(async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/todo", {
        headers: { "Content-Type": "application/json" },
        params: { userId },
      });
      setTodos(response.data);
      saveTodosToLocalStorage(response.data); 
    } catch (error) {
      console.log(error);
    }
  }, [userId]);

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos"));
    if (storedTodos) {
      setTodos(storedTodos);
    } else {
      getTodo(); 
    }
  }, [getTodo]);

  const saveTodosToLocalStorage = (todos) => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const createTodo = useCallback(async () => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/todo/add",
        { text, userId },
        { headers: { "Content-Type": "application/json" } }
      );
      const newTodos = [...todos, response.data];
      setTodos(newTodos);
      saveTodosToLocalStorage(newTodos); 
      setText("");
      getTodo()
    } catch (error) {
      console.log(error);
    }
  }, [text, userId, todos, getTodo]);

  const removeTodo = useCallback(async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/todo/delete/${id}`, {
        headers: { "Content-Type": "application/json" },
      });
      const updatedTodos = todos.filter((todo) => todo._id !== id);
      setTodos(updatedTodos);  
      saveTodosToLocalStorage(updatedTodos);  
    } catch (error) {
      console.log(error);
    }
  }, [todos]);


  const completedTodo = useCallback(async (id) => {
    try {
      await axios.put(`http://localhost:5000/api/todo/complete/${id}`,{id}, {
        headers: { "Content-Type": "application/json" },
      })
     .then(response => {
      setTodos([...todos], response.data)
      getTodo()
     })
    } catch (error) {
      console.log(error);
    }
  }, [todos, getTodo]);


  return (
    <div className="container">
      <div className="main-page">
        <h4>Добавить задачу:</h4>
        <form className="form form-login" onSubmit={(e) => e.preventDefault()}>
          <div className="row">
            <div className="input-field col s12">
              <input
                onChange={(e) => setText(e.target.value)}
                value={text}
                type="text"
                id="text"
                name="input"
                className="validate"
              />
              <label htmlFor="input">Задача:</label>
            </div>
          </div>
          <div className="row">
            <button
              onClick={createTodo}
              className="waves-effect waves-light btn blue"
            >
              Добавить
            </button>
          </div>
        </form>
        <h3>Активные задачи</h3>
        <div className="todos">
          {todos.map((todo, index) => {
            return (
              <div className="row flex todos-item " key={todo._id}>
                <div className="col todos-num">{index + 1}</div>
                <div className="col todos-text">{todo.text}</div>
                <div className="col todos-buttons">
                  <i onClick={() => completedTodo(todo._id)} className="material-icons blue-text">check
                  </i>
                  <i className="material-icons orange-text">warning</i>
                  <i onClick={() => removeTodo(todo._id)} className="material-icons red-text">delete</i>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MainPage;
