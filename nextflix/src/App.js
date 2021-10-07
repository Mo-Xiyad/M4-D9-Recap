// http://www.omdbapi.com/  ==========>    API
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Galleries from "./components/Galleries";
import Navbarr from "./components/Navbarr";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Container from "react-bootstrap/Container";
import MyFooter from "./components/MyFooter";
import Search from "./components/Search";
import React from "react";
import { useState } from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MovieDetails from "./components/MovieDetails";
import Tvsohows from "./components/Tvsohows";
import Home from "./components/Home";

const App = () => {
  const [query, setQuery] = useState("");

  return (
    <div className="App">
      <Router>
        <Navbarr value={query} onChange={(e) => setQuery(e.target.value)} />
        <Route path="/home" component={Home} />
        <Route path="/tvsohows" exact component={Tvsohows} />
        <Route
          path="/movies"
          exact
          render={(routProps) => {
            return (
              query.length < 3 && (
                <Container fluid className="mb-5 px-5">
                  <>
                    <Galleries {...routProps} movie="harry potter" />
                    <Galleries {...routProps} movie="Star wars" />
                    <Galleries {...routProps} movie="Batman" />
                  </>
                </Container>
              )
            );
          }}
        />

        <Route path="/movieDetails/:movieId" component={MovieDetails} />

        {query.length > 3 && <Search query={query} />}
        <MyFooter />
      </Router>
    </div>
  );
};

export default App;
