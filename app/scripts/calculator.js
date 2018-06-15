var resultAnswer = document.getElementById('resultAnswer');

function insert(obj) {
  var pushed = obj.innerHTML;

  if (pushed == '=') {
    resultAnswer.innerHTML = eval(resultAnswer.innerHTML);
  }
}
