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
      <Container>
        <Row>
          <Link className="company_name" to="/">
            <h1>Job portal</h1>
          </Link>
        </Row>

        <Route path="/" exact render={() => <JobSearch details={details} />} />

        <Route
          path="/details"
          exact
          render={() => <JobDetails job={jobDetails} />}
        />
      </Container>
    </Router>
  );
}

export default App;
