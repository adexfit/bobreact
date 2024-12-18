import React, { useState } from "react";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";

const Login = () => {
  const { user, setUser } = useContext(UserContext); //destructure the data in userContext
  const [value, setValue] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setUser(value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <p>We are Practicing Context API</p>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button type="submit">Submit</button>
        <p>Our state here is: {user} </p>
      </form>
    </div>
  );
};

export default Login;
