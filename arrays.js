var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];
var candyString =

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
  var newArray = chocolateBars.slice(0,2);
  return newArray;
}
function addElementToEndOfArray(chocolateBars, candyString){
  return [... "candyString"];
}
function removeElementFromBeginningOfArray(chocolateBars){
  var newArray= chocolateBars.slice(1);
  return newArray;
}
