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
var chocolateBars = [ "snickers", "hundred grand", "kitkat",  "skittles" ];
var newBar = "Tea Bar"


function addElementToBeginningOfArray(chocolateBars, newBar){
  var newChocoBars = chocolateBars
  newChocoBars.unshift(newBar)
  return newChocoBars
}

function destructivelyAddElementToBeginningOfArray(chocolateBars, newBar){
  chocolateBars.unshift("Tea Bar")
  return chocolateBars
}
