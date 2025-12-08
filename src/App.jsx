import React from "react";
import State from "./hooks/useState/State";
import SideEffects from "./hooks/Effect/SideEffects";
import RenderCounter from "./hooks/useRef/renderCount";
import User from "./hooks/useContext/User";
import Login from "./hooks/useReducer/Login";

const App = () => {
  return (
    <div className="flex flex-col justify-center items-center mx-auto">
      <State />
      <SideEffects />
      <RenderCounter />
      <User />
      <Login />
    </div>
  );
};

export default App;
