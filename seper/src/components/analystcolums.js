import { NavLink } from "react-router-dom";
import OnClick from "./OnClick";

const analcolums = [
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
    accessor: "edit",
    Cell: (cellObj) => (
      <div>
        {cellObj.value}
        <NavLink
          to={`/edit-article/${analcolums.id}`}
          className="nav-iten"
        >
          Edit
        </NavLink>
      </div>
    ),
  }
     
];

export default analcolums;
