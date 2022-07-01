import axios from "axios";
import React, { useEffect } from "react";
import { context } from "../../../util/contant";
import { UseProvider } from "../../../util/useContext";

const PlayList = () => {
  const [{ playList, token }, action] = UseProvider();
  useEffect(() => {
    const getPlayList = async () => {
      const { data } = await axios.get(
        "https://api.spotify.com/v1/me/playlists",
        {
          headers: {
            Authorization: "Bearer " + token,
            "Content-Type": "application/json",
          },
        }
      );
        const {items} = data
        action({type:context.SET_PLAYLIST , playList:items})
        };
    getPlayList();

  }, [action,token]);
  return (
    <div className="playList">
      <h3>Play List</h3>
      <ul>
          {playList.map(({id,name})=>{
            return  (<li key = {id}>{name}</li>)
          })} 
      </ul>
    </div>
  );
};

export default PlayList;
