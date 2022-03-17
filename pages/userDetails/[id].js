import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import NavBar from "../../components/Common/NavBar";
const UserDetails = () => {
  const [user, setUser] = useState([]);
  const route = useRouter();
  const { id } = route.query;

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []);
  return (
    <>
      <NavBar />

      <div className="container mt-5">
      <button
        className="btn-success px-3 py-2 rounded"
        onClick={() => route.push("/user")}
      >
        {" "}
        Back{" "}
      </button>
        <h1>{user.name}</h1>
        <h1>{user.email}</h1>
        <h1>{user.phone}</h1>
        <h1>{id}</h1>
      </div>
    </>
  );
};

export default UserDetails;
