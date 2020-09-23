import React, { useRef } from "react";

export default function TodoAdd() {
  const todoNameRef = useRef();

  function handleAdding(e) {
    var name = todoNameRef.current.value;
    if (name === "") return;
    if (name.length < 3) {
      console.log("kevés");
      return;
    }
    if (name.length > 128) {
      console.log("sok");
      return;
    }
    console.log(name);
    todoNameRef.current.value = null;
  }
  return (
    <>
      <input className="inputField" ref={todoNameRef} type="text" />
      <button onClick={handleAdding} className="addButton">
        Add
      </button>
    </>
  );
}
