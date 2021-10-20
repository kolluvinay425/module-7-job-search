import React from "react";
import "./JobSearch.css";
import { withRouter } from "react-router";
import { Button } from "react-bootstrap";
import { connect, useSelector } from "react-redux";
import { addFouriteAction } from "../redux/actions";

const mapStateToProps = (state) => ({
  favorite: state,
});

const mapDispatchToProps = (dispatch) => ({
  addToFav: (job) => {
    dispatch(addFouriteAction(job));
  },
});

function JobDetails({ job, history, addToFav, favorite }) {
  const id = () => {
    console.log(history.location.pathname); //
  };
  console.log({ favorite });
  const state = useSelector((state) => state);
  console.log({ state });
  return (
    <div>
      <Button
        onClick={() => {
          addToFav(job);
        }}
      >
        add To Favorite
      </Button>
      <img src={job.url} alt="" />
      <h1 onClick={id} className="more">
        Title :{job.title}
      </h1>
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
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(JobDetails));
