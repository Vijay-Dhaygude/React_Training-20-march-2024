import React, { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";

function TodoList() {
  let [todolist, setTodolist] = useState([]);
  let inputRef = useRef("");

  let addTodo = () => {
    let todoItem = inputRef.current.value;
    setTodolist((prevArr) => {
      return [...prevArr, todoItem];
    });
  };

  function delTodo(id) {
    let delTodoID = id;
    setTodolist((oldValues) => {
      return oldValues.filter((lists) => lists !== todolist[delTodoID]);
    });
    console.log(delTodoID);
  }

  return (
    <div className="todoContainer" style={{ width: "100%" }}>
      <h2 style={{ display: "flex", justifyContent: "center" }}>Todo List</h2>
      <div
        className="addTodolist"
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "1rem",
          justifyContent: "center",
        }}
      >
        <input
          className="addTodoItem"
          type="text"
          ref={inputRef}
          style={{ width: "60%" }}
          placeholder="enter what you want to add"
        ></input>
        <button className="btn btn-outline-primary" onClick={addTodo}>
          add todo
        </button>
      </div>
      <br />
      <br />
      <div
        className="todoListDisp"
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          justifyContent: "center",
        }}
      >
        <h4>The list is :</h4>
        {todolist.map((item, key) => (
          <div
            className="listItems"
            id={key}
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <span
              id={key}
              style={{
                textAlign: "center",
                border: "2px solid",
                borderRadius: "5px",
                width: "80%",
              }}
            >
              {item}
            </span>
            <button
              className="btn btn-danger"
              style={{ marginLeft: "4rem" }}
              id={key}
              onClick={(e) => delTodo(e.target.id)}
            >
              X
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TodoList;
