/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { Button } from "react-bootstrap";

function Dashboard() {
  const history = useHistory();

  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [image, setImage] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:4000/good", {
          withCredentials: true,
        });
        setUser(res.data.username);
        setEmail(res.data.email);
        setImage(res.data.imageUrl);
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, []);

  const handleLogout = async () => {
    try {
      await axios.get("http://localhost:4000/logout", {
        withCredentials: true,
      });
      history.push("/");
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <>
      <div>
        <h1> Welcome {user}!</h1>
        <h3>{email}</h3>
      </div>
      <div>
        <img src={image} alt="no" />
      </div>
      <div className="mt-3">
        <Button onClick={handleLogout}>Logout</Button>
      </div>
    </>
  );
}

export default Dashboard;
