//audio de fondo
function playAudio() {
  document.querySelector('.audio').play();
}


//menú dezplegable ----------------------
let dropdown = document.querySelector(".dropdown");
let dropdownBox = document.querySelector(".dropdownBox");

dropdown.addEventListener("click", function() {
  if (dropdownBox.style.display === "block") {
    dropdownBox.style.display = "none";
  } else {
    dropdownBox.style.display = "block";
  }
});


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



//LOADER
gsap.from(".text", .5, {
  y:40,
  opacity: 0,
  ease: "power2.inOut",
  delay: 1,
});

gsap.to(".pre-loader", 2, {
  top: "-100%",
  ease: "power2.inOut",
  delay: 2,
});

gsap.from(".homeName", 1, {
  y:40,
  opacity: 0,
  ease: "power2.inOut",
  delay: 4,
});

gsap.from(".description", 1, {
  y:40,
  opacity: 0,
  ease: "power2.inOut",
  delay: 5,
});

gsap.from(".dropdown", 1, {
  y:40,
  opacity: 0,
  ease: "power2.inOut",
  delay: 6,
});

