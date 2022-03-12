const titreSpan = document.queryselectorAll('h2 span');
const btns = document.querySelectorAll('.btn-first');
const medias = document.querySelectorAll('.bulle');

window.addEventListener('load', () => {
    
    const TL = gsap.timeline({paused: true});

    TL
    .staggerFrom(titreSpan, 1, {top: -50, opacity: 0, ease: "power2.out"}, 0.3)
    .staggerFrom(btns, 1, {opacity: 0, ease: "power2.out"}, 0.3, '-=1')
    TL.play();

})