import React from "react";
import "./JobSearch.css";
export default function JobDetails({ job }) {
  return (
    <div>
      <img src={job.url} alt="" />
      <h1>Title :{job.title}</h1>
      <h4>Company : {job.company_name}</h4>
      <h3>Job Type : {job.job_type}</h3>
      <h3>Salary : {job.salary}</h3>

      <a className="company_name" href={job.url}>
        <h2>apply here</h2>
      </a>
    </div>
  );
}
