$('[data-fancybox="gallery"]').fancybox({}),$(".slides").hasClass("my-slider")&&tns({container:".my-slider",items:3,gutter:10,controls:!1,controlsPosition:"bottom",navPosition:"bottom",arrowKeys:!0,responsive:{350:{items:1},768:{items:3},1440:{items:3}},autoplay:!0,autoplayText:["▶","❚❚"],autoplayPosition:"bottom"}),$(".slides2").hasClass("my-slider2")&&tns({container:".my-slider2",items:3,gutter:10,controls:!1,controlsPosition:"bottom",navPosition:"bottom",arrowKeys:!0,responsive:{350:{items:1},768:{items:3},1440:{items:3}},autoplay:!0,autoplayText:["▶","❚❚"],autoplayPosition:"bottom"}),gsap.registerPlugin(ScrollToPlugin,ScrollTrigger);const logoTimeline=gsap.timeline();gsap.set(".logos",{alpha:0,yPercent:20}),logoTimeline.to(".logos",{duration:.75,alpha:1,yPercent:0,stagger:.25}),ScrollTrigger.create({animation:logoTimeline,toggleActions:"play none none none",trigger:"#salt-logos",start:"top 60%",end:"bottom 60%"});var part2TextTimeline=gsap.timeline({});part2TextTimeline.from("#part-2-text",{duration:1,alpha:0,xPercent:-15},"start"),ScrollTrigger.create({animation:part2TextTimeline,trigger:"#part-2-container",toggleActions:"play none none none",start:"top 70%",end:"bottom 70%"});var part2PTextTimeline=gsap.timeline({});part2PTextTimeline.from("#part-2-text-P",{duration:2,alpha:0,xPercent:100},"start").from("#part-2-text-2-P",{duration:2,alpha:0,yPercent:100,delay:1.5},"start"),ScrollTrigger.create({animation:part2PTextTimeline,trigger:"#part-2-container-P",toggleActions:"play none none none",start:"top 70%",end:"bottom 70%"});var part2PImagesTimeline2=gsap.timeline({});part2PImagesTimeline2.from(".left-image-P",{duration:2,alpha:0,xPercent:-150,stagger:3},"start").from("#right-image-P",{duration:2,alpha:0,xPercent:150,delay:1.5},"start"),ScrollTrigger.create({animation:part2PImagesTimeline2,trigger:"#part-2-container-P-2",toggleActions:"play none none none",start:"top 70%",end:"bottom 70%"});var artTextTimeline=gsap.timeline({});artTextTimeline.from("#description-1-div",{duration:2,alpha:0,yPercent:30},"start"),ScrollTrigger.create({animation:artTextTimeline,trigger:"#description-1",toggleActions:"play none none none",start:"top 70%",end:"bottom 70%",scrub:1});var aboutTextTimeline=gsap.timeline({});aboutTextTimeline.from("#section-main-header-A",{duration:1.5,alpha:0,xPercent:-100},"start").from("#section-text-A",{duration:1.5,alpha:0,yPercent:100},"start"),ScrollTrigger.create({animation:aboutTextTimeline,trigger:"#section-container",toggleActions:"play none none none",start:"top 70%",end:"bottom 70%"});var aboutTextTimeline2=gsap.timeline({});aboutTextTimeline2.from("#button",{duration:2,alpha:0,yPercent:100,delay:1},"start"),ScrollTrigger.create({animation:aboutTextTimeline2,trigger:"#top-line",toggleActions:"play none none none",start:"top 70%",end:"bottom 70%"}),$("#index-home div .container-nav").on("mouseenter",(function(){$("#index-home div .container-nav").addClass("overlay"),$("#index-home div .container-nav").eq($(this).index()).removeClass("overlay")})),$("#index-home div .container-nav").on("mouseleave",(function(){$("#index-home div .container-nav").removeClass("overlay")}));var contentHeight,pinningTimeline=gsap.timeline();pinningTimeline.to(".pinning-effect",{scrollTrigger:{trigger:".pinning-effect",pin:!0,pinSpacing:!1,start:"top",end:"bottom"}}),gsap.set(".bottom",{height:0}),gsap.set(".fas",{transformOrigin:"center"}),$(".option").on("click",(function(){contentHeight=$(this).children(".bottom").find(".content").outerHeight();"true"===document.querySelector(".option").dataset.accordionToggle&&(gsap.to(".bottom",{duration:.25,height:0}),gsap.to(".fas",{duration:.1,rotation:0})),$(this).children(".bottom").height()>0?(gsap.to($(this).children(".bottom"),{duration:.25,height:0}),gsap.to($(this).children(".top").children(".fas"),{duration:.25,rotation:0})):(gsap.to($(this).children(".bottom"),{duration:.25,height:contentHeight}),gsap.to($(this).children(".top").children(".fas"),{duration:.25,rotation:180})),console.log($(this).children(".arrow"))}));var burgerAnimateSpeed=.25,burgerAnimationTimeLine=gsap.timeline({paused:!0});burgerAnimationTimeLine.addLabel("burgerToDownArrow").to("#burger",{duration:burgerAnimateSpeed,rotation:-90},"animateBurger").to("#bottom-line",{duration:burgerAnimateSpeed,y:-13},"animateBurger").to("#top-line",{duration:burgerAnimateSpeed,y:13},"animateBurger").to("#down-left-arrow",{duration:burgerAnimateSpeed,rotation:55,x:-1},"animateBurger").to("#down-right-arrow",{duration:burgerAnimateSpeed,rotation:-55,x:-1},"animateBurger").addLabel("burgerToDownArrowReverse").addPause().addLabel("downArrowToX").to("#top-line",{duration:burgerAnimateSpeed,rotation:45},"burgerToX").to("#bottom-line",{duration:burgerAnimateSpeed,rotation:-45},"burgerToX").to("#middle-line",{duration:burgerAnimateSpeed,alpha:0},"burgerToX").to("#down-left-arrow",{duration:burgerAnimateSpeed,rotation:0,alpha:0,y:13},"burgerToX").to("#down-right-arrow",{duration:burgerAnimateSpeed,rotation:0,alpha:0,y:13},"burgerToX").to("#up-left-arrow",{duration:burgerAnimateSpeed,alpha:0},"burgerToX").to("#up-right-arrow",{duration:burgerAnimateSpeed,alpha:0},"burgerToX").addLabel("downArrowToXReverse").addPause().addLabel("xToUpArrow").to("#bottom-line",{duration:burgerAnimateSpeed,rotation:0},"upArrow").to("#top-line",{duration:burgerAnimateSpeed,rotation:0},"upArrow").to("#up-left-arrow",{duration:burgerAnimateSpeed,rotation:50,alpha:1,y:-14,x:-3},"createUpArrow").to("#up-right-arrow",{duration:burgerAnimateSpeed,rotation:-50,alpha:1,y:-14,x:-3},"createUpArrow").addLabel("xToUpArrowReverse").addPause().addLabel("upArrowToBurger").to("#up-left-arrow",{duration:burgerAnimateSpeed,rotation:0,alpha:0},"backToBurger").to("#up-right-arrow",{duration:burgerAnimateSpeed,rotation:0,alpha:0},"backToBurger").to("#middle-line",{duration:burgerAnimateSpeed,alpha:1},"backToBurger").to("#top-line",{duration:burgerAnimateSpeed,y:0,rotation:0},"backToBurger").to("#bottom-line",{duration:burgerAnimateSpeed,y:0,rotation:0},"backToBurger").to("#burger",{duration:burgerAnimateSpeed,rotation:0},"backToBurger").addPause(),gsap.set("#up-left-arrow",{transformOrigin:"right center",alpha:0}),gsap.set("#up-right-arrow",{transformOrigin:"right center",alpha:0}),$("#burger").on("mouseenter",(function(){!1===canYouSeeTheMenu?(console.log("burger to arrow"),burgerAnimationTimeLine.play("burgerToDownArrow")):burgerAnimationTimeLine.play("downArrowToX")})),$("#burger").on("mouseleave",(function(){!1===canYouSeeTheMenu?(console.log("arrow to burger"),burgerAnimationTimeLine.reverse("burgerToDownArrowReverse")):burgerAnimationTimeLine.reverse("XtoUpArrowReverse")}));var canYouSeeTheMenu=!1,navHeight=$("#main-nav").outerHeight();gsap.set("#main-nav",{y:-navHeight});var mainNavTimeline=gsap.timeline({paused:!0});function hideShowMainNav(){console.log("show me the menu!"),console.log(canYouSeeTheMenu+" can you see the menu value"),!1===canYouSeeTheMenu?(burgerAnimationTimeLine.play("downArrowToX"),mainNavTimeline.play(),canYouSeeTheMenu=!0):(console.log("burger click up"),burgerAnimationTimeLine.play("upArrowToBurger"),mainNavTimeline.reverse(),canYouSeeTheMenu=!1)}mainNavTimeline.to("#main-nav",{duration:.25,y:0}),gsap.set(".lines",{transformOrigin:"center"});var menuBackground=document.querySelector("#main-nav");function reportWindowSize(){console.log("test"),!1===canYouSeeTheMenu&&(console.log("can't see the main nav"),console.log($("#main-nav").outerHeight()),navHeight=$("#main-nav").outerHeight(),gsap.set("#main-nav",{y:-navHeight}))}window.onclick=function(e){e.target==menuBackground&&hideShowMainNav()},window.addEventListener("resize",reportWindowSize),$("#burger").on("click",hideShowMainNav),gsap.registerPlugin(ScrollToPlugin);var scrollItems=["#footer"];function scrollIndex(){gsap.to(window,{duration:2,scrollTo:{y:scrollItems[$("#main-nav ul li button").index(this)],offsetY:60}})}console.log(scrollItems[1]),$("#main-nav li button").on("click",hideShowMainNav),$("#main-nav li button").on("click",scrollIndex),$(document).ready((function(){console.log("change")}));