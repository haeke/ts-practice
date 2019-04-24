import React from "react";

interface TableHeaders {
  title: string;
  id: number;
}

const Table: React.SFC<{
  tableHeader: string;
  headerTitles: Array<TableHeaders>;
}> = ({ tableHeader, headerTitles, children }) => {
  return (
    <div className="col-md-6 mx-auto mt-3">
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
