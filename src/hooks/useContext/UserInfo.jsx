import React, { useContext } from "react";
import { userContext } from "./User";

const UserInfo = () => {
  const users = useContext(userContext);
  return (
    <div>
      {users.map((user, i) => (
        <div key={i}>
          <h2>user name : {user.name}</h2>
          <h2>user age : {user.age}</h2>
          <p>Hobbies: {user.hobbies.join(",")}</p>
        </div>
      ))}
    </div>
  );
};

export default UserInfo;
