
// get the modal
var modal = document.getElementById("#modal");
  modal = document.querySelector("modal");
// get the button that opens modal
var button = document.getElementById("#start");
  button = document.querySelector("start");
// get span element that closes modal
var close = document.getElementById("#close");
close = document.querySelector("close");
// when user clicks button open modal 
document.button.onclick() = () => {
  modal.style.display = "block";
}
// when user clicks on 'x' close modal
document.close.onclick() = () => {
  modal.style.display = "none";
}
// when user clicks anywhere on window close modal
window.onclick() = (event) => {
if (event.target === modal) {
  modal.style.display = "none";
}
}