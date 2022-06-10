// Задание 1
function getArrayParams(arr) {
  let min, max, sum, avg;


  // Ваш код
  min = arr[0];
  max = arr[0]
  sum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i]
    }
    if(arr[i] > max) {
      max = arr[i]
    }
    sum += arr[i]
  }

  avg = Number((sum / arr.length).toFixed(2))

  return { min: min, max: max, avg: avg };
}

// Задание 2


function worker(arr) {
  let sum;

  // Ваш код
  // sum = arr.reduce ((a,b) => a + b)
  sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i]
  }

  return sum;
}


function makeWork(arrOfArr, func) {
  let max;

  // Ваш кода
  // for ...
  max = func(arrOfArr[0]);

  for (let i = 0; i < arrOfArr.length; i++) {
   
    if(func(arrOfArr[i]) > max) {
      return max = func(arrOfArr[i])        
    }
  }  
  return max;
}



// Задание 3
function worker2(arr) {
  // Ваш код
  let max = Math.abs(arr[0]);
  let min = Math.abs(arr[0]);

  for (let i = 0; i < arr.length; i ++) {
    if(Math.abs(arr[i]) > max) {
      max = Math.abs(arr[i]);
    }    
    else if(Math.abs(arr[i]) < min) {
      min = Math.abs(arr[i]);
    } 
  }

  return max - min
}
