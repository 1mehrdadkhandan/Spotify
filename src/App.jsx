import React, { useEffect } from "react";
import Login from "./pages/Login";
import Spotify from "./pages/Spotify";
import { context } from "./util/contant";
import { UseProvider } from "./util/useContext";

const App = () => {
  const [{ token }, action] = UseProvider();
  useEffect(() => {
    let hash = window.location.hash;
    let token = hash.substring(1);
    token = token.split("&")[0].split("=")[1];
    action({ type: context.SET_TOKEN, token });
  }, [token, action]);

  return token ? <Spotify /> : <Login />;
};

export default App;
