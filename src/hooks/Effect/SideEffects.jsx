import { useEffect, useState } from "react";

const SideEffects = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
  };

  const handleUserName = (e) => {
    setUserName(e.target.value);
  };
  const handleUserPassword = (e) => {
    setPassword(e.target.value);
  };

  useEffect(() => {
    if (!loading) return;

    setTimeout(() => {
      if (userName === "naveen" && password === "naveen@123") {
        setMessage("Welcome Naveen");
      } else if (userName === "admin" && password === "admin@123") {
        setMessage("Welcome Admin");
      } else {
        setMessage("Invalid Password");
      }
      setLoading(false);
    }, 3000);
  }, [loading]);
  return (
    <div className="flex flex-col justify-center items-center mx-auto">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col mx-auto justify-center items-center space-y-4"
      >
        <input
          type="text"
          placeholder="user name"
          onChange={handleUserName}
          className="border border-[#ccc] p-1"
        />
        <input
          type="password"
          placeholder="user password"
          onChange={handleUserPassword}
          className="border border-[#ccc] p-1"
        />
        <button type="submit" className="bg-black text-white px-3 py-1 ">
          login
        </button>
      </form>

      <div>
        {loading ? (
          <div>Loading...</div>
        ) : message ? (
          <div>{message}</div>
        ) : null}
      </div>
    </div>
  );
};

export default SideEffects;
