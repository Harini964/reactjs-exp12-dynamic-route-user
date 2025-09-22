import React from "react";
import { Link } from "react-router-dom";

const users = [
  { id: "1", name: "Gani", email: "gani@gmail.com" },
  { id: "2", name: "Harini", email: "harini@gmail.com" },
  { id: "3", name: "Mahesh", email: "mahesh@gmail.com" }
];

function Home() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>User List</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            <Link to={`/user/${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
