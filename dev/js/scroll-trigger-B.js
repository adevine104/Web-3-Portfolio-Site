/* ========================
    Logo Animation
======================== */

const logoTimeline = gsap.timeline();

gsap.set(".logos",{alpha:0, yPercent: 100});

logoTimeline.to(".logos",{duration:0.75, alpha:1, yPercent: 0, stagger:0.25});

ScrollTrigger.create({
    animation: logoTimeline,
    toggleActions: "restart none none none",
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

// var pictureTimelineG1 = gsap.timeline({});

// pictureTimelineG1.from("part-2-image",{duration:2, alpha:0, xPercent: -200}, "start")
//                 .from("#part-2-text",{duration:2, alpha:0}, "start");

// ScrollTrigger.create({
//     animation: pictureTimelineG1,
//     //markers: true,
//     trigger: "#part-2-image",
//     toggleActions: "restart none none none",
//     //id: "logos",
//     start: "top 70%",
//     end: "bottom 70%"
// })