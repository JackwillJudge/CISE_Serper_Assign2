import React, { Component } from "react";
import "./Pages.css";
import axios from "axios";
import Styles from "../components/tablestyle.js";
import Table from "../components/Table";
// // import {
// //   modcolumns,
// //   moderatorcolumns,
// } from "../components/moderatorcolumns.js";

const modcolumns = [
  {
    Header: "ID",
    accessor: "id",
  },
  {
    Header: "Title",
    accessor: "title",
    value: "title",
  },
  {
    Header: "Authors",
    accessor: "authors",
  },
  {
    Header: "Source",
    accessor: "source",
  },
  {
    Header: "Pub. Year",
    accessor: "pubyear",
  },
  {
    Header: "DOI",
    accessor: "doi",
  },
  {
    Header: "Claimed Benefit",
    accessor: "claim",
  },
  {
    Header: "Level of Evidence",
    accessor: "evidence",
  },
  {
    accessor: "approve",
    Cell: (cellObj) => (
      <div>
        {cellObj.value}
        <button
          className="nav-button"
          onClick={() => handleClickApproveRow(cellObj.row.index, cellObj.data)}
        >
          Approve
        </button>
      </div>
    ),
  },
  {
    accessor: "reject",
    Cell: (cellObj) => (
      <div>
        {cellObj.value}
        <button
          className="nav-button"
          onClick={() =>
            this.handleClickRejectRow(cellObj.row.index, cellObj.data)
          }
        >
          Reject
        </button>
      </div>
    ),
  },
];

function handleClickRejectRow(index, data) {
  const thisArticle = data[index];
}

function handleClickApproveRow(index, data) {
  const thisArticle = data[index];

  const uploadData = {
    title: thisArticle.title,
    author: thisArticle.author,
    source: thisArticle.source,
    published_year: thisArticle.published_year,
    doi: thisArticle.doi,
    claim: thisArticle.claim,
    evidence_level: thisArticle.evidence_level,
    practice: thisArticle.practice,
  };

  console.log(uploadData);

  axios
    .post("http://localhost:8082/api/articles", uploadData)
    .then((res) => {
      this.setState({
        title: "",
        author: "",
        source: "",
        published_year: "",
        doi: "",
        claim: "",
        practice: "",
        evidence_level: "",
      });
      this.props.history.push("/");
      handleClickRejectRow(index, data);
    })
    .catch((err) => {
      console.log(err);
    });
}

class ModeratorQueue extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      title: "",
      author: "",
      source: "",
      published_year: "",
      doi: "",
      claim: "",
      evidence_level: "",
      practice: "",
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
        console.log("Error");
      });
  }
  render() {
    const articles = this.state.articles;
    console.log("Article: " + articles);

    return (
      <div className="body-container">
        <div className="text-container">
          <h2>Moderator Queue</h2>
          <p>
            From the Moderator Queue please approve acticles which are relevant
            to the SEPER application
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
}

export default ModeratorQueue;
