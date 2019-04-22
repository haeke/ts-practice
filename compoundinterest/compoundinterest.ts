interface CompoundInterestTable {
  year: number;
  loanTotal: number;
}

function getRate() {
  // get the values inside of the principal, duration and interest inputs. For this to work in TypeScript the HTMLInputElement needs to be cast before we can get the valueAsNumber property on the elements.
  let principal: number = (<HTMLInputElement>(
    document.querySelector("#principal")
  )).valueAsNumber;
  console.log(principal);
  const duration: number = (<HTMLInputElement>(
    document.querySelector("#duration")
  )).valueAsNumber;
  console.log(duration);
  const interest: number = (<HTMLInputElement>(
    document.querySelector("#interest")
  )).valueAsNumber;
  console.log(interest);
  const showTotal: Element = document.querySelector("#showTotal");

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
      loanTotal: parseFloat(loanTotalValue.toFixed(2))
    });
  }
  console.table(totalsArray);
  showTotal.innerHTML = JSON.stringify(totalsArray);
}

// Get the getRateButton Selector
let calculateCompoundInterest = document.querySelector("#getRateButton");
// Add a click event that will calculate the compound interest.
calculateCompoundInterest.addEventListener("click", getRate);
