import { ADD_JOB_TO_FAVOURITES } from "../actions";
import { initialState } from "../store";

const favReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_JOB_TO_FAVOURITES: {
      return {
        ...state,

        // favorite: state.favorite.concat(action.payload),
        favorite: action.payload,
      };
    }
    default:
      return state;
  }
};

export default favReducer;
