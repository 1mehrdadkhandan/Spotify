import { context } from "./contant";
export const initialState = {
  token: null,
  playList: [],
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

    default:
      break;
  }
};
