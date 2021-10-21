import { GET_ALL_JOBS } from "../actions";
import { initialState } from "../store";

const jobSearchReducer = (state = initialState.jobsSearch, action) => {
  switch (action.type) {
    case GET_ALL_JOBS:
      return {
        ...state,
        results: action.payload,
      };
    default: {
      return state;
    }
  }
};
export default jobSearchReducer;
