import React from "react";
import { useParams, Link } from "react-router-dom";

const users = [
  { id: "1", name: "Gani", email: "gani@gmail.com" },
  { id: "2", name: "Harini", email: "harini@gmail.com" },
  { id: "3", name: "Mahesh", email: "mahesh@gmail.com" }
];

function UserDetail() {
  const { id } = useParams();
  const user = users.find(u => u.id === id);

  if (!user) {
    return (
      <div style={{ padding: "20px" }}>
        <h2>User not found!</h2>
        <Link to="/">Go back</Link>
      </div>
    );
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>{user.name}</h1>
      <p>Email: {user.email}</p>
      <Link to="/">Back to User List</Link>
    </div>
  );
}

export default UserDetail;
