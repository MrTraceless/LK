const GetMaxOfArray = () => {
  let array = GetArray();
  let max = Number.parseFloat(array[0]);
  for (let i = 1; i < array.length; i++) {
    let number = Number.parseFloat(array[i]);
    if (isNumber(number)) {
      if (max < number) {
        max = number;
      }
    }
  }
  ShowResult(max);
};
const GetMinOfArray = () => {
  let array = GetArray();
  let min = Number.parseFloat(array[0]);
  for (let i = 1; i < array.length; i++) {
      debugger;
    let number = Number.parseFloat(array[i]);
    if (isNumber(number)) {
      if (min > number) {
        min = number;
      }
    }
  }
  ShowResult(min);
};
const GetSumOfArray = () => {
  let array = GetArray();
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    let number = Number.parseFloat(array[i]);
    if (isNumber(number)) {
      sum += number;
    }
  }
  ShowResult(sum);
};

const isNumber = n => {
  return !isNaN(n) && isFinite(n);
};

const GetArray = () => {
  let inputData = document.getElementById("array").value;
  var array = inputData.split(",");
  return array;
};

const ShowResult = result => {
  let resultTextbox = document.getElementById("result");
  resultTextbox.value = result;
};

document.getElementById("max-of-array").onclick = GetMaxOfArray;
document.getElementById("min-of-array").onclick = GetMinOfArray;
document.getElementById("sum-of-array").onclick = GetSumOfArray;
