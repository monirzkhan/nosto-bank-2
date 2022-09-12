// DRY ---> Do Not Repeat Yourself
document.getElementById('btn-deposit').addEventListener('click', function () {
  /* 
    1. get the element by id
    2. get the value from the element
    3. convert string value to a number
    */
  const newDepositAmount = getInputFieldValueById("deposit-field");
  /* 
    1. get previous deposit total by id

    */
  if (isNaN(newDepositAmount) || newDepositAmount<0) {
    alert('Please input a Number');
    return
  }
  const previousDepositTotal = getTextElementValueById("deposit-total");

  // calculate new deposit total
  const newDepositTotal = previousDepositTotal + newDepositAmount;
  console.log(newDepositTotal, previousDepositTotal, newDepositAmount);
  // set deposit total value
  setTextElementValueById("deposit-total", newDepositTotal);

  // get previous balance by using the function
  const previousBalanceTotal = setTextElementValueById("balance-total");
  const newBalanceTotal = previousBalanceTotal + newDepositAmount;
  setTextElementValueById("balance-total", newBalanceTotal);

  localStorage.setItem('Deposit', newDepositTotal)
  localStorage.setItem('Balance Total', newBalanceTotal)
  
})

const displayData = () => {
  const deposit = JSON.parse(localStorage.getItem('Deposit'))||00;
  const balanceTotal = JSON.parse(localStorage.getItem('Balance Total'))||00;
  setTextElementValueById("deposit-total", deposit);
  setTextElementValueById("balance-total", balanceTotal);
}

displayData()