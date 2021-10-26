export const ADD_JOB_TO_FAVOURITES = "ADD_JOB_TO_FAVOUTITES";
export const GET_ALL_JOBS = "GET_ALL_JOBS";
// export const GET_JOB_DETAILS = "GET_JOB_DETAILS";
// export const addFouriteAction = (job) => ({
//   type: ADD_JOB_TO_FAVOURITES,
//   payload: job,
// });

export const removeFavourite = (job) => ({
  type: "REMOVE_JOB_TO_FAVOURITES",
  payload: job,
});

export const searchAllJobs = (jobs) => ({
  type: GET_ALL_JOBS,
  payload: jobs,
});

export const addToFavourite = (company_name) => {
  return async (dispatch) => {
    try {
      const resp = await fetch(
        `https://strive-jobs-api.herokuapp.com/jobs?company_name=${company_name}`
      );
      if (resp) {
        const job = await resp.json();
        //   setJobsData(jobs);
        //   setIsData(true);
        //   setIsSearching(true);
        dispatch({
          type: ADD_JOB_TO_FAVOURITES,
          payload: job,
        });
        console.log("one particular job---------->", job);
      }
      //   console.log("eeeeeeeeeee", e.target.value);
    } catch (error) {
      console.log(error);
    }
  };
};

export const searchJobs = (input) => {
  return async (dispatch, getState) => {
    try {
      const resp = await fetch(
        `https://strive-jobs-api.herokuapp.com/jobs?search=${input}`
      );
      if (resp) {
        const jobs = await resp.json();
        //   setJobsData(jobs);
        //   setIsData(true);
        //   setIsSearching(true);
        dispatch({
          type: GET_ALL_JOBS,
          payload: jobs,
        });
        console.log("all jobs---------->", jobs.data.splice(0, 50));
      }
      //   console.log("eeeeeeeeeee", e.target.value);
    } catch (error) {
      console.log(error);
    }
  };
};
