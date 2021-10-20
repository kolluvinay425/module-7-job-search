export const ADD_JOB_TO_FAVOURITES = "ADD_JOB_TO_FAVOUTITES";

export const addFouriteAction = (job) => ({
  type: ADD_JOB_TO_FAVOURITES,
  payload: job,
});

export const removeFavourite = (job) => ({
  type: "REMOVE_JOB_TO_FAVOURITES",
  payload: job,
});
