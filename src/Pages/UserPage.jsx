import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
export default function UserPage() {
  const [user, setUser] = useState(null);
  const [isLoading, setloading] = useState(true);
  const { id } = useParams();

  const fetchData = () => {
    return axios.get(`https://reqres.in/api/users/${id}`);
  };

  useEffect(() => {
    fetchData().then((res) => {
      setUser(res.data.data);
      setloading(false);
    });
  }, []);
  return isLoading ? (
    <h2>...loading</h2>
  ) : (
    <>
      <div style={{ marginTop: "2rem" }}>
        <img src={user.avatar} alt="profile" />
        <div>{user.email}</div>
      </div>
    </>
  );
}
