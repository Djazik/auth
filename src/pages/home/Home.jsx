import React from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import Header from "../../components/header/Header";
import Login from "../login/Login";

const Home = () => {
  return (
    <div className="home">
      <Header />
      <Login />
    </div>
  );
};

export default Home;
