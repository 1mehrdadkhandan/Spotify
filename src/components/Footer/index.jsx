import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { UseProvider } from "../../util/useContext";
import { Countiner } from "./element";
import { context } from "../../util/contant";
import InfoTrack from "./Components/InfoTrak";
import Player from "./Components/player";
import Volume from "./Components/Volume";


const Footer = () => {
  const [{ token, playing }, action] = UseProvider();

  useEffect(() => {
    const itemPlaying = async () => {
      const resp = await axios.get(
        "https://api.spotify.com/v1/me/player/currently-playing",
        {
          headers: {
            Authorization: "Bearer " + token,
            "Content-Type": "application/json",
          },
        }
      );
      if (resp.data !== "") {
        const { item } = resp.data;

        const playing = {
          name: item.name,
          id: item.id,
          artists: item.artists.map((artist) => artist.name),
          image: item.album.images[2].url,
        };
        action({ type: context.SET_PLAYING, playing });
      }
    };
    itemPlaying();
  }, [action, token]);
  console.log();
  return (
    <Countiner style={{ maxWidth: "100%" }}>
      <InfoTrack playing={playing}></InfoTrack>
      <Player />
      <Volume />
    </Countiner>
  );
};

export default Footer;
