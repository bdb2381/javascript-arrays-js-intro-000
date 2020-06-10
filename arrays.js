

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
