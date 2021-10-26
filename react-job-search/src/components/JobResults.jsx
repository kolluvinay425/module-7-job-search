import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Container, Row, Col, Spinner } from "react-bootstrap";
function JobResults({ jobsSearch, details, isData }) {
  console.log("resultsssssssssssss--------->", jobsSearch);
  return (
    <div>
      <Row>
        {isData && <h1 className="more">search results</h1>}

        {jobsSearch.result?.data?.slice(0, 9).map((job) => (
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
    </div>
  );
}

export default connect((s) => s)(JobResults);
