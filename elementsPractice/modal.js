
// get the modal
var modal = document.getElementById("modal");
// get the button
var button = document.getElementById("start");

// have the button show the modal
button.addEventListener("click", showModal);

var showModal = () => {
  modal.style.display = "block";
}
// close the modal on x
var closeModal = () => {
  modal.style.display = "none";
}