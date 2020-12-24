import "./styles.css";

var inputText = document.querySelector("#txt-input");
var btn = document.querySelector("#btn");
var outputDiv = document.querySelector("#output");

function clickHandler() {
  var input = parseInt(inputText.value, 10);
  // console.log(typeof inputText.value);
  // console.log(typeof input);

  for (var i = 2; i <= input / 2; i++) {
    if (input % i === 0) {
      outputDiv.innerText = input + " is not a  prime";
      return;
    }
  }

  outputDiv.innerText = input + " is a prime";
}

btn.addEventListener("click", clickHandler);
