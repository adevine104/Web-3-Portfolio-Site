
//var animateSpeed = 0.25;

//var $navList = $(".container-nav");

console.log($(".container-nav").get(1));

var navArray = ["#branding-container","#publishing-container","#web-container","fineart-container"];

$(".container-nav").on("mouseenter", function(){
    //console.log($(this).index());

    var tempIndex = $(this).index();

    for( var i = 0; i < $(".container-nav").length; i++ ){
        //console.log(i);
        if(i === $(this).index()){

            //console.log($(this).index() + " is the index valuye inside of loop");

            //console.log("add class for " + i);

            //console.log($(".container-nav").index(this) + " is the index value");
            //$(navArray)[$(".container-nav").index(this)].addClass("box-shadow");
            //$(".container-nav").index(this).addClass("box-shadow");

            
        }
    }
    
});

$(".container-nav").on("mouseleave", function(){
    //console.log($(this).index());

    //$(".container-nav").removeClass("box-shadow");

    
});




// $("#branding-container").on("mouseenter", function () {
//     // console.log("animate");
//     brandingSectionTimeLine.play();
// });
// $("#branding-container").on("mouseleave", function () {
//     // console.log("animate");
//     brandingSectionTimeLine.reverse()
// });

// var sections = ["#branding-container, #publishing-container, #web-container, #fineart-container"];

// var brandingSectionTimeLine = gsap.timeline({
//     paused: true
// });

// brandingSectionTimeLine.addLabel("section1Opacity")
//                         .to(sections,{duration:animateSpeed, Opacity: 0.3}, "animateOpacity1")
//                         // .addPause()










// /* ========================
//     Homepage Animation B
// ======================== */

// $("#branding-container").on("mouseenter", function(){
//     //console.log("mouse enter");
//     if(brandingSectionTimeLine){
//         brandingSectionTimeLine.play();
//     }else(
//         brandingSectionTimeLine.reverse()
//     )
// })

// $("#branding-container").on("mouseleave", function(){
//     if(brandingSectionTimeLine){
//         brandingSectionTimeLine.reverse();
//     }
// })



// var brandingSectionTimeLine = gsap.timeline({
//     paused: true
// });

// brandingSectionTimeLine.addLabel("section1Opacity")
//                         .to("#publishing-container, #web-container, #fineart-container",{duration:animateSpeed, Opacity: 0.3}, "animateOpacity1")
//                         // .addPause()



// /* ========================
//     Homepage Animation P
// ======================== */

// $("#publishing-container").on("mouseenter", function(){
//     //console.log("mouse enter");
//     if(publishingSectionTimeLine){
//         publishingSectionTimeLine.play();
//     }else(
//         publishingSectionTimeLine.reverse()
//     )
// })

// $("#publishing-container").on("mouseleave", function(){
//     if(publishingSectionTimeLine){
//         publishingSectionTimeLine.reverse();
//     }
// })



// var publishingSectionTimeLine = gsap.timeline({
//     paused: true
// });

// publishingSectionTimeLine.addLabel("section2Opacity")
//                         .to("#branding-container, #web-container, #fineart-container",{duration:animateSpeed, Opacity: 0.3}, "animateOpacity2")
//                         // .addPause()



// /* ========================
//     Homepage Animation W
// ======================== */

// $("#web-container").on("mouseenter", function(){
//     //console.log("mouse enter");
//     if(webSectionTimeLine){
//         webSectionTimeLine.play();
//     }else(
//         webSectionTimeLine.reverse()
//     )
// })

// $("#web-container").on("mouseleave", function(){
//     if(webSectionTimeLine){
//         webSectionTimeLine.reverse();
//     }
// })



// var webSectionTimeLine = gsap.timeline({
//     paused: true
// });

// webSectionTimeLine.addLabel("section3Opacity")
//                         .to("#branding-container, #publishing-container, #fineart-container",{duration:animateSpeed, Opacity: 0.3}, "animateOpacity3")
//                         // .addPause()



// /* ========================
//     Homepage Animation F
// ======================== */

// $("#fineart-container").on("mouseenter", function(){
//     //console.log("mouse enter");
//     if(fineartSectionTimeLine){
//         fineartSectionTimeLine.play();
//     }else(
//         fineartSectionTimeLine.reverse()
//     )
// })

// $("#fineart-container").on("mouseleave", function(){
//     if(fineartSectionTimeLine){
//         fineartSectionTimeLine.reverse();
        
//     }
// })



// var fineartSectionTimeLine = gsap.timeline({
//     paused: true
// });

// fineartSectionTimeLine.addLabel("section4Opacity")
//                         .to("#branding-container, #publishing-container, #web-container",{duration:animateSpeed, Opacity: 0.3}, "animateOpacity4")
//                         // .addPause()