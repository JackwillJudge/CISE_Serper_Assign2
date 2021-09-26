import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Submit from "./pages/Submit";
import Search from "./pages/Search";
import AnalystQueue from "./pages/AnalystQueue";
import ModeratorQueue from "./pages/ModeratorQueue";
import { Route, BrowserRouter as Router, Redirect } from "react-router-dom";
import CreateArticle from './components/CreateArticle';
import ShowArticleDetails from './components/ShowArticleDetails';
import UpdateArticleInfo from './components/UpdateArticleInfo';
import NotFoundPage from "./pages/404";


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
          <Route path='/create-Article' component={CreateArticle} />
          <Route path='/edit-Article/:id' component={UpdateArticleInfo} />
          <Route path='/show-Article/:id' component={ShowArticleDetails} />
          <Route path="/404" component={NotFoundPage}/>
          <Redirect to="/Home" />

        </div>
      </Router>
    </>
  );
}

export default App;
