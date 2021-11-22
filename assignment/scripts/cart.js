console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

// (1) create a global variable named `basket` and set it to an empty array.
// (2) create a function called addItem
// (3) add new item (Ruby) into the global array (basket)

let basket= [];
function addItem( item ){
  basket.push(item);
  return true;
}
console.log('in addItem', addItem('Ruby'));
//adding an extra item to the list for good measure
console.log('in addItem', addItem('Emerald'));
console.log(basket);

//(3) create a new function called listItems
function listItems( thing1 , array1){
  //it should loop over the items in the basket array
  //function states that
for (let i = 0; i < basket.length; i++) {
  let found = false;
  for (let i = 0; i < basket.length; i++) {
    if (basket[i] === thing1){
    console.log ('you have found an item in my basket:', thing1);
    found = true
}
}
return found
}
}
//testing the value 'Ruby' to run through the loop
console.log(listItems('Ruby', basket));
console.log(listItems('Emerald', basket));
console.log(listItems('Opal', basket));
