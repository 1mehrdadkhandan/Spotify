import axios from "axios";
import React from "react";
import styled from "styled-components";
import { UseProvider } from "../../../../util/useContext";

const Volume = () => {
  const [{ token }] = UseProvider();
  const setVolume = async (e) => {
    await axios.put(
      "https://api.spotify.com/v1/me/player/volume",
      {},
      {
        params: {
          volume_percent: parseInt(e.target.value),
        },
        headers: {
          Authorization: "Bearer " + token,
          "Content-Type": "application/json",
        },
      }
    );
  };
  return (
    <Countiner>
      <input
        type="range"
        min={0}
        max={100}
        onMouseUp={(e) => {
          setVolume(e);
        }}
      />
    </Countiner>
  );
};

export default Volume;

const Countiner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  input {
    width: 15rem;
    border-radius: 2rem;
    height: 0.5rem;
  }
`;
