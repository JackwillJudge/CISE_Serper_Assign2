import styled from "styled-components";

const Styles = styled.div`
  table {
    width: 75%;
    border-spacing: 0;
    border: none;
    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }
    th,
    td {
      margin: 0;
      padding: 1rem;
      border: none;
      :last-child {
        border-right: 0;
      }
    }
  }
`;
export default Styles;
