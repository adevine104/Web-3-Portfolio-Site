// var burgerAnimationTimeLine = gsap.timeline({paused:true});
var burgerAnimateSpeed = 0.25;

// //reset the transformOrigin point for each line
// gsap.set(".lines",{transformOrigin:"center"});

// //1: first is the reference to the timeline (burgerAnimationTimeLine ), 2: what do you want to animate? 3{ what properties to do you want animate?}
// burgerAnimationTimeLine.to("#middle-line",{duration:burgerAnimateSpeed,alpha:0},"burgerStart")
//                         .to("#top-line",{duration:burgerAnimateSpeed,rotation:45, y:13, stroke: "#000"},"burgerStart")
//                         .to("#bottom-line",{duration:burgerAnimateSpeed,rotation:-45, y:-13, stroke: "#000", onReverseComplete:resetBurgerLinecsolor},"burgerStart")
//                         .to("#right-arrow",{duration:burgerAnimateSpeed, alpha:0, rotation:0, stroke: "#000"}, "burgerToX")
//                         .to("#left-arrow",{duration:burgerAnimateSpeed, alpha:0, rotation:0, stroke: "#000"}, "burgerToX")
//                         .to("#circle",{duration:burgerAnimateSpeed, alpha:1, rotation:0, y:-6.5, x:-5, stroke: "#000"}, "burgerToX");



// function animateBurger(){
//     // check the  canYouSeeTheMenu bool valus
//     if(canYouSeeTheMenu === true){
//         // turn the burger into an X
//         burgerAnimationTimeLine.play();
//     }else{
//         // turn the X into a burger
//         burgerAnimationTimeLine.reverse();
//     }
// }

// // function to change the color of hte burger lines back to red, only called on the compete timeline reverse of burgerAnimationTimeLine
// function resetBurgerLinecsolor(){
//     //change the burger lines back to red over 0.25 seconds
//     gsap.to(".lines",{duration:0.25, stroke:"#000"});
// }


// // function animateX(){
// //     // check the  canYouSeeTheMenu bool valus
// //     if(burgerAnimationTimeLine === true){
// //         // turn the burger into an X
// //         XAnimationTimeLine.play();
// //     }else{
// //         // turn the X into a burger
// //         XAnimationTimeLine.reverse();
// //     }
// // }


var burgerAnimationTimeLine = gsap.timeline({
    paused: true
});

burgerAnimationTimeLine.addLabel("burgerToDownArrow")
                        .to("#burger",{duration:burgerAnimateSpeed, rotation:-90}, "animateBurger")
                        .to("#bottom-line",{duration:burgerAnimateSpeed, y:-13}, "animateBurger")
                        .to("#top-line",{duration:burgerAnimateSpeed, y:13}, "animateBurger")
                        .to("#down-left-arrow",{duration:burgerAnimateSpeed, rotation:55, x:-1}, "animateBurger")
                        .to("#down-right-arrow",{duration:burgerAnimateSpeed, rotation:-55, x:-1}, "animateBurger")
                        .addLabel("burgerToDownArrowReverse")
                        .addPause()
                        .addLabel("downArrowToX")
                        .to("#top-line",{duration: burgerAnimateSpeed, rotation:45},"burgerToX")
                        .to("#bottom-line",{duration: burgerAnimateSpeed, rotation:-45},"burgerToX")
                        .to("#middle-line",{duration: burgerAnimateSpeed, alpha:0},"burgerToX")
                        .to("#down-left-arrow",{duration: burgerAnimateSpeed, rotation:0, alpha:0, y: 13},"burgerToX")
                        .to("#down-right-arrow",{duration: burgerAnimateSpeed, rotation:0, alpha:0, y: 13},"burgerToX")
                        .to("#up-left-arrow",{duration: burgerAnimateSpeed, alpha:0},"burgerToX")
                        .to("#up-right-arrow",{duration: burgerAnimateSpeed, alpha:0},"burgerToX")
                        .addLabel("downArrowToXReverse")
                        .addPause()
                        .addLabel("xToUpArrow")
                        .to("#bottom-line",{duration:burgerAnimateSpeed, rotation: 0}, 'upArrow')
                        .to("#top-line",{duration:burgerAnimateSpeed, rotation: 0}, 'upArrow')
                        .to("#up-left-arrow",{duration:burgerAnimateSpeed,rotation:50, alpha:1, y:-14, x:-3}, 'createUpArrow')
                        .to("#up-right-arrow",{duration:burgerAnimateSpeed,rotation:-50, alpha:1, y:-14, x:-3}, 'createUpArrow')
                        .addLabel("xToUpArrowReverse")
                        .addPause()
                        .addLabel("upArrowToBurger")
                        .to("#up-left-arrow",{duration:burgerAnimateSpeed,rotation:0, alpha:0}, 'backToBurger')
                        .to("#up-right-arrow",{duration:burgerAnimateSpeed,rotation:0, alpha:0}, 'backToBurger')
                        .to("#middle-line",{duration:burgerAnimateSpeed, alpha:1}, 'backToBurger')
                        .to("#top-line",{duration:burgerAnimateSpeed, y:0, rotation:0}, 'backToBurger')
                        .to("#bottom-line",{duration:burgerAnimateSpeed, y:0, rotation:0}, 'backToBurger')
                        .to("#burger",{duration:burgerAnimateSpeed, rotation:0}, 'backToBurger')
                        .addPause();