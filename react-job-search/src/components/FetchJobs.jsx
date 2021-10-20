import React, { useState, useEffect } from "react";
import "./JobSearch.css";
import { Row, Col, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function FetchJobs({ details }) {
  const [isData, setIsData] = useState(false);
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
        setIsData(true);
        console.log("some Jobs", data.data);
      }
    } catch (error) {}
  };
  return (
    <div>
      <Row>
        {isData ? (
          jobs.map((job) => (
            <>
              <Col>
                <h4 className="more">Title: {job.title}</h4>
                {/* <img src={job.company_logo_url} alt={job.company_logo_url} /> */}
                <h4 className="more"> Company: {job.company_name}</h4>
                <h4>
                  <Link to={`/${job.company_name}`} className="more">
                    <a className="more" onClick={() => details(job)} href="">
                      <h4 style={{ color: "#319bad" }}>more</h4>
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
          ))
        ) : (
          <Spinner style={{ color: "white" }} animation="grow" />
        )}
      </Row>
    </div>
  );
}
