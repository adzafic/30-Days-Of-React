//Declare an empty array;
//debugger;
let array = [];
//Declare an array with more than 5 number of elements
let arrayNumber = [1,2,3,4,5];
//Find the length of your array
let sizeArray = arrayNumber.length;
//Get the first item, the middle item and the last item of the array
let firstItem = arrayNumber[0];
let middlePosition = Math.floor(arrayNumber.length / 2);
let middleItem = arrayNumber[middlePosition];
let lastItem = arrayNumber[arrayNumber.length -1];
console.log('Valores array',firstItem,middleItem,lastItem);
//Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. 
// The array size should be greater than 5
let mixedDataTypes = [1,'5',false,{ country: 'Finland' , city: 'Helsinki' },   { skills: ['HTML', 'CSS', 'JS', 'React', 'Python']} ];
console.log('Tamaño de la array con tipos mixtos',mixedDataTypes.length);
//Declare an array variable name itCompanies and assign 
// initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
let itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];
//Print the array using console.log()
console.log(itCompanies);
//Print the number of companies in the array
console.log(itCompanies.length);
//Print the first company, middle and last company
let firstCompany = itCompanies[0];
let middleCompany = itCompanies[Math.floor(itCompanies.length / 2)];
let lastCompany = itCompanies[itCompanies.length -1];
console.log(firstCompany,middleCompany,lastCompany);
//Print out each company
console.log(itCompanies.join(','));
//Change each company name to uppercase one by one and print them out
itCompanies[0] = itCompanies[0].toUpperCase();
itCompanies[1] = itCompanies[1].toUpperCase();
itCompanies[2] = itCompanies[2].toUpperCase();
itCompanies[3] = itCompanies[3].toUpperCase();
itCompanies[4] = itCompanies[4].toUpperCase();
itCompanies[5] = itCompanies[5].toUpperCase();
itCompanies[6] = itCompanies[6].toUpperCase();
console.log(itCompanies);
//Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT 
// companies.
console.log(itCompanies.join(', '),'are big IT companies');
//Check if a certain company exists in the itCompanies array. 
// If it exist return the company else return a company is not found
let exitsCompanie = itCompanies.indexOf('APPLE');
if(exitsCompanie == -1){
  console.log('company is not found');
}else{
  console.log(itCompanies[exitsCompanie]);
}
//Filter out companies which have more than one 'o' without the filter method
let itCompaniesWithOneO = itCompanies.filter(function(company,indx){
  return company.includes('O');
});
console.log(itCompaniesWithOneO);
//Sort the array using sort() method
console.log(itCompanies.sort());
//Reverse the array using reversxe() method
console.log(itCompanies.reverse());
//Slice out the first 3 companies from the array
console.log(itCompanies.slice(3));
//Slice out the last 3 companies from the array
console.log(itCompanies);
console.log(itCompanies.slice(0,itCompanies.length-3));
//Slice out the middle IT company or companies from the array
let middleIndex = Math.floor(itCompanies.length / 2);
console.log(itCompanies.slice(0,middleIndex).concat(itCompanies.slice(middleIndex+1,itCompanies.length)));
//Remove the first IT company from the array
console.log(itCompanies.splice(0,1));
//Remove the middle IT company or companies from the array
middleIndex = Math.floor(itCompanies.length / 2)
console.log(itCompanies.splice(middleIndex,1));
//Remove the last IT company from the array
console.log(itCompanies.splice(-1,1));
//Remove all IT companies
console.log(itCompanies.splice());