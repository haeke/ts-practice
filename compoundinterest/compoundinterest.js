function getRate() {
    // get the values inside of the principal, duration and interest inputs. For this to work in TypeScript the HTMLInputElement needs to be cast before we can get the valueAsNumber property on the elements.
    var principal = (document.querySelector("#principal")).valueAsNumber;
    var duration = (document.querySelector("#duration")).valueAsNumber;
    var interest = (document.querySelector("#interest")).valueAsNumber;
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
            interestThatYear: parseFloat(totalInterest.toFixed(2)),
            loanTotal: parseFloat(loanTotalValue.toFixed(2))
        });
    }
    console.table(totalsArray);
    totalsTable(totalsArray);
}
function totalsTable(totalsArray) {
    var body = document.querySelector("#tbody");
    totalsArray.forEach(function (item) {
        var eachRow = "<tr>\n      <td>" + item.year + "</td>\n      <td>$" + item.interestThatYear + "</td>\n      <td>$" + item.loanTotal + "</td>\n      </tr>";
        body.innerHTML += eachRow;
    });
}
// Get the getRateButton Selector
var calculateCompoundInterest = document.querySelector("#getRateButton");
// Add a click event that will calculate the compound interest.
calculateCompoundInterest.addEventListener("click", getRate);
