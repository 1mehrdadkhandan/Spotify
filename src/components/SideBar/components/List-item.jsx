import { AiOutlineSearch } from "react-icons/ai";
import { VscHome, VscLibrary } from "react-icons/vsc";
import React from "react";

function ListItem() {
  return (
    <div className="list-item">
      <ul>
        <li>
          <VscHome />
          <span>Home</span>
        </li>
        <li>
          <AiOutlineSearch />
          <span>Search</span>
        </li>
        <li>
          <VscLibrary />
          <span>Your Library</span>
        </li>
      </ul>
    </div>
  );
}
export default ListItem