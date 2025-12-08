import React, { useReducer, useEffect } from "react";
import { reducer, initialState } from "./reducerFunction";

const Login = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch({ type: "LOGIN_START" });
  };

  useEffect(() => {
    if (!state.loading) return;

    setTimeout(() => {
      const { username, password } = state;

      if (username === "naveen" && password === "naveen@123") {
        dispatch({ type: "LOGIN_SUCCESS", payload: "Welcome naveen! 🎉" });
      } else if (username === "admin" && password === "admin@123") {
        dispatch({ type: "LOGIN_SUCCESS", payload: "Welcome admin! 👨‍💻" });
      } else {
        dispatch({ type: "LOGIN_ERROR" });
      }
    }, 1500);
  }, [state.loading]);

  return (
    <div className="flex flex-col items-center mt-10 space-y-4">
      {state.loading ? (
        <div className="text-xl font-semibold animate-pulse">Loading...</div>
      ) : state.message ? (
        <div className="text-2xl font-bold text-green-600">{state.message}</div>
      ) : null}

      <form
        onSubmit={handleSubmit}
        className="flex flex-col space-y-3 border p-4 rounded"
      >
        <input
          type="text"
          placeholder="username"
          className="border p-2"
          onChange={(e) =>
            dispatch({ type: "SET_USERNAME", payload: e.target.value })
          }
        />

        <input
          type="password"
          placeholder="password"
          className="border p-2"
          onChange={(e) =>
            dispatch({ type: "SET_PASSWORD", payload: e.target.value })
          }
        />

        <button type="submit" className="bg-black text-white p-2 rounded">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
