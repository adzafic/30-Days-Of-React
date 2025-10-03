//The following is an array of 10 students ages: js const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24] 
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]; 
// - Sort the array and find the min and max age 
ages.sort();
console.log(ages[0],ages[ages.length -1]);
// - Find the median age(one middle item or two middle items divided by two) 
let middleAge = ages[Math.floor(ages.length / 2)];
console.log(middleAge, middleAge/2);
// - Find the average age(all items divided by number of items) 
let total = ages.reduce(function(prev,current){
  return prev + current;
},0)

console.log(total/(ages.length-1));
// - Find the range of the ages(max minus min) - Compare the value of (min - average) and (max - average), 
// use abs() method



//1.Slice the first ten countries from the countries array

//Find the middle country(ies) in the countries array

//Divide the countries array into two equal arrays if it is even. If ountries array is not even , one more country for the first half.