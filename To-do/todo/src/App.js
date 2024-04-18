import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import InputUser from "./components/Users/InputUser";
import UserList from "./components/Users/UserList";
import { useState } from "react";

function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setUsersList((prevData) => {
      return [
        ...prevData,
        {
          id: Math.random().toString(),
          name: uName,
          age: uAge,
        },
      ];
    });
  };

  return (
    <div>
      <InputUser onAdduser={addUserHandler} />
      <UserList users={usersList} />
    </div>
  );
}

export default App;
