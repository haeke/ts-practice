import React from "react";

const CompoundTable = ({ totals }) => {
  if (totals.length > 0) {
    return (
      <div className="col-md-6 mx-auto mt-3">
        <h1 className="text-center">Cost Per Year</h1>
        <table className="table">
          <thead>
            <tr>
              <th>Year</th>
              <th>Interest that Year</th>
              <th>Loan Total</th>
            </tr>
          </thead>
          <tbody id="tbody">
            {totals.map((total: any, index: number) => (
              <tr key={index}>
                <td>{total.year}</td>
                <td>{total.interestThatYear.toFixed(2)}</td>
                <td>{total.loanTotal.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  } else {
    return null;
  }
};

export default CompoundTable;
