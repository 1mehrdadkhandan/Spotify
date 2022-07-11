import { context } from "./contant";
export const initialState = {
  token: null,
  playList: [],
  info: {},
  selectedPlayList: "37i9dQZF1E34TKFCpld9o8",
  sPlayList: null,
  playing: null,
  playerState: false,
};

export const Reduce = (state, action) => {
  switch (action.type) {
    case context.SET_TOKEN:
      return {
        ...state,
        token: action.token,
      };
    case context.SET_PLAYLIST:
      return {
        ...state,
        playList: action.playList,
      };
    case context.SET_INFO:
      return {
        ...state,
        info: action.info,
      };
    case context.SELECT_PLAYLIST:
      return {
        ...state,
        sPlayList: action.sPlayList,
      };
    case context.SET_PLAYING:
      return {
        ...state,
        playing: action.playing,
      };
    case context.SET_STATE_PLAYER:
      return {
        ...state,
        playerState: action.playerState,
      };
    case context.SET_PLAYLIST_ID:
      return {
        ...state,
        selectedPlayList: action.selectedPlayList,
      };

    default:
      break;
  }
};
