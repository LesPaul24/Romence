const contact = document.querySelectorAll('h1');
const sur = document.querySelectorAll('h2');
const medias = document.querySelectorAll('.bulle');
const parmail = document.querySelectorAll('h3');
const mail = document.querySelectorAll('h4');
const clemence = document.querySelectorAll('.clemence');
const romane = document.querySelectorAll('.romane');

window.addEventListener('load', () => {
    
    const TL = gsap.timeline({paused: true});

    TL
    .staggerFrom(contact, 1, {top: -100, opacity: 0, ease: "power2.out"}, 0.3)
    .staggerFrom(clemence, 1, {opacity: 0, ease: "power2.out"}, 0.2,)
    .staggerFrom(romane, 1, {opacity: 0, ease: "power2.out"}, 0.2,)
    .staggerFrom(sur, 1, {top: -50, opacity: 0, ease: "power2.out"}, 0.1)
    .staggerFrom(medias, 1, {right: -1000, ease: "power2.out"}, 0.3, '-=1')
    .staggerFrom(parmail, 1, {opacity: 0, ease: "power2.out"}, 0.3,)
    .staggerFrom(mail, 1, {opacity: 0, ease: "power2.out"}, 0.5)

    TL.play();

})