interface CompoundInterestTable {
  year: number;
  interestThatYear: number;
  loanTotal: number;
}

function getRate() {
  // get the values inside of the principal, duration and interest inputs. For this to work in TypeScript the HTMLInputElement needs to be cast before we can get the valueAsNumber property on the elements.
  let principal: number = (<HTMLInputElement>(
    document.querySelector("#principal")
  )).valueAsNumber;
  const duration: number = (<HTMLInputElement>(
    document.querySelector("#duration")
  )).valueAsNumber;
  const interest: number = (<HTMLInputElement>(
    document.querySelector("#interest")
  )).valueAsNumber;

  let totalInterest: number = 0;
  let totalPrincipal = principal;
  let totalsArray: Array<CompoundInterestTable> = [];
  // iterate through the duration
  for (let i: number = 0; i < duration; i++) {
    // calculate the interest to be paid during that year
    let interestToBePaid = principal * (interest / 100);
    principal += interestToBePaid;
    // add the interestToBePaid to the principal to get he totalLoan amount.
    totalInterest += interestToBePaid;
    let loanTotalValue = totalInterest + totalPrincipal;
    totalsArray.push({
      year: i,
      interestThatYear: parseFloat(totalInterest.toFixed(2)),
      loanTotal: parseFloat(loanTotalValue.toFixed(2))
    });
  }
  console.table(totalsArray);
  totalsTable(totalsArray);
}
// Responsible for adding table row data for each year, interest and total inside the cost per year breakdown table.
function totalsTable(totalsArray: Array<CompoundInterestTable>) {
  // Get a reference to the table body element
  let body: Element = document.querySelector("#tbody");
  // Iterate through the array of CompoundInterest objects
  totalsArray.forEach((item: CompoundInterestTable) => {
    let eachRow = `<tr>
      <td>${item.year}</td>
      <td>$${item.interestThatYear.toFixed(2)}</td>
      <td>$${item.loanTotal.toFixed(2)}</td>
      </tr>`;
    // add each row to the DOM
    body.innerHTML += eachRow;
  });
}

// Get the getRateButton Selector
let calculateCompoundInterest = document.querySelector("#getRateButton");
// Add a click event that will calculate the compound interest.
calculateCompoundInterest.addEventListener("click", getRate);
