import React from "react";
import ListItem from "./components/List-item";
import PlayList from "./components/PlayList";
import { Countiner } from "./element";

const SideBar = () => {
  return (
    <Countiner>
      <div className="logo">
        <img
          src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_White-768x230.png"
          alt=""
        />
      </div>
      {/* List item */}
      <ListItem />
      {/* Play list  */}
      <PlayList />
    </Countiner>
  );
};
export default SideBar;
