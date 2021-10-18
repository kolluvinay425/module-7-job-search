import React, { useState, useEffect } from "react";
import "./JobSearch.css";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function FetchJobs({ details }) {
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    someJobs();
  }, []);
  const someJobs = async () => {
    try {
      const resp = await fetch(
        `https://strive-jobs-api.herokuapp.com/jobs?limit=10&skip=10`
      );
      if (resp.ok) {
        const data = await resp.json();
        setJobs(data.data);
        console.log("some Jobs", data.data);
      }
    } catch (error) {}
  };
  return (
    <div>
      <Row>
        {jobs.map((job) => (
          <>
            <Col>
              <h4>Title: {job.title}</h4>
              {/* <img src={job.company_logo_url} alt={job.company_logo_url} /> */}
              <h4>Company: {job.company_name}</h4>
              <h4>
                <Link to="/details">
                  <a
                    onClick={() => details(job)}
                    className="company_name"
                    href=""
                  >
                    <span>more</span>
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
    </div>
  );
}
