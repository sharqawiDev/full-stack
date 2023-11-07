import * as React from "react";
import "./App.css";
import * as API from "./api";
import { faker } from "@faker-js/faker";

function App() {
  const [users, setUsers] = React.useState([]);

  const getUsers = async () => {
    const users = await API.getUsers();
    setUsers(users);
  };

  const createUser = async () => {
    await API.createUser(faker.person.firstName, faker.person.lastName);
    getUsers();
  };

  React.useEffect(() => {
    getUsers();
  }, []);

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
