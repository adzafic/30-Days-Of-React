//Create a separate countries.js file and store the countries array into this file, create a separate file web_techs.js and store the webTechs array into this file. Access both file in main.js file
//First remove all the punctuations and change the string to array and count the number of words in the array
let text =
  'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
let words = text.replace('.','').split(' ');
console.log(words);
console.log(words.length);

//In the following shopping cart add, remove, edit items
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];
//add 'Meat' in the beginning of your shopping cart if it has not been already added
shoppingCart.unshift('Meat');
//add Sugar at the end of you shopping cart if it has not been already added
let idx = shoppingCart.indexOf('Sugar');
if (idx == -1) {
shoppingCart.push('Sugar');
}
//remove 'Honey' if you are  allergic to honey
let idxh = shoppingCart.indexOf('Honey');
shoppingCart.splice(idxh,1),
console.log(shoppingCart);
//modify Tea to 'Green Tea'
let idxt = shoppingCart.indexOf('Tea')
shoppingCart[idxt] = 'Green Tea'
console.log(shoppingCart);
// In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. 
// If it does not exist add to the countries list.
let existEthipia = countries.indexOf('Ethiopia');
if(existEthipia == -1){
 countries.push('Ethiopia');
}else{
 console.log('ETHIOPIA');
}

//In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'. 
// If it does not exist add Sass to the array and print the array.
let existSass = webTechs.indexOf('Sass');
if(existEthipia == -1){
 countries.push('Sass');
}else{
 console.log('Sass is a CSS preprocess');
}

//Concatenate the following two variables and store it in a fullStack variable.
let joinArray = countries.concat(webTechs);
console.log(joinArray);
