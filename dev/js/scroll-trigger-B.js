/* ========================
         BRANDING
======================== */

/* ========================
    Logo Animation
======================== */

const logoTimeline = gsap.timeline();

gsap.set(".logos",{alpha:0, yPercent: 20});

logoTimeline.to(".logos",{duration:0.75, alpha:1, yPercent: 0, stagger:0.25});

ScrollTrigger.create({
    animation: logoTimeline,
    toggleActions: "play none none none",
    trigger: "#salt-logos",
    start: "top 60%",
    end: "bottom 60%"
    // markers: true
    // id: "logos"
    // scrub: 1
});

/* ========================
    aside Animation
======================== */

var part2TextTimeline = gsap.timeline({});

part2TextTimeline.from("#part-2-text",{duration:1, alpha:0, xPercent: -15}, "start");

ScrollTrigger.create({
    animation: part2TextTimeline,
    // markers: true,
    trigger: "#part-2-container",
    toggleActions: "play none none none",
    //id: "logos",
    start: "top 70%",
    end: "bottom 70%"
})



/* ========================
        PUBLISHING
======================== */

/* ========================
    aside Animation
======================== */

var part2PTextTimeline = gsap.timeline({});

part2PTextTimeline.from("#part-2-text-P",{duration:2, alpha:0, xPercent: 100}, "start")
                  .from("#part-2-text-2-P",{duration:2, alpha:0, yPercent: 100, delay:1.5}, "start");

ScrollTrigger.create({
    animation: part2PTextTimeline,
    // markers: true,
    trigger: "#part-2-container-P",
    toggleActions: "play none none none",
    //id: "logos",
    start: "top 70%",
    end: "bottom 70%"
})


/* ========================
    images Animation
======================== */

var part2PImagesTimeline2 = gsap.timeline({});

part2PImagesTimeline2.from(".left-image-P",{duration:2, alpha:0, xPercent: -150, stagger:3}, "start")
                     .from("#right-image-P",{duration:2, alpha:0, xPercent: 150, delay:1.5}, "start")
                //    .from("#left-image-P-2",{duration:2, alpha:0, xPercent: -100}, "start");

ScrollTrigger.create({
    animation: part2PImagesTimeline2,
    // markers: true,
    trigger: "#part-2-container-P-2",
    toggleActions: "play none none none",
    //id: "logos",
    start: "top 70%",
    end: "bottom 70%"
    // scrub:5
})

// var part2PImagesTimeline22 = gsap.timeline({});

// part2PImagesTimeline22.from("#right-image-P",{duration:2, alpha:0, xPercent: 150}, "start");

// ScrollTrigger.create({
//     animation: part2PImagesTimeline22,
//     markers: true,
//     trigger: "#right-image-P",
//     toggleActions: "restart none none none",
//     //id: "logos",
//     start: "top 70%",
//     end: "bottom 70%"
// })


// var part2PImagesTimeline222 = gsap.timeline({});

// part2PImagesTimeline222.from("#left-image-P-2",{duration:2, alpha:0, xPercent: -150}, "start");

// ScrollTrigger.create({
//     animation: part2PImagesTimeline222,
//     // markers: true,
//     trigger: "#left-image-P-2",
//     toggleActions: "restart none none none",
//     //id: "logos",
//     start: "top 70%",
//     end: "bottom 70%"
// })



/* ========================
        FINE ART
======================== */

/* ========================
      Text Animation
======================== */

var artTextTimeline = gsap.timeline({});

artTextTimeline.from("#description-1-div",{duration:2, alpha:0, yPercent: 30}, "start");

ScrollTrigger.create({
    animation: artTextTimeline,
    // markers: true,
    trigger: "#description-1",
    toggleActions: "play none none none",
    //id: "logos",
    start: "top 70%",
    end: "bottom 70%",
    // scrub: true,
    scrub: 1
})



/* ========================
           ABOUT
======================== */

/* ========================
    Header Animation
======================== */

var aboutTextTimeline = gsap.timeline({});

aboutTextTimeline.from("#section-main-header-A",{duration:1.5, alpha:0, xPercent: -100}, "start")
                 .from("#section-text-A",{duration:1.5, alpha:0, yPercent: 100}, "start");

ScrollTrigger.create({
    animation: aboutTextTimeline,
    // markers: true,
    trigger: "#section-container",
    toggleActions: "play none none none",
    //id: "logos",
    start: "top 70%",
    end: "bottom 70%"
})


/* ========================
    text Animation
======================== */

// var aboutTextTimeline2 = gsap.timeline({});

// aboutTextTimeline2.from("#section-text-A",{duration:1.5, alpha:0, yPercent: 100}, "start");

// ScrollTrigger.create({
//     animation: aboutTextTimeline2,
//     // markers: true,
//     trigger: "#section-container",
//     toggleActions: "restart none none none",
//     //id: "logos",
//     start: "top 70%",
//     end: "bottom 70%"
// })


/* ========================
    button Animation
======================== */

var aboutTextTimeline2 = gsap.timeline({});

aboutTextTimeline2.from("#button",{duration:2, alpha:0, yPercent: 100, delay:1}, "start");

ScrollTrigger.create({
    animation: aboutTextTimeline2,
    // markers: true,
    trigger: "#top-line",
    toggleActions: "play none none none",
    //id: "logos",
    start: "top 70%",
    end: "bottom 70%"
})