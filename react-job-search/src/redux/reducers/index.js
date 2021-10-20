import { ADD_JOB_TO_FAVOURITES } from "../actions";
import { initialState } from "../store";

const favReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_JOB_TO_FAVOURITES: {
      return {
        ...state,
        jobs: {
          ...state.jobs,
          favorite: state.jobs.favorite.concat(action.payload),
        },
      };
    }
  }
};

export default favReducer;
