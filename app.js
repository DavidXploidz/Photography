
document.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(ScrollTrigger)

    // Animacion para el main o welcome
    const main = gsap.timeline({
        scrollTrigger: {
            trigger: ".main",
            pin: ".main",
            toggleActions: "play none none complete",
            scrub: 1,
            markers: true,
        }
    })

    // main.from('.main__gear', {rotation: 360,})
    main.from('.main__welcome', {x: -100, opacity: 0, scale: 0.5})
    main.from('.main button', {x: -100, opacity: 0, scale: 0.5})
    main.to('.main__welcome', {x: 0, opacity: 1})
    main.to('.main button', {x: 0, opacity: 1})
    // main.to('.main__gear', {rotation: 0,})

    // Animacion para la seccion 1
    const section_1 = gsap.timeline({
        scrollTrigger: {
            trigger: ".section-one",
            pin: '.section-one',
            toggleActions: "play none none complete",
            scrub: 1,
            // markers: true,
        }
    })

    section_1.from('.hero h1',{ x: -500, opacity: 0, scale: 0.5})
    section_1.from('.hero__image',{ x: 500, opacity: 0, scale: 0.5})
    section_1.from('.hero p',{ x: -500, opacity: 0, scale: 0.5})
    section_1.from('.hero button',{ x: -500, opacity: 0, scale: 0.5})
    section_1.to('.hero h1',{ x: 0, opacity: 1,})
    section_1.to('.hero__image',{ x: 0, opacity: 1,})
    section_1.to('.hero p',{ x: 0, opacity: 1,})
    section_1.to('.hero button',{ x: 0, opacity: 1,})

    // Animacion para la seccion 2
    const section_2 = gsap.timeline({
        scrollTrigger: {
            trigger: '.section-two h1',
            start: 'top 70%',
            end: 'top 30%',
            scrub: 1,
            toggleActions: "restart none none none",
            // markers: true,
        }
    })
    section_2.from('.section-two .contenedor',{
        opacity: 0,
        x: -200,
        filter: "blur(10px)",
    })
    section_2.to('.section-two .contenedor',{
        opacity: 1,
        x: 0,
        filter: "blur(0px)"
    })



});

