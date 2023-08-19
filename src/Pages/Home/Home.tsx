import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Component1 from "../../assets/components/component1/component1";
import Component2 from "../../assets/components/component2/Component2";
import { Button } from "@mui/material";

const Home = () => {
  const user = localStorage.getItem("user");
  console.log(localStorage.getItem("user"));
  const Navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      Navigate("/");
    }
  }, []);

  return (
    <>
      {user && (
        <div>
          <Component1 />
          <hr />
          <Component2 />
        </div>
      )}
    </>
  );
};

export default Home;
