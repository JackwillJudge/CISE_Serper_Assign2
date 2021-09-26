import React, { Component } from "react";
import "./Pages.css";
class NotFoundPage extends Component {
  render() {
    return (
      <div>
         <div className="body-container">
        <div className="text-container">    
        <h1> Error 404.  This page does not exist</h1>
        <p>Select from the menu</p>
      </div>
      </div>
      </div>
    );
  }
} 
export default NotFoundPage;
