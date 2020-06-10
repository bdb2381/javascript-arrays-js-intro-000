var ingredient1 = "bread"
var ingredient2 = "mild cheese"
var ingredient3 = "sharp cheese"
var ingredient4 = "butter"
var ingredient5 = "tomato"
var ingredient6 = "garlic"

/*
Both functions take two parameters, an array and an element to add to the beginning of the array,
 and both functions should add the element to the beginning of the array and then return the whole array.
  The destructive function, destructivelyAddElementToBeginningOfArray, should alter the original array
  that's passed in; addElementToBeginningOfArray, on the other hand, should return a new array and not
   modify the original.
   */
//var chocolateBars = [ "snickers", "hundred grand", "kitkat",  "skittles" ]; //yummy array of bars
//var newBar = "Tea Bar"    //new type of bar. very cutting edge


function addElementToBeginningOfArray(chocolateBars, newBar){   //return the new Bar but keep the old bars in a seperate list as well
  return [newBar, ...chocolateBars]
}

function destructivelyAddElementToBeginningOfArray(chocolateBars, newBar){  //return a new array that is permenant blend of everything
  chocolateBars.unshift(newBar)
  return chocolateBars
}

function addElementToEndOfArray(){

}

function destructivelyAddElementToEndOfArray(){

}
