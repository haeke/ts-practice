function getRate() {
    // get the values inside of the principal, duration and interest inputs. For this to work in TypeScript the HTMLInputElement needs to be cast before we can get the valueAsNumber property on the elements.
    var principal = (document.querySelector("#principal")).valueAsNumber;
    console.log(principal);
    var duration = (document.querySelector("#duration")).valueAsNumber;
    console.log(duration);
    var interest = (document.querySelector("#interest")).valueAsNumber;
    console.log(interest);
    var showTotal = document.querySelector("#showTotal");
    var totalInterest = 0;
    var totalPrincipal = principal;
    var totalsArray = [];
    // iterate through the duration
    for (var i = 0; i < duration; i++) {
        // calculate the interest to be paid during that year
        var interestToBePaid = principal * (interest / 100);
        principal += interestToBePaid;
        // add the interestToBePaid to the principal to get he totalLoan amount.
        totalInterest += interestToBePaid;
        var loanTotalValue = totalInterest + totalPrincipal;
        totalsArray.push({
            year: i,
            loanTotal: parseFloat(loanTotalValue.toFixed(2))
        });
    }
    console.table(totalsArray);
    showTotal.innerHTML = JSON.stringify(totalsArray);
}
// Get the getRateButton Selector
var calculateCompoundInterest = document.querySelector("#getRateButton");
// Add a click event that will calculate the compound interest.
calculateCompoundInterest.addEventListener("click", getRate);
