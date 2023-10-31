gsap.registerPlugin(ScrollTrigger);

gsap.from("#navbar", {
    y: -100,
    opacity: 0,
    duration: 0.2,
    delay: 0.2
})

var t1 = gsap.timeline();
t1.from(".hero-content", {
    opacity: 0,
    duration: 1,
    delay: 0.2
})

gsap.from("#boost-content", {
    y: 50,
    scale: 0.5,
    duration: 1,
    opacity: 0,
    border: 0,
})

gsap.from(".cards > *", {
    scale: 0.6,
    opacity: 0,
    y: 100,
    stagger: 0.2,
    duration: 0.5
})

gsap.from("#define-content", {
    opacity: 0,
    scale: 0.3,
    transformOrigin: "bottom right",
    duration: 0.5,
    scrollTrigger: {
        target: "#define-content",
        start: "2% 2%",
        toggleActions: "restart none restart none"
    }
})

gsap.from("#Community-container", {
    opacity: 0,
    scale: 0.1,
    transformOrigin: "bottom left",
    duration: 0.5,
    scrollTrigger: {
        target: "#Community-container",
        start: "20% 20%",
        toggleActions: "restart none restart none"
    }
})

gsap.from("#why-content > *", {
    opacity: 0,
    scale: 0.3,
    transformOrigin: "bottom right",
    stagger: 0.3,
    duration: 1,
    scrollTrigger: {
        trigger: "#why-content",
        toggleActions: "restart none none none"
    }
})

// gsap.from("#why-content > *", {
//     duration: 0.5,
//     opacity: 0,
//     stagger: 0.3,
//     scale: 0.3,
//     transformOrigin: "right bottom",
//     scrollTrigger: {
//         trigger: "#why-content > *",
//         start: "90% 90%",
//         toggleActions: "restart none restart none"
//     }
// })

var t2 = gsap.timeline();
t2.from(".boxes > *", {
    opacity: 0,
    duration: 0.1,
    stagger: 1,
    repeat: -1,
    delay: 0.1,
    scale: 0.9
})