import React from "react";
import "./JobSearch.css";
import { withRouter } from "react-router";
function JobDetails({ job, history }) {
  const id = () => {
    console.log(history.location.pathname); //
  };
  return (
    <div>
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
export default withRouter(JobDetails);
