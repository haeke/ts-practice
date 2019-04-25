import React from "react";

interface TableHeaders {
  title: string;
  id: number;
}
// The Table component lets you create a table with a dynamic title, table headers and table data inside of the table body. The headerTitles need to contain a title and id propery for each table table row that you want to create inside the table body.

const Table: React.SFC<{
  tableHeader: string;
  headerTitles: Array<TableHeaders>;
}> = ({ tableHeader, headerTitles, children }) => {
  return (
    <div className="mt-3">
      <h1 className="text-center">{tableHeader}</h1>
      <table className="table">
        <thead>
          <tr>
            {headerTitles.map(name => (
              <th key={name.id}>{name.title}</th>
            ))}
          </tr>
        </thead>
        {/* The list of table rows with corresponding  table data */}
        <tbody>{children}</tbody>
      </table>
    </div>
  );
};

export default Table;
