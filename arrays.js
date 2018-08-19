var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(chocolateBars,CandyString){
return chocolateBars;
}

function destructivelyAddElementToBeginningOfArray(chocolateBars,candyString){
  chocolateBars.unshift(candyString);
  return chocolateBars;}

  function addElementToBeginningOfArray(chocolateBars,candyString){
    array.unshift(candyString);
    console.log(array);
    return chocolateBars;
  }

function accessElementInArray(array,index){
  return array[index];
}
function destructivelyAddElementToEndOfArray(chocolateBars, candyString){
  chocolateBars.push(candyString);
  return chocolateBars;
}

function destructivelyRemoveElementFromEndOfArray(chocolateBars){
  chocolateBars.pop();
return chocolateBars;
}
function destructivelyRemoveElementFromBeginningOfArray(chocolateBars){
  chocolateBars.shift();
  return chocolateBars;
}
function removeElementFromEndOfArray(chocolateBars){
  chocolateBars.slice();
  return chocolateBars;
}
function addElementToEndOfArray(chocolateBars, candy){
  return [..."skittles", "candy"];
}
