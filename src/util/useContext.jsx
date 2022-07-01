import { createContext, useContext, useReducer } from "react";

export const Statecontext = createContext();
export const StateProvider = ({ children, initialState, reducer }) => {

    return(
    
<Statecontext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </Statecontext.Provider>
  )
};

export const UseProvider = () => useContext(Statecontext);
