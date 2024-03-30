"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let x1;
  let x2;
  let d = Math.pow(b, 2) - (4 * a * c);

 if (d > 0) {
    x1 = (-b + Math.sqrt(d) ) / (2 * a);
    x2 = (-b - Math.sqrt(d) ) / (2 * a);
    arr.push(x1, x2);
 } else if (d === 0) {
    x1 = -b / (2 * a);
    arr.push(x1);
 }

  return arr;
  
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
   let percentNew = percent / 100;
   let monthlyPercent = percentNew / 12;
   let creditBody = amount - contribution;
   let monthPayment = creditBody * (monthlyPercent + (monthlyPercent / (((1 + monthlyPercent) ** countMonths) - 1)));
   let fullPayment = +((monthPayment * countMonths).toFixed(2));
   return fullPayment;
 }
