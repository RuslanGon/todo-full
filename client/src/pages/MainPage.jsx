import { useCallback, useContext, useState, useEffect } from "react";
import "./Main.scss";
import axios from "axios";
import { AuthContext } from "../context/AuthContext.js";

const MainPage = () => {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);
  const { userId } = useContext(AuthContext);

  // Определяем getTodo до useEffect
  const getTodo = useCallback(async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/todo", {
        headers: { "Content-Type": "application/json" },
        params: { userId },
      });
      setTodos(response.data);
    } catch (error) {
      console.log(error);
    }
  }, [userId]);

  // Вызов getTodo при первом рендере компонента
  useEffect(() => {
    getTodo();
  }, [getTodo]);

  const createTodo = useCallback(async () => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/todo/add",
        { text, userId },
        { headers: { "Content-Type": "application/json" } }
      );
      setTodos((prevTodos) => [...prevTodos, response.data]);
      setText("");
    } catch (error) {
      console.log(error);
    }
  }, [text, userId]);

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
              <div className="row flex todos-item" key={todo._id}>
                <div className="col todos-num">{index + 1}</div>
                <div className="col todos-text">{todo.text}</div>
                <div className="col todos-buttons">
                  <i className="material-icons blue-text">check</i>
                  <i className="material-icons orange-text">warning</i>
                  <i className="material-icons red-text">delete</i>
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
