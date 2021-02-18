import React, { useState } from "react";
export const loginState = React.createContext();

const loginContext = (props) => {
  const [isLoginMatched, setIsMatched] = useState(false);
  return (
    <loginContext.Provider value={{ isLoginMatched }}>
      {props.children}
    </loginContext.Provider>
  );
};

export default loginContext;
