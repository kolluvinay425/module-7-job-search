import React, { useState } from "react";
import { Container, Row, Col, Spinner } from "react-bootstrap";
import "./JobSearch.css";
import FetchJobs from "./FetchJobs";
import { searchJobs } from "../redux/actions";
import JobResults from "./JobResults";
import { useSelector, useDispatch } from "react-redux";

function JobSearch({ details }) {
  // const [jobsData, setJobsData] = useState([]);
  // const [isSearching, setIsSearching] = useState(false);
  const [isData, setIsData] = useState(false);
  const [query, setQuery] = useState("");

  const result = useSelector((state) => state.jobsSearch.result);
  const dispatch = useDispatch();

  const searchJobss = async () => {
    dispatch(searchJobs(query));

    if (searchJobs) {
      setIsData(true);
      console.log("search results----->", result);
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
          onChange={(e) => {
            setQuery(e.target.value);
          }}
          onKeyDown={searchJobss}
          className="input"
          style={{}}
          type="text"
          placeholder="Search job openings here.."
        />
      </Row>

      <JobResults details={details} isData={isData} />
      <h3 style={{ color: "white" }}>Latest Job Postings</h3>
      <hr />
      <br />

      <FetchJobs details={details} />
    </>
  );
}

export default JobSearch;
