import React, { Component } from "react";

import CompoundTable from "../CompoundTable/CompoundTable";
import CompoundInputField from "../CompoundInputField/CompoundInputField";

interface CompoundInterestTable {
  year: number;
  interestThatYear: number;
  loanTotal: number;
}

interface State {
  principal: number;
  duration: number;
  interest: number;
  totals: Array<CompoundInterestTable>;
}

class CompoundInterest extends Component<{}, State> {
  state = {
    principal: 0,
    duration: 0,
    interest: 0,
    year: 0,
    interestThatYear: 0,
    loanTotal: 0,
    totals: []
  };

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    } as any);
  };

  handleSubmit = event => {
    event.preventDefault();

    this.calculateTotals();
  };

  calculateTotals = () => {
    let { principal, duration, interest } = this.state;
    // cast the values inside of state into numbers that we can do maths.
    const interestValues = {
      principal: Number(principal),
      duration: Number(duration),
      interest: Number(interest)
    };
    let totalInterest = 0;
    let totalPrincipal = interestValues.principal;
    let totalsArray: Array<CompoundInterestTable> = [];
    // calculate the year, interestToBePaid and loanTotal for each year of the loan
    for (let i: number = 0; i < interestValues.duration; i++) {
      // calculate the interest to be paid during that year
      let interestToBePaid: number =
        interestValues.principal * (interestValues.interest / 100);
      interestValues.principal += interestToBePaid;
      // add the interestToBePaid to the principal to get he totalLoan amount.
      totalInterest += interestToBePaid;
      let loanTotalValue: number = totalInterest + totalPrincipal;
      totalsArray.push({
        year: i,
        interestThatYear: totalInterest,
        loanTotal: loanTotalValue
      });
    }

    this.setState({
      principal: 0,
      duration: 0,
      interest: 0,
      totals: totalsArray
    });
  };
  render() {
    const { principal, duration, interest, totals } = this.state;
    return (
      <>
        <div className="col-md-6 mx-auto">
          <CompoundInputField
            labelName="Principal Amount"
            inputName="principal"
            inputValue={principal}
            inputType="number"
            placeholderName="Amount in $"
            inputDescription="The principal amount that you want calculated."
            handleChange={this.handleChange}
          />
          <CompoundInputField
            labelName="Duration In Years"
            inputName="duration"
            inputValue={duration}
            inputType="number"
            placeholderName="Duration in years."
            inputDescription=" The duration of the loan in years."
            handleChange={this.handleChange}
          />
          <CompoundInputField
            labelName="Interest Rate In %"
            inputName="interest"
            inputValue={interest}
            inputType="number"
            placeholderName="Interest Rate."
            inputDescription="The interest rate that you enter will be divided by 100."
            handleChange={this.handleChange}
          />
          <button
            type="button"
            onClick={this.handleSubmit}
            className="btn btn-primary"
          >
            Get Rates
          </button>
        </div>
        <CompoundTable totals={totals} />
      </>
    );
  }
}

export default CompoundInterest;
