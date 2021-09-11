import * as React from "react";
import { DataGrid } from "@material-ui/data-grid";
import PropTypes from "prop-types";

const columns = [
  { field: "id", headerName: "ID", width: 200 },
  {
    field: "name",
    headerName: "Full Name",
    width: 450,
    editable: true,
  }
];

const rows = [
  { id: 1, name: "Jaime" },
  { id: 2, name: "Cersei" },
  { id: 3, name: "Jaime" },
  { id: 4, name: "Arya" },
  { id: 5, name: "Daenerys" },
  { id: 7, name: "Ferrara" },
  { id: 8, name: "Rossini" },
  { id: 9, name: "Harvey" },
];

const Table = (props) => {
  const { rows } = props;
  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
};

Table.propTypes = {
  rows: PropTypes.array,
};

Table.defaultProps = {
  rows: rows,
};

export default Table;
