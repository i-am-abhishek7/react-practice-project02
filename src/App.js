import React from "react";
import AddUser from "./components/Ussers/AddUser";
import UsersList from "./components/Ussers/UsersList";

const App = () => {
  return (
    <div>
      <AddUser />
      <UsersList users={[]} />
    </div>
  );
};

export default App;
