import "./App.css";
import "../src/components/JobSearch.css";
import "bootstrap/dist/css/bootstrap.min.css";
import JobSearch from "./components/JobSearch";
import { useState } from "react";
import { Route, Link } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Container, Row } from "react-bootstrap";
import JobDetails from "./components/JobDetails";
{
  /* <Router>
      <Container>
        <Row>
          <Col sm={12} className="text-center background-div">
            <Link to="/">
              <h1>Strivazon Book Store</h1>
            </Link>
          </Col>
          <CartIndicator cartLength={cart.length} />
        </Row>
        <hr />
        <Route path="/" exact render={(routerProps) => <BookStore {...routerProps} addItemToCart={addItemToCart} />} />
        <Route
          path="/cart"
          exact
          render={(routerProps) => <Cart {...routerProps} cart={cart} removeItemFromCart={removeItemFromCart} />}
        />
      </Container>
    </Router> */
}
function App() {
  const [jobDetails, setJobDetails] = useState({});
  const details = (job) => {
    setJobDetails(job);
  };
  return (
    <Router>
      <div className="body" style={{ background: "#272927" }}>
        <Container>
          <Row>
            <Link className="more" to="/">
              <h1 style={{ color: "#0f0ff5" }}>Job portal</h1>
            </Link>
          </Row>

          <Route
            path="/"
            exact
            render={() => <JobSearch details={details} />}
          />

          <Route
            path="/:id"
            exact
            render={() => <JobDetails job={jobDetails} />}
          />
        </Container>
      </div>
    </Router>
  );
}

export default App;
