// function cal(number) {
//   var progressWindow = document.getElementsById("numbers").innerHTML;
//   progressWindow.innerHTML += numbers;
//   var resultWindow = document.getElementById("progressWindow");
// }


// function answer(){
//   document.getElementById("resultProgress").value = eval(document.getElementById("equal").value);
// }


// function clearall(){
//     document.getElementById("resultProgress").value="";
//     document.getElementById("resultAnswer").value="";
// }


//the javascript eval() function takes in a string and outputs that strings operations as a number eval("3 + 2") sends back 5.
$(document).ready(function () {

  $("#one").click(function () {
    document.getElementById("textbox").value += '1';
  });
  $("#two").click(function () {
    document.getElementById("textbox").value += '2';
  });
  $("#three").click(function () {
    document.getElementById("textbox").value += '3';
  });
  $("#four").click(function () {
    document.getElementById("textbox").value += '4';
  });
  $("#five").click(function () {
    document.getElementById("textbox").value += '5';
  });
  $("#six").click(function () {
    document.getElementById("textbox").value += '6';
  });
  $("#seven").click(function () {
    document.getElementById("textbox").value += '7';
  });
  $("#eight").click(function () {
    document.getElementById("textbox").value += '8';
  });
  $("#nine").click(function () {
    document.getElementById("textbox").value += '9';
  });
  $("#ziro").click(function () {
    document.getElementById("textbox").value += '0';
  });

  $("#dot").click(function () {
    document.getElementById("textbox").value += '.';
  });
  $("#plus").click(function () {
    document.getElementById("textbox").value += '+';
  });
  $("#minus").click(function () {
    document.getElementById("textbox").value += '-';
  });
  $("#multi").click(function () {
    document.getElementById("textbox").value += '*';
  });
  $("#dividion").click(function () {
    document.getElementById("textbox").value += '%';
  });
  $("#module").click(function () {
    document.getElementById("textbox").value += '/';
  });
  $("#clear").click(function () {
    document.getElementById("textbox").value += ' ';
  });

  $("#equal").click(function () {
    document.getElementById("textbox").value = eval(document.getElementById("textbox").value);
  });
});
//# sourceMappingURL=calculator.js.map
