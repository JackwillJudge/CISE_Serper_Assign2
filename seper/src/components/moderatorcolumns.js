import OnClick from "../components/OnClick";

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
            OnClick.handleClickApproveRow(cellObj.row.index, cellObj.value)
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

export default modcolumns;
