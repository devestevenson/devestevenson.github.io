
// EFECTO MOUSEMOVE
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

gsap.to(".pre-loader", 1, {
  top: "-100%",
  ease: "power2.inOut",
  delay: 2,
});

gsap.from(".card-container", .5, {
  y:40,
  opacity: 0,
  ease: "power2.inOut",
  delay: 3,
});

