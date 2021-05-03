const input = document.getElementById("input");
const output = document.getElementById("output")
let operator = '';
let numbers = [];
var result = 0;
function addNumber(number) {
  //$('#result').text(number);
  if (input.innerHTML=='0')
    input.innerHTML = number;
  else
    input.innerHTML += number;
  //console.log(input.innerHTML)
  //$.getJSON("https://api.ipify.org?format=json",
  //  function(json) {
  //    console.log(json);
  //    $('resultado').text(JSON.stringify(json));
  //  }
  //)
}

function clearQuery(){
  input.innerHTML = '';
  output.innerHTML = '';
  numbers = [];
  operator = '';
  result = 0;

}

function deleteNumber() {
  input.innerHTML = 	input.innerHTML.slice(0, -1);
}

function sum() {
  if (operator=='') {

    input.innerHTML += " + ";
    operator = '+';
  }
}

function product() {
  if (operator==''){
  input.innerHTML += " x ";
  operator = '*'};
}

function subtract() {
  if (operator==''){
  input.innerHTML += " - ";
  operator = '-'};
}

function divide() {
  if (operator==''){
  input.innerHTML += " / ";
  operator = '/'};
}

function displayResult() {
    if (operator=='/') {
      numbers = input.innerHTML.split(' / ').map(x => parseInt(x));
      if (numbers.length>1)
        result=  numbers.reduce((m, n) => m / n);
      else
        result = 0
    }
    else if (operator=='+'){  
      numbers = input.innerHTML.split(' + ').map(x => parseInt(x));
      if (numbers.length>1)
        result =  numbers.reduce((m, n) => m + n);
      else
        result = 0
    }
    else if (operator=='-') {
      numbers = input.innerHTML.split(' - ').map(x => parseInt(x));
      if (numbers.length>1)
        result=  numbers.reduce((m, n) => m - n);
      else
        result = 0
    }
    else if (operator=='*') {
      numbers = input.innerHTML.split(' x ').map(x => parseInt(x));
      if (numbers.length>1)
        result=  numbers.reduce((m, n) => m * n);
      else
        result = 0
    }
    var url = "http://localhost:8085/operation/?result=" + result;
    $.getJSON(url,
      function(json) {
         $('#output').html('<h1>' + json.result + '</h1>');
      }
    );

}