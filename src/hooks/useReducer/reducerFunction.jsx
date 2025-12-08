export const initialState = {
  username: "",
  password: "",
  loading: false,
  message: "",
};

export function reducer(state, action) {
  switch (action.type) {
    case "SET_USERNAME":
      return { ...state, username: action.payload };

    case "SET_PASSWORD":
      return { ...state, password: action.payload };

    case "LOGIN_START":
      return { ...state, loading: true, message: "" };

    case "LOGIN_SUCCESS":
      return { ...state, loading: false, message: action.payload };

    case "LOGIN_ERROR":
      return { ...state, loading: false, message: "Invalid credentials" };

    default:
      return state;
  }
}
