const median = arr => {
  const mid = Math.floor(arr.length / 2),
  nums = Input.sort(function(a, b){return a - b});
  return Input % 2 !== 0 ? nums[mid] : (nums[mid - 1] + nums[mid]) / 2;
}
function button(){
  var inputArray = [];
var size = 5; 

for(var i=0; i<size; i++) {
  
  inputArray[i] = prompt('Enter Element ' + (i+1));
  inputArray.sort(function(a, b){return a - b});
  document.getElementById("demo").innerHTML = inputArray;
}
window.Input = inputArray;
var abra = median(Input);
console.log(abra);
}



