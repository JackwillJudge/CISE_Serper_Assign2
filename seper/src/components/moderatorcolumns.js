import OnClick from "../components/OnClick";
import React, { Component } from "react";

function handleClickApproveRow(index, props) {
  console.log(index);
  console.log();
}

const modcolumns = [
  {
    Header: "ID",
    accessor: "id",
  },
  {
    Header: "Title",
    accessor: "title",
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
          onClick={() =>
            handleClickApproveRow(cellObj.row.index, cellObj.props)
          }
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
            OnClick.handleClickRejectRow(cellObj.row.index, cellObj.value)
          }
        >
          Reject
        </button>
      </div>
    ),
  },
];

class moderatorcolumns extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
}

export { modcolumns, moderatorcolumns };
