import { useRef } from "react";

function InputFocus() {
  const inputRef = useRef();

  const handleClick = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <input
        ref={inputRef}
        className="px-2 py-1 border border-[#ccc]"
        placeholder="Click button to focus me"
      />
      <button onClick={handleClick} className="bg-black px-2 py-1 text-white">
        Focus Input
      </button>
    </div>
  );
}

export default InputFocus;
