

function calculateInterest(amount,interest, years){
  
  return years === 1 ? amount + ((interest/100) * amount)
    : calculateInterest((amount + ((interest/100) * amount)), interest,years -1)
  
}

console.log(calculateInterest(20000, 16.36, 3))