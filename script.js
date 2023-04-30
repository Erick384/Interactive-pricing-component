const rangeInput = document.getElementById("rangeInput");
const output = document.getElementById("output");

rangeInput.oninput = function() {
  const value = parseInt(rangeInput.value);
  let range;
  
  switch(value) {
    case 1:
      range = "1-10";
      break;
    case 2:
      range = "11-20";
      break;
    case 3:
      range = "21-30";
      break;
    default:
      range = "Error";
  }
  
  output.textContent = `Range: ${range}`;
};