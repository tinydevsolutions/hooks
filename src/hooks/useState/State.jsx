import React, { useState } from "react";

const State = () => {
  // useState stores two states
  //  when the action triggers state changes

  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  //   function for form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() !== "") {
      setTodos([...todos, input]);
    }
    setInput("");
  };
  //   function for handling input changes
  const handleChange = (e) => {
    setInput(e.target.value);
  };
  return (
    <div className="flex flex-col justify-center items-center mx-auto">
      <form
        onSubmit={handleSubmit}
        className="border flex flex-col p-4 justify-center items-center mx-auto mt-12"
      >
        <input
          type="text"
          onChange={handleChange}
          value={input}
          className="border border-[#ccc] rounded p-2"
        />{" "}
        <button
          type="submit"
          className="bg-teal-500 mt-5 text-white px-4 py-2 "
        >
          add todo
        </button>
      </form>

      <ul className="p-4">
        {todos.map((todo, i) => (
          <li key={i}> {todo} </li>
        ))}
      </ul>
    </div>
  );
};

export default State;
