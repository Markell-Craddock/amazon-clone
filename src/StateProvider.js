import React, { createContext, useContext, useReducer } from "react";


//Preparing data layer
export const StateContext = createContext();

//Wraping the application and providing the Data Layer
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);


//Pull information fron the Data Layer
export const useStateValue = () => useContext(StateContext);
