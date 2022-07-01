import React from "react";
import { Countiner, LinkSpot, LogoSpotify } from "./element";

const Login = () => {
  const key = "a7bfdc2b818648539fddc6434976a7fe";
  const redirect = "http://localhost:3000";
  const scope = [
    "user-follow-modify",
    "user-follow-read",
    "app-remote-control",
    "playlist-read-collaborative",
    "playlist-modify-public",
    "playlist-read-private",
    "playlist-modify-private",
    "streaming",
  ];
  console.log();
  const url = `https://accounts.spotify.com/authorize?response_type=token&client_id=${key}&redirect_uri=${redirect}&scope=${scope.join(
    " "
  )}`;

  const getUrl = () => {
    window.location.href = url;
  };
  return (
    <Countiner>
      <LogoSpotify>
        <img src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png" />
      </LogoSpotify>

      <LinkSpot onClick={getUrl}>Conect Spotify</LinkSpot>
    </Countiner>
  );
};

export default Login;
