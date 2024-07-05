
document.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(ScrollTrigger)

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

    gear.from('.main__gear', {rotation: 720,})

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
    section_2.from('.collage img:nth-child(1)',{ opacity: 0,  scale: 0.5, filter: "blur(10px)",})
    section_2.to('.collage img:nth-child(1)',{ opacity: 1, filter: "blur(0px)",})
    section_2.from('.collage img:nth-child(2)',{ opacity: 0,  scale: 0.5, filter: "blur(10px)",})
    section_2.to('.collage img:nth-child(2)',{ opacity: 1, filter: "blur(0px)",})
    section_2.from('.collage img:nth-child(3)',{ opacity: 0, scale: 0.5, filter: "blur(10px)",})
    section_2.to('.collage img:nth-child(3)',{ opacity: 1, filter: "blur(0px)",})
    section_2.from('.collage img:nth-child(4)',{ opacity: 0, scale: 0.5, filter: "blur(10px)",})
    section_2.to('.collage img:nth-child(4)',{ opacity: 1, filter: "blur(0px)",})
    section_2.from('.collage img:nth-child(5)',{ opacity: 0, scale: 0.5, filter: "blur(10px)",})
    section_2.to('.collage img:nth-child(5)',{ opacity: 1, filter: "blur(0px)",})
    section_2.from('.collage img:nth-child(6)',{ opacity: 0, scale: 0.5, filter: "blur(10px)",})
    section_2.to('.collage img:nth-child(6)',{ opacity: 1, filter: "blur(0px)",})
    section_2.from('.collage img:nth-child(7)',{ opacity: 0, scale: 0.5, filter: "blur(10px)",})
    section_2.to('.collage img:nth-child(7)',{ opacity: 1, filter: "blur(0px)",})
    section_2.from('.collage img:nth-child(8)',{ opacity: 0, scale: 0.5, filter: "blur(10px)",})
    section_2.to('.collage img:nth-child(8)',{ opacity: 1, filter: "blur(0px)",})



});

