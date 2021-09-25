import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Submit from "./pages/Submit";
import Search from "./pages/Search";
import AnalystQueue from "./pages/AnalystQueue";
import ModeratorQueue from "./pages/ModeratorQueue";
import { Route, BrowserRouter as Router } from "react-router-dom";
import CreateArticle from './components/CreateArticle';
//article list here
import ShowArticleDetails from './components/ShowArticleDetails';
import UpdateArticleInfo from './components/UpdateArticleInfo';

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
          {/* Article list here */}
          <Route path='/create-Article' component={CreateArticle} />
          <Route path='/edit-Article/:id' component={UpdateArticleInfo} />
          <Route path='/show-Article/:id' component={ShowArticleDetails} />
        </div>
      </Router>
    </>
  );
}

export default App;
