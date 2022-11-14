document.addEventListener("mousemove", followMouse);
function followMouse(e) {
    this.querySelectorAll('.move').forEach(move => {
        const speed = move.getAttribute('data-speed')

        const x = (window.innerWidth - e.pageX*speed)/100
        const y = (window.innerHeight - e.pageY*speed)/100

        move.style.transform = `translate(${x}px, ${y}px)`

    });
}