import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Spinner } from "react-bootstrap";
import "./JobSearch.css";
import FetchJobs from "./FetchJobs";
export default function JobSearch({ details }) {
  const [jobsData, setJobsData] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [isData, setIsData] = useState(false);
  const searchJobs = async (e) => {
    e.preventDefault();
    try {
      const resp = await fetch(
        `https://strive-jobs-api.herokuapp.com/jobs?search=${e.target.value}`
      );
      if (resp) {
        const jobs = await resp.json();
        setJobsData(jobs);
        setIsData(true);
        setIsSearching(true);
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
        <h3 className="center" style={{ color: "white" }}>
          Job search Engine
        </h3>
        <br />

        <input
          onChange={(e) => searchJobs(e)}
          className="input"
          style={{}}
          type="text"
          placeholder="Search job openings here.."
        />
      </Row>
      <br />

      <Row>
        {isData && <h1 className="more">search results</h1>}

        {jobsData.data?.splice(0, 9).map((job) => (
          <>
            <Col>
              <h4>Title: {job.title}</h4>
              {/* <img src={job.company_logo_url} alt={job.company_logo_url} /> */}
              <h4>
                Company Name:{" "}
                <Link to={`/${job.company_name}`} className="more">
                  <a
                    style={{ color: "#319bad" }}
                    onClick={() => details(job)}
                    className="more"
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
            <hr style={{ color: "#dce0dd" }} />
          </>
        ))}
      </Row>
      <h3 style={{ color: "white" }}>Latest Job Postings</h3>
      <hr />
      <br />
      <FetchJobs details={details} />
    </>
  );
}
