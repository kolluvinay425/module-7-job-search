import React from "react";
import "./JobSearch.css";
import { withRouter } from "react-router";
import { Button } from "react-bootstrap";
import { connect, useSelector } from "react-redux";
import { addToFavourite } from "../redux/actions";
import { useDispatch } from "react-redux";
// const mapStateToProps = (state) => ({
//   favorite: state.favorite,
// });

// const mapDispatchToProps = (dispatch, state) => (
//   {
//     addToFav: (job) => {
//       console.log("my state", state);
//       dispatch(addFouriteAction(job));
//     },
//   },
//   {
//     removeFromFav: (job) => {
//       dispatch(removeFavourite(state.jobsSearch.result._id !== job._id));
//     },
//   }
// );

function JobDetails({ job, history, favorite }) {
  // const isFavourite = useSelector((state) =>
  //   state.favorite.data.find((t) => t._id !== job._id)
  // );
  // const toggle = () => {
  //   if (isFavourite === undefined) {
  //     addToFav({ job });
  //   } else {
  //     removeFromFav(job);
  //   }
  //   console.log("sateeeeee", isFavourite);
  // };
  // const isFavourite = useSelector(
  //   (state) => state
  // );
  const dispatch = useDispatch();
  const getJob = async () => {
    dispatch(addToFavourite(job.company_name));
  };
  // const id = () => {
  //   console.log(history.location.pathname); //
  // };
  console.log({ favorite });
  // const state = useSelector((state) => state);
  // console.log({ state });
  return (
    <div>
      <Button onClick={() => getJob()}>add To Favorite</Button>
      <img src={job.url} alt="" />
      <h1 className="more">Title :{job.title}</h1>
      <h4 className="more">Company : {job.company_name}</h4>
      <h3 className="more">Job Type : {job.job_type}</h3>
      <h3 className="more">Salary : {job.salary}</h3>
      <a className="more" href={job.url}>
        <h2 style={{ color: "#319bad" }}>apply here</h2>
      </a>
      <p style={{ color: "#9d9da3" }} className="more">
        Description: {job.description}
      </p>
    </div>
  );
}
export default JobDetails;
