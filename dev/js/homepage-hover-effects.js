
var animateSpeed = 0.25;

/* ========================
    Homepage Animation B
======================== */

$("#branding-container").on("mouseenter", function(){
    //console.log("mouse enter");
    //console.log(canYouSeeTheMenu + " menu visible");
    if(brandingSectionTimeLine){
        //console.log("burger to arrow");
        brandingSectionTimeLine.play();
    }else(
        brandingSectionTimeLine.reverse()
    )
})

$("#branding-container").on("mouseleave", function(){
    if(brandingSectionTimeLine){
        //console.log("arrow to burger");
        brandingSectionTimeLine.reverse();
        
    }
})



var brandingSectionTimeLine = gsap.timeline({
    paused: true
});

brandingSectionTimeLine.addLabel("section1Opacity")
                        .to("#publishing-container, #web-container, #fineart-container",{duration:animateSpeed, Opacity: 0.3, color: "#000000"}, "animateOpacity1")
                        // .addPause()



/* ========================
    Homepage Animation P
======================== */

$("#publishing-container").on("mouseenter", function(){
    //console.log("mouse enter");
    //console.log(canYouSeeTheMenu + " menu visible");
    if(publishingSectionTimeLine){
        //console.log("burger to arrow");
        publishingSectionTimeLine.play();
    }else(
        publishingSectionTimeLine.reverse()
    )
})

$("#publishing-container").on("mouseleave", function(){
    if(publishingSectionTimeLine){
        //console.log("arrow to burger");
        publishingSectionTimeLine.reverse();
        
    }
})



var publishingSectionTimeLine = gsap.timeline({
    paused: true
});

publishingSectionTimeLine.addLabel("section2Opacity")
                        .to("#branding-container, #web-container, #fineart-container",{duration:animateSpeed, Opacity: 0.3, color: "#000000"}, "animateOpacity2")
                        // .addPause()



/* ========================
    Homepage Animation W
======================== */

$("#web-container").on("mouseenter", function(){
    //console.log("mouse enter");
    //console.log(canYouSeeTheMenu + " menu visible");
    if(webSectionTimeLine){
        //console.log("burger to arrow");
        webSectionTimeLine.play();
    }else(
        webSectionTimeLine.reverse()
    )
})

$("#web-container").on("mouseleave", function(){
    if(webSectionTimeLine){
        //console.log("arrow to burger");
        webSectionTimeLine.reverse();
        
    }
})



var webSectionTimeLine = gsap.timeline({
    paused: true
});

webSectionTimeLine.addLabel("section3Opacity")
                        .to("#branding-container, #publishing-container, #fineart-container",{duration:animateSpeed, Opacity: 0.3, color: "#000000"}, "animateOpacity3")
                        // .addPause()



/* ========================
    Homepage Animation F
======================== */

$("#fineart-container").on("mouseenter", function(){
    //console.log("mouse enter");
    //console.log(canYouSeeTheMenu + " menu visible");
    if(fineartSectionTimeLine){
        //console.log("burger to arrow");
        fineartSectionTimeLine.play();
    }else(
        fineartSectionTimeLine.reverse()
    )
})

$("#fineart-container").on("mouseleave", function(){
    if(fineartSectionTimeLine){
        //console.log("arrow to burger");
        fineartSectionTimeLine.reverse();
        
    }
})



var fineartSectionTimeLine = gsap.timeline({
    paused: true
});

fineartSectionTimeLine.addLabel("section4Opacity")
                        .to("#branding-container, #publishing-container, #web-container",{duration:animateSpeed, Opacity: 0.3, color: "#000000"}, "animateOpacity4")
                        // .addPause()