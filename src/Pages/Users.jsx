import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import uuid from "uuid";
export default function Users() {
  const [users, setUsers] = useState([]);

  const fetchUsers = () => {
    return axios("https://reqres.in/api/users");
  };

  useEffect(() => {
    fetchUsers().then((res) => {
      console.log(res.data.data);
      setUsers(res.data.data);
    });
  }, []);
  return (
    <>
      <h1>Users</h1>
      {users.map((user) => (
        <>
          <Link
            key="uuid()"
            to={`/users/${user.id}`}
          >{`${user.first_name} - ${user.last_name}`}</Link>
          <br />
        </>
      ))}
    </>
  );
}
