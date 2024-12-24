import "react-data-grid/lib/styles.css";
import DataGrid from "react-data-grid";

const Datagrid = ({ columns, rows }) => {
  function rowKeyGetter(row) {
    return row.id;
  }
  if (!rows || rows.length === 0 || !columns || columns.length === 0) {
    return <div>No data to display.</div>;
  }

  return (
    <DataGrid
      columns={columns}
      rows={rows}
      rowKeyGetter={rowKeyGetter}
      rowHeight={45}
    />
  );
};

export default Datagrid;
