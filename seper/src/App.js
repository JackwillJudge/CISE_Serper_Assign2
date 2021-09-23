import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";
import Submit from "./components/pages/Submit";
import Search from "./components/pages/Search";
import AnalystQueue from "./components/pages/AnalystQueue";
import ModeratorQueue from "./components/pages/ModeratorQueue";
import { Route, BrowserRouter as Router } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <div className="content">
          <Route exact path="/" component={Home} />
          <Route exact path="/Home" component={Home} />
          <Route exact path="/ModeratorQueue" component={ModeratorQueue} />
          <Route exact path="/Submit" component={Submit} />
          <Route exact path="/Search" component={Search} />
          <Route exact path="/AnalystQueue" component={AnalystQueue} />
        </div>
      </Router>
    </>
  );
}

export default App;
