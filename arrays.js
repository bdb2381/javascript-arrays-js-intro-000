var ingredient1 = "bread"
var ingredient2 = "mild cheese"
var ingredient3 = "sharp cheese"
var ingredient4 = "butter"
var ingredient5 = "tomato"
var ingredient6 = "garlic"

var chocolateBars = ["snickers", "hundred grand", "kitkat", and "skittles"]
/*
Both functions take two parameters, an array and an element to add to the beginning of the array,
 and both functions should add the element to the beginning of the array and then return the whole array.
  The destructive function, destructivelyAddElementToBeginningOfArray, should alter the original array
  that's passed in; addElementToBeginningOfArray, on the other hand, should return a new array and not
   modify the original.
   */

function addElementToBeginningOfArray(chocolateBars, newBar){
  var newBars = chocolateBars.unshift("Tea Bar")
  return newBars
}

function destructivelyAddElementToBeginningOfArray(){
  chocolateBars.unshift("Tea Bar")
  return chocolateBars
}
