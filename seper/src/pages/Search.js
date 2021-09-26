import React from "react";
import axios from "axios";
import "./Pages.css";
import "../App.css";
import articles from "../articledata/articles.js";
import Styles from "../components/tablestyle.js";
import Table from "../components/Table";
import tablecolumns from "../components/tablecolumns.js";
import Dropdown from "../components/Dropdown.js";



function Search() {
  return (
    <div className="body-container">
      <div className="text-container">      
          <h1>Select SE Practice to get evidence for the claimed benefits</h1>
               <Styles>
                 <Table
                  data={articles}
                  columns={tablecolumns}
                 />
              </Styles>
</div>
    </div>
  );
}

export default Search;
