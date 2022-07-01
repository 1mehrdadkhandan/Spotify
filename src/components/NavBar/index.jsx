import React from "react";
import { Countiner } from "./element";
import { AiOutlineSearch } from "react-icons/ai";
import { useEffect } from "react";
import { UseProvider } from "../../util/useContext";
import axios from "axios";

const NavBar = () => {
  const [{token,info},action] = UseProvider()
  useEffect(() => {
    const requst = ()=>{
      const {data} = axios.get()
    }
// end

    requst()
  
  }, [token,action])
  
  return (
    <Countiner>
      <div className="search">
        <AiOutlineSearch />
        <div className="InputSearch">
          <input type="search" placeholder="artist , songs , or padcasts" />
        </div>
      </div>
      <div className="username"></div>
    </Countiner>
  );
};

export default NavBar;
