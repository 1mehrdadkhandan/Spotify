import axios from "axios";
import React, { useEffect } from "react";
import { context } from "../../util/contant";
import { UseProvider } from "../../util/useContext";
import { Countiner } from "./element";
import { AiOutlineClockCircle } from "react-icons/ai";

const BodyE = ({ bgColor }) => {
  const [{ token, selectedPlayList, sPlayList }, action] = UseProvider();
  useEffect(() => {
    const requset = async () => {
      // requst
      const { data } = await axios.get(
        `https://api.spotify.com/v1/playlists/${selectedPlayList}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      // selected data
      const selected = {
        name: data.name,
        id: data.id,
        image: data.images[0].url,
        // selecet tracks
        tracks: data.tracks.items.map(({ track }) => {
          const { id, name } = track;

          return {
            id,
            name,
            duration: track.duration_ms,
            artists: track.artists.map((artist) => artist.name),
            image: track.album.images[2].url,
            album: track.album.name,
            context_uri: track.album.uri,
            track_number: track.track_number,
          };
        }),
      };
      action({
        type: context.SELECT_PLAYLIST,
        sPlayList: selected,
      });
    };
    requset();
  }, [token, action, selectedPlayList]);

  const transformTime = (ms) => {
    const minutes = Math.floor(ms / 60000);
    const secends = ((ms % 60000) / 1000).toFixed(0);
    return `${minutes}:${secends < 10 ? "0" : ""}${secends}`;
  };

  const playTrack = async (
    artists,
    name,
    id,
    image,
    context_uri,
    track_number
  ) => {
    const res = await axios.put(
      `https://api.spotify.com/v1/me/player/play  `,
      {
        context_uri,
        offset: {
          position: track_number - 1,
        },
        position_ms: 0,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );
    if (res.status === 204) {
      const playing = {
        id,
        name,
        image,
        artists,
      };
      action({type:context.SET_PLAYING,playing})
      action({type:context.SET_STATE_PLAYER,playerState:true})
    }
  };

  return (
    <Countiner bgColor={bgColor}>
      {sPlayList && (
        <>
          <div className="playList">
            <div className="image">
              <img src={sPlayList.image} alt="selected play list " />
            </div>
            <div className="details">
              <span className="type">PLAYLIST</span>
              <h1 className="title">{sPlayList.name}</h1>
              <p className="discription"></p>
            </div>
          </div>
          <div className="list">
            <div className="headerRow">
              <div className="col">
                <span>#</span>
              </div>
              <div className="col">
                <span>Title</span>
              </div>
              <div className="col">
                <span>Album</span>
              </div>
              <div className="col">
                <span>
                  <AiOutlineClockCircle />
                </span>
              </div>
            </div>
            <div className="tracks">
              {sPlayList.tracks.map(
                (
                  {
                    name,
                    id,
                    artists,
                    image,
                    duration,
                    album,
                    context_uri,
                    track_number,
                  },
                  index
                ) => {
                  return (
                    <div
                      onClick={() => {
                        playTrack(
                          artists,
                          name,
                          id,
                          image,
                          context_uri,
                          track_number
                        );
                      }}
                      className="row"
                      key={id}
                    >
                      <div className="col">
                        <span>{index + 1} </span>
                      </div>
                      <div className="col detail">
                        <div className="image">
                          <img src={image} alt="" />
                        </div>
                        <div className="info">
                          <span className="name">{name}</span>
                          <span className="artists">{artists}</span>
                        </div>
                      </div>
                      <div className="col">
                        <span>{album}</span>
                      </div>
                      <div className="col">
                        <span> {transformTime(duration)}</span>
                      </div>
                    </div>
                  );
                }
              )}
            </div>
          </div>
        </>
      )}
    </Countiner>
  );
};

export default BodyE;
