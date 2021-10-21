import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Spinner } from "react-bootstrap";
import "./JobSearch.css";
import FetchJobs from "./FetchJobs";
import { searchJobs } from "../redux/actions";
import { connect } from "react-redux";
import JobResults from "./JobResults";
const mapStateToProps = (state) => ({
  results: state.jobsSearch.result,
});

const mapDispatchToProps = (dispatch) => ({
  getJobs: (input) => {
    dispatch(searchJobs(input));
  },
});

function JobSearch({ details, getJobs, results }) {
  const [jobsData, setJobsData] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [isData, setIsData] = useState(false);
  const searchJobs = async (e) => {
    getJobs(e.target.value);

    if (getJobs) {
      setIsData(true);
      console.log("search results----->", results);
    }

    // e.preventDefault();
    // try {
    //   const resp = await fetch(
    //     `https://strive-jobs-api.herokuapp.com/jobs?search=${e.target.value}`
    //   );
    //   if (resp) {
    //     const jobs = await resp.json();
    //     setJobsData(jobs);
    //     setIsData(true);
    //     setIsSearching(true);
    //     console.log("all jobs---------->", jobs.data.splice(0, 50));
    //   }
    //   //   console.log("eeeeeeeeeee", e.target.value);
    // } catch (error) {
    //   console.log(error);
    // }
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
            searchJobs(e);
            // console.log("search results----->", result);
          }}
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

export default connect(mapStateToProps, mapDispatchToProps)(JobSearch);
