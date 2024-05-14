import React from "react";
import { sort } from "fast-sort";

interface User {
  id: number;
  name: string;
  email: string;
}

interface Props {
  sortParam: string;
}

const UserTable = async ({ sortParam }: Props) => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users: User[] = await res.json();
  const sortedUser = sort(users).asc([
    (u) => (sortParam === "email" ? u.email : u.name),
  ]);

  return (
    <>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {sortedUser.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td> {user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default UserTable;
