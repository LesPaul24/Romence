const titre = document.querySelectorAll('h1');
const titreSpan = document.querySelectorAll('h2 span');
const btns = document.querySelectorAll('.btn-first');
const medias = document.querySelectorAll('.bulle');
const rec = document.querySelectorAll('.rec');
const l1= document.querySelector('.l1');
const l2= document.querySelector('.l2');
const l3= document.querySelector('.l3');
const l4= document.querySelector('.l4');

window.addEventListener('load', () => {
    
    const TL = gsap.timeline({paused: true});

    TL
    .staggerFrom(titre, 1, {top: -100, opacity: 0, ease: "power2.out"}, 0.3)
    .staggerFrom(titreSpan, 1, {top: -50, opacity: 0, ease: "power2.out"}, 0.2)
    .from(l1, 1, {right: 800, width: 0, ease: "power2.out"}, '-=2')
    .from(l2, 1, {left: 800, width: 0, ease: "power2.out"}, '-=2')
    .from(l3, 1, {top: 300, height: 0, ease: "power2.out"}, '-=1')
    .from(l4, 1, {top: -600, height: 0, ease: "power2.out"}, '-=1')
    .staggerFrom(btns, 1, {opacity: 0, ease: "power2.out"}, 0.3, '-=1')
    .staggerFrom(medias, 1, {right: -200, ease: "power2.out"}, 0.3, '-=1')
    .staggerFrom(rec, 1, {opacity: 0, ease: "power2.out"}, 0.3, '-=1');
    
    TL.play();

})