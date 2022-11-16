window.sr = ScrollReveal();

    sr.reveal('.name-profession', {
        duration: 2000,
        origin: 'top',
        distance: '20px',
        easing: 'ease',
    });

    sr.reveal('.profile', {
        duration: 3000,
        origin: 'top',
        distance: '40px',
        easing: 'ease',
    });
    sr.reveal('.image', { //Se anima img aparte por problemas del responsive
        duration: 3000,
        origin: 'top',
        distance: '40px',
        easing: 'ease',
    });
    sr.reveal('.info', {
        duration: 4000,
        origin: 'top',
        distance: '60px',
        easing: 'ease',
    });





















//Solo es descomentar este codigo para usarlo, pero antes debe de poner una clase en cada etiqueta html que quiera que siga el cursor.  ( class="move" data-speed="-1" ) el valor "-1" puede ser cambiado por otro número dependiendo de que tanto quiera que se mueva sus elementos en la pagina.

// document.addEventListener("mousemove", followMouse);
// function followMouse(e) {
//     this.querySelectorAll('.move').forEach(move => {
//         const speed = move.getAttribute('data-speed')

//         const x = (window.innerWidth - e.pageX*speed)/100
//         const y = (window.innerHeight - e.pageY*speed)/100

//         move.style.transform = `translate(${x}px, ${y}px)`

//     });
// }