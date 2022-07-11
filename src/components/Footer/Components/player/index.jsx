import axios from "axios";
import React from "react";
import {
  BsFillPlayCircleFill,
  BsFillPauseCircleFill,
  BsShuffle,
} from "react-icons/bs";
import { CgPlayTrackNext, CgPlayTrackPrev } from "react-icons/cg";
import { FiRepeat } from "react-icons/fi";
import { context } from "../../../../util/contant";
import { UseProvider } from "../../../../util/useContext";
import { Countiner } from "./element";
const Player = () => {
  const [{ playerState, token }, action] = UseProvider();

  const handelMusic = async (value) => {
    await axios.post(
      `https://api.spotify.com/v1/me/player/${value}  `,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );
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
  const playState = async () => {
    const state = playerState ? "pause" : "play";
    await axios.put(
      `https://api.spotify.com/v1/me/player/${state}`,
      {},
      {
        headers: {
          Authorization: "Bearer " + token,
          "Content-Type": "application/json",
        },
      }
    );
    console.log(playerState);
    action({ type: context.SET_STATE_PLAYER, playerState: !playerState });
  };
  return (
    <Countiner>
      <div className="shuffle">
        <BsShuffle />
      </div>
      <div
        onClick={() => {
          handelMusic("previous");
        }}
        className="prev"
      >
        <CgPlayTrackPrev />
      </div>

      <div onClick={playState} className="state">
        {playerState ? <BsFillPauseCircleFill /> : <BsFillPlayCircleFill />}
      </div>
      <div className="next">
        <CgPlayTrackNext
          onClick={() => {
            handelMusic("next");
          }}
        />
      </div>
      <div className="reapeat">
        <FiRepeat />
      </div>
    </Countiner>
  );
};

export default Player;
