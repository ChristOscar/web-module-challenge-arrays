/*REMEMBER TO RETURN ALL OF THE ANSWERS ON THESE TASKS, IF YOU DON'T, THE AUTOGRADER WILL NOT WORK*/

/* 👀 This is your data ⬇ */
const originalFlavors = [
  "Banana Nut Fudge",
  "Black Walnut",
  "Burgundy Cherry",
  "Butterscotch Ribbon",
  "Cherry Macaron",
  "Chocolate",
  "Chocolate Almond",
  "Chocolate Chip",
  "Chocolate Fudge",
  "Chocolate Mint",
  "Chocolate Ribbon",
  "Coffee",
  "Coffee Candy",
  "Date Nut",
  "Eggnog",
  "French Vanilla",
  "Green Mint Stick",
  "Lemon Crisp",
  "Lemon Custard",
  "Lemon Sherbet",
  "Maple Nut",
  "Orange Sherbet",
  "Peach",
  "Peppermint Fudge Ribbon",
  "Peppermint Stick",
  "Pineapple Sherbet",
  "Raspberry Sherbet",
  "Rocky Road",
  "Strawberry",
  "Vanilla",
  "Vanilla Burnt Almond"
]

/*🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 1: Copy the Array! 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
We have an array called originalFlavors with 31 flavors (see above).  In these tasks, we will be reading and writing data to this array.  
With all of these changes going on, we don't want to lose track of the actual, original 31 flavors.  So we need to copy the original array!

/*
Use the copy function below to do the following:
  1. receive an array as a parameter - you will pass in originalFlavors as an argument when the function is invoked.
  2. Return a copy of the received array  
*/
// take 1 parameter - you can call it anything but it's holding the place for the array you will pass in as your argument 
function copy(array){
  /*your code here*/
  var newArray = [...array];
  return newArray;
}    

console.log(copy(originalFlavors));




/*🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 2: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 
Confirm that an array is exactly 31 flavors. Your function should accept:
  1. an array as a parameter
  2. Check to see if the array given is 31 flavors
  3. Your function should return a boolean TRUE if the length of the array is 31 and FALSE if the length of the array is NOT 31.


For Example: is31Flavors(originalFlavors) will return true if your code is working properly
*/

// taking 1 parameter - it's holding the place for an array 
function is31Flavors(array){
 /*your code here*/
 let flavorAmount = undefined;
 //conditional inside of here - if it;s true return true, else return false - it should be exactly 31 items
 if (array.length === 31){
  flavorAmount = true;
 }else {
   flavorAmount = false;
 }
 return flavorAmount;
 
}

console.log(is31Flavors(originalFlavors));

/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 3: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 
Corporate has come to you with an idea for a new flavor: Rainbow Sherbert! They think this will be a game changer. You need to modify the array to include this flavor. 

Use the addFlavor function below to do the following:
  1. Receive an array
  2. Receive a new flavor as a string
  3. The function adds the passed flavor to the front of the passed array
  4. The function should return the resulting array

  For example: addFlavor(originalFlavors, "Rainbow Sherbert") should return the array ["Rainbow Sherbert", "Banana Nut Fudge",..."Vanilla Burnt Almond"]
*/

// 2 parameters array, string (which is holding the place for the new flavour )
function addFlavor(array, flavor){
 /*your code here*/
 // use unshift to add the new flavour to the beginning of the received array 
 array.unshift(flavor);
 // return the array 
 return array;
}

addFlavor(originalFlavors, 'Rainbow Sherbert');

/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 4: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Houston, we have a problem! There are now 32 flavors in the originalFlavors array! Your task is to remove an item from the end of the array. 

Use the removeLastFlavor function below to do the following:
  1. Receive an array
  2. Remove the last item from the received array
  3. Return the resulting array

  For example: running removeLastFlavor(originalFlavors) would return ["Rainbow Sherbert", "Banana Nut Fudge",..."Vanilla"]
