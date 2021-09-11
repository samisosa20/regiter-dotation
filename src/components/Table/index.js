import * as React from "react";
import { DataGrid } from "@material-ui/data-grid";
import PropTypes from "prop-types";

const columns = [
  { field: "serial", headerName: "Serial", width: 150 },
  {
    field: "owner",
    headerName: "Owner",
    width: 150,
  },
  {
    field: "email",
    headerName: "Email",
    width: 150,
  },
  {
    field: "name",
    headerName: "name",
    width: 150,
  },
  {
    field: "system",
    headerName: "system",
    width: 150,
  },
  {
    field: "type",
    headerName: "Type",
    width: 150,
  },
  {
    field: "date",
    headerName: "Date",
    width: 150,
  },
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
  rows: [],
};

export default Table;
