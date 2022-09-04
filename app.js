// console.log("Hello, World!");

//ex02:
// var userName = prompt("Enter your name: ");
// alert("Hey there " + userName + ", how are you doing?");

//ex03:
var btnTranslate = document.querySelector("#btn-translate");
btnTranslate.addEventListener("click", function onClick() {
  //   console.log("clicked");
  //   console.log("input: " + inputTxt.value);
  //   outputTxt.innerText = "translated: " + inputTxt.value;

  var inputText = inputTxt.value; // taking input

  //calling server for processing

  fetch(getTranslationURL(inputText))
    .then((response) => response.json())
    .then((json) => console.log(json.contents.translated))
    .catch(errorHandler);
});

//ex04:
var inputTxt = document.querySelector("#input-txt");

//ex05:
var outputTxt = document.querySelector("#output-txt");

// outputTxt.innerText = "iGN1T0R";

//ex09:
var serverURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";

function getTranslationURL(text) {
  return serverURL + "?" + "text=" + text;
}

//ex10:
function errorHandler(error) {
  console.log("error occured: ", error);
  alert("something wrong with server! try again after sometime");
}
