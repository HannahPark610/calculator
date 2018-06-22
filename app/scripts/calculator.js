// function insert(number) {
//   var progressWindow = document.getElementById("resultProgress");
//   var resultWindow = document.getElementById("resultAnswer");
//   progressWindow.innerHTML += number;
//   console.log(number);
//
// }
//
function answer(){
  document.getElementById("resultProgress").value = eval(document.getElementById("equal").value);
}

function insert(number) {
  var progressWindow = document.getElementsByClassName("button").innerHTML;
}


function clearall(){
    document.getElementById("resultProgress").value="";
    document.getElementById("resultAnswer").value="";
}

// $( document ).ready(function() {
//   $("#one").click(function() {
//  document.getElementById("textview").value += '1';
// });
//
// $("#two").click(function() {
// document.getElementById("textview").value += '2';
// });
//
// $("#three").click(function() {
// document.getElementById("textview").value += '3';
// });
