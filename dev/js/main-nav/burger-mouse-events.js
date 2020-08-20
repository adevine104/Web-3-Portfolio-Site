
// var burgerToArrowTimeline = gsap.timeline({paused:true});
// var burgerArrowSpeed = 0.25;

// var XToArrowTimeline = gsap.timeline({paused:true});


// burgerToArrowTimeline.to("#burger",{duration:burgerArrowSpeed, rotation:-90}, "animateBurger")
//                         .to("#bottom-line",{duration:burgerArrowSpeed, y:-13}, "animateBurger")
//                         .to("#top-line",{duration:burgerArrowSpeed, y:13}, "animateBurger")
//                         .to("#left-arrow",{duration:burgerArrowSpeed, rotation:55, y:0, x:0}, "animateArrowDown")
//                         .to("#right-arrow",{duration:burgerArrowSpeed, rotation:-55, y:0, x:0}, "animateArrowDown");


// XToArrowTimeline.to("#burger",{duration:burgerArrowSpeed}, "animateArrowUp")
//                         .to("#bottom-line",{duration:burgerArrowSpeed, rotation:0, y:-13}, "animateArrowUp")
//                         .to("#top-line",{duration:burgerArrowSpeed, rotation:0, y:13}, "animateArrowUp")
//                         .to("#left-arrow",{duration:burgerArrowSpeed, rotation:135, alpha:1, y:0, x:35}, "animateArrowUp")
//                         .to("#right-arrow",{duration:burgerArrowSpeed, rotation:-135, alpha:1, y:0, x:35}, "animateArrowUp")
//                         .to("#circle",{duration: burgerAnimateSpeed, alpha:0, rotation:0, y:0, x:0}, "animateArrowUp");

// $("#burger").on("mouseenter", function(){
//     console.log("mouse enter");

//         // check the  canYouSeeTheMenu bool valus
//         if(canYouSeeTheMenu === true){
//             // turn the X into an arrow
//             XToArrowTimeline.play();
//         }else{
//             // turn the burger into a arrow
//             burgerToArrowTimeline.play();
//         }
// })



// $("#burger").on("mouseleave", function(){
//     console.log("mouse leave");

//     // check the  canYouSeeTheMenu bool valus
//     if(canYouSeeTheMenu === true){
//         // turn the arrow into an X
//         XToArrowTimeline.reverse();
//     }else{
//         // turn the arrow into a burger
//         burgerToArrowTimeline.reverse();
//     }
// })


//var burgerToArrowTimeline = gsap.timeline({paused:true});

gsap.set("#up-left-arrow",{transformOrigin:"right center", alpha:0});
gsap.set("#up-right-arrow",{transformOrigin:"right center", alpha:0});



$("#burger").on("mouseenter", function(){
    //console.log("mouse enter");
    //console.log(canYouSeeTheMenu + " menu visible");
    if(canYouSeeTheMenu === false){
        console.log("burger to arrow");
        burgerAnimationTimeLine.play("burgerToDownArrow");
    }else{
        burgerAnimationTimeLine.play("downArrowToX");
    }
})


$("#burger").on("mouseleave", function(){
    if(canYouSeeTheMenu === false){
        console.log("arrow to burger");
        burgerAnimationTimeLine.reverse("burgerToDownArrowReverse");
        
    }else{
        burgerAnimationTimeLine.reverse("XtoUpArrowReverse");
    }
})