import { ADD_JOB_TO_FAVOURITES, GET_JOB_DETAILS } from "../actions";
import { initialState } from "../store";

const favReducer = (state = initialState.favorite, action) => {
  switch (action.type) {
    // case ADD_JOB_TO_FAVOURITES:
    //   console.log({ state, payload: action.payload });

    //   return {
    //     // favorite: state.favorite.concat(action.payload),
    //     ...state,
    //     data: [...state.data, action.payload],
    //   };
    case ADD_JOB_TO_FAVOURITES:
      return {
        ...state,
        data: action.payload,
      };
    case "REMOVE_JOB_TO_FAVOURITES":
      return {
        ...state,
        data: state.data.data.filter((company) => company !== action.payload),
      };
    ///,///remove logic
    default:
      return state;
  }
};

export default favReducer;
