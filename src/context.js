import React, { useState, createContext } from "react";

// Create Context Object
export const DropDownContext = createContext();

// Create a provider for components to consume and subscribe to changes
export const DropDownContextProvider = props => {
  const [isOpen, setisOpen] = useState(false);

  return (
    <DropDownContext.Provider value={[isOpen, setisOpen]}>
      {props.children}
    </DropDownContext.Provider>
  );
};