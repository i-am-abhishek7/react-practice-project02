import React, { useState } from "react";
import AddUser from "./components/Ussers/AddUser";
import UsersList from "./components/Ussers/UsersList";

const App = () => {
  const [usersList, setUserList] = useState([]);

  const addUserHandler = (userName, userAge) => {
    setUserList((prevUsersList) => {
      return [
        ...prevUsersList,
        { name: userName, age: userAge, id: Math.random.toString() },
      ];
    });
  };

  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </div>
  );
};

export default App;
