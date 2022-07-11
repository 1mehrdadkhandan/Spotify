import React from "react";
import { Countiner } from "./element";
import { AiOutlineSearch } from "react-icons/ai";
import {RiAccountPinCircleFill} from 'react-icons/ri'
import { useEffect } from "react";
import { UseProvider } from "../../util/useContext";
import axios from "axios";
import { context } from "../../util/contant";
const NavBar = ({bgColor}) => {
  const [{ token,info }, action] = UseProvider();
  useEffect(() => {
    const requst = async () => {
      const { data } = await axios.get("https://api.spotify.com/v1/me ", {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      const info = {
        name: data.display_name,
        id: data.id,
      };
      action({ type: context.SET_INFO, info });
    };
    // end

    requst();
  }, [token, action]);

  return (
    <Countiner bgColor={bgColor}>
      <div className="search">
        <AiOutlineSearch />
        <div className="InputSearch">
          <input type="search" placeholder="artist , songs , or padcasts" />
        </div>
      </div>
      <div className="username">
        <RiAccountPinCircleFill />
          <span>{info ? info.name : null}</span>
      </div>
    </Countiner>
  );
};

export default NavBar;
