let rangeInput = document.querySelector("#rangeInput");
let output = document.querySelector("#output");

rangeInput.oninput = function () {
  let value = parseInt(rangeInput.value);

  output.textContent = value;
};
