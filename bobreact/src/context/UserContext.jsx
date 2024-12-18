import { createContext, useState } from "react";
import React from "react";

const UserContext = createContext(); //we have created the context

//We are creating a custom provider function
const UserProvider = ({ children }) => {
  const [user, setUser] = useState("Guest");

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