*/
// 1 parameter which will be a place holder for the array 
function removeLastFlavor(array){
 /*your code here*/
 //use pop to remove the last item 
 array.pop();
 //return the array 
 return array;
 
}
// console.log(removeFlavorByName);


/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 5: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Write a function that returns a flavor at a given index in the array.

Use the getFlavorByIndex function below to do the following:
  1. Recieve an array
  2. Receive a number (the desired index)
  3. Return the flavor located at the received index position

  For example: running getFlavorByIndex(originalFlavors, 2) would return "Black Walnut", assuming Rainbow Sherbert has been added successfully
*/
// 2 parameters array, number (holding the place for an index)
function getFlavorByIndex(array, num){
  /*your code here*/
  //array[0]
  return array[num];
}

getFlavorByIndex(originalFlavors, 2)

/*🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 6: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
As corporate wants to add more and more flavors to their lineup, they've realized that they need to remove flavors based on flavor name, 
as opposed to just arbitrarily removing the first or last flavor. Your task is to get an index by flavor name, and remove that single flavor from the array.  

Use the removeFlavorByName function below to do the following:
  1. Receive an array
  2. Receive a flavor as a string
  3. Remove the received flavor from the received array
  4. Return the resulting array that now contains one less flavor

  For example: running removeFlavorByName(originalFlavors, "Rocky Road") would return an array with the a length of 30 because Rocky Road would have been removed. 

  HINT: You can use .splice() for this
*/
// 2 parameters array and the string we want to remove 
function removeFlavorByName(array, string){
  /*your code here*/
  // loop through the array and check every index for the exact match of the string, if it exist then remove it using splice
  let i = array.indexOf(string);
  if (i > -1){
    array.splice(i, 1);
  }
  // .splice(start, how many items to delete)
  return array;
  //outside of the loop return the array 
}

console.log('Task 6',removeFlavorByName(originalFlavors, "Rocky Road"));


/*🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 7: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
July 7th is "World Chocolate Day" and Baskin Robins wants to create promotional materials highlighting all of their chocolate flavors. 
Your task is to write a function that checks every item in the array for a string and returns a new array called filteredArray with only the values 
that contain the received string. This would allow you to be able to filter for "Vanilla", "Sherbet", "Lemon" etc. when different holidays roll around 
by passing in those specific strings.

Use the filterByWord function below to do the following:
  1. Receive an array
  2. Receive a string (example: "chocolate")
  3. Check to see if any of the flavors in the array contain that string
  4. If they do, add them to a new array
  5. Return the new array that contains the filtered flavors

  For example: filterByWord(originalFlavors, "Chocolate") should return ["Chocolate", "Chocolate Almond", "Chocolate Chip", "Chocolate Fudge", "Chocolate Mint", "Chocolate Ribbon"]

  HINT - you can use the .includes method to help you solve this

  DO NOT USE ADVANCED ARRAY METHODS (i.e. .filter) to solve this problem. 
*/
// 2 parameters - array, string 
function filterByWord(array, string){
  /*your code here*/
  //create a new array to push out results to 
  const filtered = [];
  //loop though the provided array and check every index
  for(let i = 0; i < array.length; i++){
    //if the index includes the string 
    if(array[i].includes(string)){
      //push it to the new array 
      filtered.push(array[i]);
    }
  }
  
  return filtered;
  
  //outside of the loop return the new array 
}

filterByWord(originalFlavors, "Chocolate")

/* 💪💪💪💪💪🧁🍦🍨 STRETCH 🍨🍦🍫💪💪💪💪💪*/ 

/* STRETCH 1: Write a function that returns the average number of words in an array. You should be able to use this function for any array, but can test with originalFlavors.

Use the getAverageWordLength function below to do the following:
  1. Receive the originalFlavors array
  2. Count how many words per item in the array
  3. Return the average number of words per item in the array

  For example: getAverageWordLength(originalFlavors) should return a number between 0 and 3.     
*/

function getAverageWordLength(/*code here*/){
  /*code here*/
}


