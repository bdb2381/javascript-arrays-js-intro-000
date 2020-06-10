var chocolateBars = ["snickers", "mms", "peanut cups"]

function addElementToBeginningOfArray(chocolateBars_array, newBar){   //return the new Bar but keep the old bars in a seperate list as well
  return [newBar, ...chocolateBars_array]
}

function destructivelyAddElementToBeginningOfArray(chocolateBars_array, newBar){  //return a new array that is permenant blend of everything
  chocolateBars_array.unshift(newBar)
  return chocolateBars_array
}

function addElementToEndOfArray(climbingRoutes_array, newRoute){
  return [...climbingRoutes_array, newRoute]
}

function destructivelyAddElementToEndOfArray(climbingRoutes_array, newRoute){
   climbingRoutes_array.push(newRoute)
   return climbingRoutes_array
}
