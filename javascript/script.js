//menú dezplegable ----------------------
let dropdown = document.querySelector(".dropdown");
let dropdownBox = document.querySelector(".dropdownBox");

dropdown.addEventListener("click", function() {
  if (dropdownBox.style.display === "none") {
    dropdownBox.style.display = "block";
  } else {
    dropdownBox.style.display = "none";
  }
});
//------------------------------------


//EFECTO MOUSEMOVE
document.addEventListener("mousemove", cursorMove);
function cursorMove(e){
  document.querySelectorAll(".move").forEach(function(move){

    let moving_value = move.getAttribute("data-value");
    let x = (e.clientX * moving_value) / 250;
    let y = (e.clientY * moving_value) / 250;

    move.style.transform = "translateX(" + x + "px) translateY(" + y + "px)";
  });
}