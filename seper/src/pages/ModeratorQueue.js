import React from "react";
import "./Pages.css";
import articles from "../articledata/articles.js";
import Styles from "../components/tablestyle.js";
import Table from "../components/Table";
import modcolumns from "../components/moderatorcolumns.js";

function ModeratorQueue() {
  return (
    <div className="body-container">
      <div className="text-container">
        <h2>Moderator Queue</h2>
        <p>
          From the Moderator Queue please approve acticles which are relevant to
          the SEPER application
        </p>
        <div className="table-form">
          <Styles>
            <Table data={articles} columns={modcolumns} />
          </Styles>
        </div>
      </div>
    </div>
  );
}

export default ModeratorQueue;
