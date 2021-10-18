import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import "./JobSearch.css";
import FetchJobs from "./FetchJobs";
export default function JobSearch({ details }) {
  const [jobsData, setJobsData] = useState([]);
  //   const [inputValue, setInputValue] = useState("");

  const searchJobs = async (e) => {
    e.preventDefault();
    try {
      const resp = await fetch(
        `https://strive-jobs-api.herokuapp.com/jobs?search=${e.target.value}`
      );
      if (resp) {
        const jobs = await resp.json();
        setJobsData(jobs);
        console.log("all jobs---------->", jobs.data.splice(0, 50));
      }
      //   console.log("eeeeeeeeeee", e.target.value);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Row>
        <h3 className="center">Job search Engine</h3>
        <hr />

        <input
          onChange={(e) => searchJobs(e)}
          className="input"
          type="text"
          placeholder="Search job openings here.."
        />
      </Row>

      <Row>
        <br />
        <br />
        {jobsData.data?.splice(0, 9).map((job) => (
          <>
            <h1>search results</h1>
            <Col>
              <h4>Title: {job.title}</h4>
              {/* <img src={job.company_logo_url} alt={job.company_logo_url} /> */}
              <h4>
                Company Name:{" "}
                <Link to="/details">
                  <a
                    onClick={() => details(job)}
                    className="company_name"
                    href=""
                  >
                    <span>{job.company_name}</span>
                  </a>
                </Link>
              </h4>
              {/* <p>
                <span className="bold">Description:</span>
                {job.description}
              </p> */}
            </Col>
            <hr />
          </>
        ))}
      </Row>
      <h1>Latest Job Postings</h1>
      <hr />
      <br />
      <FetchJobs details={details} />
    </>
  );
}
