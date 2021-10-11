import React from "react";
import "./Pages.css";
import articles from "../articledata/articles.js";
import Styles from "../components/tablestyle.js";
import Table from "../components/Table";
import analcolums from "../components/analystcolums";

function AnalystQueue() {
  return (
    <div className="body-container">
      <div className="text-container">
        <h2>Analyst Queue</h2>
        <p>
          From the Analyst, possible to edit and put claim and level of evidence
        </p>
        <div className="table-form">
          <Styles>
            <Table data={articles} columns={analcolums} />
          </Styles>
        </div>
      </div>
    </div>
  );
}

export default AnalystQueue;