/* 💪💪💪💪💪💪💪💪💪💪 STRETCH 2: 💪💪💪💪💪💪💪💪💪
Baskin Robins now offers new flavors, seasonal flavors, and even regional flavors. Write a function that will randomly select a total of 31 flavors 
from originalFlavors, currentFlavors, seasonalFlavors, and regionalFlavors and store it in an array called randomFlavors.

Use the getRandomFlavors function and new arrays below to do the following:
  1. Receive the four arrays with all the differnet flavors (originalFlavors is above, the others are below)
  2. Randomly pick flavors from all four arrays
  3. Return a new array called randomFlavors that has a lenght of 31

  For example: getRandomFlavors(originalFlavors, newFlavors, seasonalFlavors, regionalFlavors) might return ["Strawberry Cheesecake", "Eggnog,"..."Chocolate"].
*/



//uncomment the data and move it above the function
function getRandomFlavors(/*code here*/){
  /*code here*/
}

// NEW DATA ARRAYS FOR STRETCH 2 ⬇️
// const newFlavors = [
//   "Date night",
//   "U.S.S Butterscotch (Stranger Things special)",
//   "Honey Almond",
//   "Mint Chocolate Chip",
//   "Chocolate",
//   "Oreo® Cookies'n Cream",
//   "Chocolate Chip",
//   "Pralines 'n Cream",
//   "Very Berry Strawberry",
//   "Chocolate Chip Cookie Dough",
//   "Old Fashioned Butter Pecan",
//   "Jamoca®",
//   "Jamoca® Almond Fudge",
//   "Reese's® Peanut Butter Cup",
//   "Rocky Road",
//   "Peanut Butter ’n Chocolate",
//   "Gold Medal Ribbon®",
//   "World Class® Chocolate",
//   "Cherries Jubilee",
//   "Chocolate Fudge",
//   "Daiquiri Ice",
//   "Rainbow Sherbet",
//   "Rainbow Swirl"
// ] 

// const seasonalFlavors = [
//   "America's Birthday Cake",
//   "Baseball Nut®",
//   "Blueberry Cheesecake",
//   "Bourbon Street Pecan Pie",
//   "Brownie Bar Mashup",
//   "Cherry Cordial with Kisses",
//   "Chocolate Mousse Royale",
//   "French Vanilla",
//   "Eggnog",
//   "German Chocolate Cake",
//   "Icing on the Cake",
//   "Love Potion #31",
//   "New York Cheesecake",
//   "Nutty Coconut",
//   "Peppermint",
//   "Strawberry Cheesecake",
//   "Rock ’n Pop Swirl",
//   "Reese’s Peanut Butter Cup",
//   "Trick Oreo Treat",
//   "Winter White Chocolate",
//   "made with Snickers®",
//   "made with M&M's®",
//   "Heath®",
//   "Mango Tango"
// ]

// const regionalFlavors = [
//   "Pink Bubblegum",
//   "Caramel Macchiato",
//   "York Peppermint Pattie",
//   "Cotton Candy",
//   "Orange Sherbet",
//   "Grape Ice",
//   "Watermelon Ice",
//   "Miami Vice Sorbet",
//   "Splish Splash®",
//   "Wild 'n Reckless Sherbet",
//   "Lemon Custard",
//   "Oregon Blackberry",
//   "Bananas ‘n Strawberries",
//   "Mississippi Mud",
//   "Rum Raisin",
//   "Creole Cream Cheese",
//   "Chocolate Almond",
//   "Fudge Brownie",
//   "Banana Nut",
//   "Black Walnut",
//   "Cotton Candy Crackle",
//   "Quarterback Crunch",
//   "Chocolate Chocolate Chip Cheesecake",
//   "Caramel 'n' Cookies"
// ]



/* 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 Please do not modify anything below this line 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 */
function foo(){
  console.log('its working');
  return 'bar';
}
foo();
module.exports = {
  foo,
  is31Flavors,
  addFlavor,
  removeLastFlavor,
  getFlavorByIndex,
  removeFlavorByName,
  copy,
  filterByWord,
  getAverageWordLength,
  getRandomFlavors
}

