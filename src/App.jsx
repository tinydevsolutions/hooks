import State from "./hooks/useState/State";
import SideEffects from "./hooks/Effect/SideEffects";
import RenderCounter from "./hooks/useRef/renderCount";
import User from "./hooks/useContext/User";
import Login from "./hooks/useReducer/Login";
import SearchList from "./hooks/useMemo/SearchList";
import ProductSearch from "./hooks/useMemo/Search";
import InputFocus from "./hooks/useRef/Input";

const App = () => {
  return (
    <div className="flex flex-col justify-center items-center mx-auto">
      <State />
      <SideEffects />
      <RenderCounter />
      <InputFocus />
      <User />
      <Login />
      <SearchList items={["Apple", "Orange", "PineApple"]} />
      <ProductSearch />
    </div>
  );
};

export default App;
