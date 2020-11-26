gsap.registerPlugin(ScrollTrigger);

// gsap.to(".title-message1", {
//     scrollTrigger: {
//         trigger: ".title-message1",
//         toggleActions: "restart pause reverse pause",
//         start: "top center",
//         end: "bottom 100px",
//         markers: true,
//         pin: true
//     },
//     y: 400,
//     duration: 3
// });


// gsap.defaults({ease: "none", duartion:2});

const tl = gsap.timeline();
tl.from(".sticky1", {yPercent: 100})
  .from(".sticky2", {yPercent: -100})
  .from(".sticky3", {yPercent: -100})
  .from(".sticky4", {yPercent: -100});


ScrollTrigger.create({
    animation: tl,
    trigger: ".scroll-wrap",
    start: "top top",
    end: "+=4000",
    scrub: true,
    pin: true,
    anticipatePin: 1
});