var numbers = [175, 50, 25];



function myFunc(average, num) {
  return average - num;
}

console.log(numbers.reduce(myFunc)); 