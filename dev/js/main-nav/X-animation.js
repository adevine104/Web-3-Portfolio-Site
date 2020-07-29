

// var XAnimationTimeLine = gsap.timeline({paused:true});
// var XAnimateSpeed = 0.25;

// //reset the transformOrigin point for each line
// gsap.set(".lines",{transformOrigin:"center"});

// //1: first is the reference to the timeline (burgerAnimationTimeLine ), 2: what do you want to animate? 3{ what properties to do you want animate?}
// XAnimationTimeLine.to("#middle-line",{duration:XAnimateSpeed,alpha:0},"XStart")
//                         .to("#top-line",{duration:XAnimateSpeed,rotation:45, y:13, stroke: "#000"},"XStart")
//                         .to("#bottom-line",{duration:XAnimateSpeed,rotation:-45, y:-13, stroke: "#000", onReverseComplete:resetBurgerLinecsolor},"XStart")
//                         .to("#right-arrow",{duration:XAnimateSpeed, alpha:0, rotation:180}, "Xtoburger")
//                         .to("#left-arrow",{duration:XAnimateSpeed, alpha:0, rotation:180}, "Xtoburger");



// function animateX(){
//     // check the  canYouSeeTheMenu bool valus
//     if(canYouSeeTheMenu === true){
//         // turn the burger into an X
//         XAnimationTimeLine.play();
//     }else{
//         // turn the X into a burger
//         XAnimationTimeLine.reverse();
//     }
// }

// function XAnimationTimeLine(){
//     if(canYouSeeTheMenu === true){
//         // turn the burger into an X
//         XAnimationTimeLine.play();
//     }else{
//         // turn the X into a burger
//         XAnimationTimeLine.reverse();
//     }
// }