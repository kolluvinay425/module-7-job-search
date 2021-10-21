import { ADD_JOB_TO_FAVOURITES } from "../actions";
import { initialState } from "../store";

const favReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_JOB_TO_FAVOURITES:
      console.log({ state, payload: action.payload });

      return {
        // favorite: state.favorite.concat(action.payload),
        ...state,
        data: [...state.data, action.payload],
      };

    default:
      return state;
  }
};

export default favReducer;
