// console.log("Hello, World!");

//ex02:
// var userName = prompt("Enter your name: ");
// alert("Hey there " + userName + ", how are you doing?");

//ex03:
var btnTranslate = document.querySelector("#btn-translate");
btnTranslate.addEventListener("click", function onClick() {
  //   console.log("clicked");
  //   console.log("input: " + inputTxt.value);
  outputTxt.innerText = "translated: " + inputTxt.value;
});

//ex04:
var inputTxt = document.querySelector("#input-txt");

//ex05:
var outputTxt = document.querySelector("#output-txt");

// outputTxt.innerText = "iGN1T0R";
