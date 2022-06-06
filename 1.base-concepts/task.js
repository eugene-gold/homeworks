function solveEquation(a, b, c) {
  let arr;
  // код для задачи №1 писать здесь
  "use strict"
  arr = [];
  let discr = Math.pow(b,2) - 4 * a * c;

  // if (discr < 0) return 
    
  
  if (discr===0) {
    arr.push(-b/(2*a))

  }
  if (discr > 0) {
    arr.push((-b + Math.sqrt(discr))/(2*a));
    arr.push((-b - Math.sqrt(discr))/(2*a));
  }

  return arr; // array
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;

  // код для задачи №2 писать здесь
  "use strict"
  let p = parseInt(percent) / 100;
  let c = parseInt(contribution)
  let a = parseInt(amount)
  const month =  2592000000; 
  let d = Math.floor((Date.parse(date) - Date.now()) / month);

  if (isNaN(p))  return `Параметр "Процентная ставка" содержит неправильное значение "${percent}"`
  if (isNaN(c))  return `Параметр "Начальный взнос" содержит неправильное значение "${contribution}"` 
  if (isNaN(a) )  return `Параметр "Общая стоимость" содержит неправильное значение "${amount}"`
  if (!d)  return `Параметр "Дата" содержит неправильное значение "${date}"`

  let sumToReturn = a - c;
  let monthPercent = p / 12;
  let payMonth = sumToReturn * (monthPercent + (monthPercent / ((Math.pow(1 + monthPercent, d) - 1))));

  totalAmount = payMonth * d
  console.log(totalAmount.toFixed(2))

  return Number(totalAmount.toFixed(2));
}
