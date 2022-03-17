import { useRouter } from "next/router";
import React from "react";
import { Button, Card } from "react-bootstrap";
import NavBar from "../components/Common/NavBar";

const User = ({ users }) => {
const router = useRouter ()
  return (
      <>
    <NavBar />
    <div className="container">

      <h1>User</h1>
      <div className="row">
        {users.map((user) => (
          <div key={user.id} className="col-lg-3 col-md-4 col-sm-6 col-xs-12 mb-3">
            <div >
              <Card >
                <Card.Img variant="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/User_font_awesome.svg/2048px-User_font_awesome.svg.png" />
                <Card.Body>
                  <Card.Title>{user.name}</Card.Title>
                  <Card.Text>
                   <p>email: {user.email}</p>
                   <p>email: {user.phone}</p>
                  </Card.Text>
                  <Button variant="primary" onClick={()=>router.push(`/userDetails/${user.id}`)}>Details</Button>
                </Card.Body>
              </Card>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export const getServerSideProps = async (pageContext) => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();
  console.log(users);

  return {
    props: {
      users: users,
    },
  };
};

export default User;
