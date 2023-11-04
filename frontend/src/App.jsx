import * as React from "react";
import "./App.css";
import * as API from "./api";

function App() {
  const [users, setUsers] = React.useState([]);

  const getUsers = async () => {
    const users = await API.getUsers();
    setUsers(users);
  };

  const createUser = async () => {
    await API.createUser("Salman", "anything");
    getUsers();
  };

  return (
    <>
      {
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              {user.firstName} {user.lastName}
            </li>
          ))}
        </ul>
      }
      <button onClick={() => createUser()}>create user</button>
      <button onClick={() => getUsers()}>get users</button>
    </>
  );
}

export default App;
