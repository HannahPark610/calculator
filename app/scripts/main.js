function insert(num) {
Document.form.textview.value=document.form.textview.value+num
}
function equal() {
  val exp = document.form.textview.value;
  if(exp) {
  document.form.textview.value=eval(exp)
  }
}
