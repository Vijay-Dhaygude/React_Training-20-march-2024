import React, { useEffect, useState } from "react";

export default function TodoForm() {
  let [todo, setTodo] = useState("");
  let [todoList, setTodoList] = useState([]);
  const addTodo = (a) => {
    a.preventDefault();
    setTodoList([...todoList, todo]);
  };
  const deleteTask = (index) => {
    setTodoList((values) => values.filter((list, i) => i != index));
  };

  return (
    <div className="container">
      <h1>ToDO App</h1>
      <div className="container" style={{ width: "50%", textAlign: "left" }}>
        <form>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Enter Todo
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              value={todo}
              onChange={(e) => setTodo(e.target.value)}
            />
          </div>
          <button
            type="button"
            className="btn btn-primary"
            onClick={(a) => addTodo(a)}
          >
            Add Todo
          </button>
          <br></br>
          <br></br>
          <div>
            <h2>ToDo List</h2>
            {todoList.map((to, index) => {
              return (
                <div key={index} className="card-body">
                  <h5 className="card-title">{to}</h5>
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => deleteTask(index)}
                  >
                    Done
                  </button>
                </div>
              );
            })}
          </div>
        </form>
      </div>
    </div>
  );
}
