//If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
//Find the sum of all the multiples of 3 or 5 below 1000.

//two options, first is complicated array version I put together, second is a simple version that doesn't require the second step

//first method I put together that adds each multiple to an array, adds the multiples together into sum then prints sum.
//declares an empty array
var multiples = [];
//adds each multiple of 3 or 5 to the array
for (i = 1; i <1000; i++){
  if (i%3 === 0){
    multiples.push(i);
  }
  else if (i%5 === 0){
    multiples.push(i);
  }
  else {
    
  }
}
//adds the array together into a total
var sum = multiples.reduce(function(a,b){
  return a + b;
}, 0);
//prints the total of the first method
console.log(sum);

//second method

//sets the total to zero as a baseline
var totals = 0;
//adds each multiple of 3 and 5 to total
for (i = 1; i < 1000; i++){
  if (i%3 === 0){
    totals = totals + i;
  }
  else if(i%5 === 0){
    totals = totals + i;
  }
}
//prints the resulting total of totals
console.log(totals);
