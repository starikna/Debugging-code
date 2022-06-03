'use strict';

function solveEquation(a, b, c) {
  let arr = [];
  let d = Math.pow(b,2) - 4 * a * c;

    if (d === 0) {
      arr[0] = -b / (2 * a);
    } 
    else if (d > 0) {
      arr[0] = (-b + Math.sqrt(d) ) / (2 * a);
      arr[1] = (-b - Math.sqrt(d) ) / (2 * a);
    }

    return arr; // array
}



function calculateTotalMortgage(percent, contribution, amount, date) {
  
  if (Number.isNaN(+percent)) {
    return `Параметр "Процентная ставка" содержит неправильное значение "${percent}"`
  } 
  else if (Number.isNaN(+contribution)) {
    return `Параметр "Начальный взнос" содержит неправильное значение "${contribution}"`
  } 
  else if (Number.isNaN(+amount)) {
    return `Параметр "Общая стоимость" содержит неправильное значение "${amount}"`
  }

  let totalAmount;
  let loanBody = (amount - contribution);//тело кредита
  let creditTerm = Math.ceil((date - new Date()) / 1000 / 3600 / 24 / 30.5);//срок кредита
  let ratePerMonth = percent / 12 / 100;
  let monthlyPayment = loanBody * (ratePerMonth + (ratePerMonth / ((Math.pow(1 + ratePerMonth, creditTerm)) - 1)))//Платеж = S * (P + (P / (((1 + P)^n) - 1))), где: S - тело кредита, P - 1/12 процентной ставки (от 0 до 1), n - количество месяцев ^ - возведение в степень


  totalAmount = (creditTerm * monthlyPayment);


  //код для задачи №2 писать здесь
  console.log(Number(totalAmount.toFixed(2)));
  return (Number(totalAmount.toFixed(2)));
}