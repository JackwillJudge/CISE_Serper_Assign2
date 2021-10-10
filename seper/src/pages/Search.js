import React, { Component } from "react";
import axios from "axios";
import "./Pages.css";
import Styles from "../components/tablestyle.js";
import Table from "../components/Table";
import tablecolumns from "../components/tablecolumns.js";
import Dropdown from "../components/Dropdown.js";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:8082/api/articles")
      .then((res) => {
        this.setState({
          articles: res.data,
        });
      })
      .catch((err) => {
        console.log("Error from Search");
      });
  }

  render() {
    const articles = this.state.articles;
    console.log("Article: " + articles);

    // function Search() {
    return (
      <div className="body-container">
        <div className="text-container">
          <h2> SE Practice List</h2>
          <p>Select SE Practice to get evidence for the claimed benefits</p>
          <Dropdown />
          <div className="table-form">
            <Styles>
              <Table data={articles} columns={tablecolumns} />
            </Styles>
          </div>
        </div>
      </div>
    );
  }
}

export default Search;
