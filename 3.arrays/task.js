function compareArrays(arr1, arr2) {
  // let result;
  // Ваш код
  if(arr1.length === arr2.length && arr1.every((item,index) => item === arr2[index])) {
    return true
  }
  else return false
  // return result; // boolean
}

function advancedFilter(arr) {
  let resultArr;

  // Ваш код
  return resultArr = arr.filter((item) => item > 0 && item % 3 === 0).map((item) => item * 10); // array
}
