
var pinningTimeline = gsap.timeline();

pinningTimeline.to(".pinning-effect",{scrollTrigger:{
    trigger:".pinning-effect",
    pin: true,
    pinSpacing: false,
    start: "top",
    end: "bottom"
}})