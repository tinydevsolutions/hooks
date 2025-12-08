import React, { createContext } from "react";
import UserInfo from "./UserInfo";

export const userContext = createContext();
const User = () => {
  const users = [
    { name: "naveen", age: 23, hobbies: ["code", "sleep", "repeat"] },
    { name: "venkat", age: 22, hobbies: ["code", "sleep", "read"] },
    { name: "bala", age: 22, hobbies: ["code", "sleep", "read", "learn"] },
  ];
  return (
    <userContext.Provider value={users}>
      <UserInfo />
    </userContext.Provider>
  );
};

export default User;
