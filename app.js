
document.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(ScrollTrigger)

    // Split Text Animation
    let mySplitTitle = new SplitType('.main__title');

    gsap.from('.char',{ delay: .3, y: 115, stagger: 0.03 })
    gsap.to('.char',{ y: 0, delay: 1, duration: .1 })

    gsap.from('.main__image',{ delay: .3, x: 450, opacity: 0, scale: 0.5, filter: "blur(10px)" })
    gsap.to('.main__image',{ delay: 1, x: 0, opacity: 1, duration: .1, filter: "blur(0px)" })

    gsap.from('.main__gear',{rotation: 0,})
    gsap.to('.main__gear',{rotation: 360, duration: 5, ease: "elastic",})

    // Animacion para el main o welcome
    const main = gsap.timeline({
        scrollTrigger: {
            trigger: ".main",
            pin: ".main",
            scrub: 1,
            // markers: true,
        }
    })

    main.from('.main__welcome', {x: -100, opacity: 0, scale: 0.5})
    main.to('.main__welcome', {x: 0, opacity: 1})
    main.from('.main button', {x: -100, opacity: 0, scale: 0.5})
    main.to('.main button', {x: 0, opacity: 1})

    // Gear
    const gear = gsap.timeline({
        scrollTrigger: {
            trigger: ".main",
            scrub: 1,
        }
    })

    gear.from('.main__gear', {rotation: 0,})
    gear.to('.main__gear', {rotation: 360,})

    // Animacion para la seccion 1
    const section_1 = gsap.timeline({
        scrollTrigger: {
            trigger: ".section-one",
            pin: '.section-one',
            scrub: 1,
            // markers: true,
        }
    })

    section_1.from('.hero h1',{ x: 500, opacity: 0, scale: 0.5, filter: "blur(10px)",})
    section_1.to('.hero h1',{ x: 0, opacity: 1, filter: "blur(0px)",})
    section_1.from('.hero__image',{ x: -500, opacity: 0, scale: 0.5, filter: "blur(10px)",})
    section_1.to('.hero__image',{ x: 0, opacity: 1, filter: "blur(0px)",})
    section_1.from('.hero p',{ x: 500, opacity: 0, scale: 0.5, filter: "blur(10px)",})
    section_1.to('.hero p',{ x: 0, opacity: 1, filter: "blur(0px)",})

    // Animacion para la seccion 2
    const section_2 = gsap.timeline({
        scrollTrigger: {
            trigger: '.section-two',
            start: 'top 80%',
            end: 'bottom 70%',
            scrub: 1,
            // markers: true,
        }
    })

    section_2.from('.section-two h1',{ opacity: 0, filter: "blur(10px)", scale: 0.5})
    section_2.to('.section-two h1',{ opacity: 1, filter: "blur(0px)",})
    const images = document.querySelectorAll('.collage img');
    images.forEach(function(image, index){
        section_2.from(`.collage img:nth-child(${index+1})`,{ opacity: 0,  scale: 0.5, filter: "blur(10px)",})
        section_2.to(`.collage img:nth-child(${index+1})`,{ opacity: 1, filter: "blur(0px)",})
    })

});

