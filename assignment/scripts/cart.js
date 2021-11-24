console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

// set basket equal to an empty array
let gemList= ['opal', 'ruby', 'topaz'];
let basket= [];
//create a function addItem to take item as the parameter
function addItem( item ){
  basket.push(item);
  return true;
}
console.log('in addItem:', addItem('Ruby'));
//adding an extra item to the list for good measure
console.log('in addItem', addItem('Emerald'));
console.log(basket);

//console.log('checking if our basket includes Opal', basket.includes('Opal'));
//console.log('checking if our basket includes Ruby', basket.includes('Ruby'));

//(3) create a new function called listItems
function listItems(array){
  //it should loop over the items in the basket array and log item in basket
  for (x of array){
    console.log(x);
  }
}
listItems(basket);
listItems(gemList);
//testing the value 'Ruby' to run through the loop

//create a function to empty the current items in the basket array
function emptyArray(array){
  array.splice(0, array.length)
  return array
}
console.log(emptyArray(basket));

// STRETCH GOALS//
// add a global const maxItems equal to 5
//create function called isFull
const maxItems = 5;
function isFull(array, thing1) {
    if (array.length < maxItems) { array.push(thing1);
  } else {
    console.log('no more room for', thing1);
  }
  return true;
}
// calling the function to evaluate each string
isFull(basket, 'apples');
isFull(basket, 'oranges');
isFull(basket, 'grapefruits');
isFull(basket, 'celery');
isFull(basket, 'cranberries');
isFull(basket, 'thyme');
isFull(basket, 'oregano');
console.log(basket);
