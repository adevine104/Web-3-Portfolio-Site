
gsap.registerPlugin(ScrollToPlugin);

var scrollItems =["#footer"];

console.log(scrollItems[1]);

function scrollIndex(){
    //gsap.to(window, {duration: 2, scrollTo:"#index-weather"});

    gsap.to(window, {duration: 2, scrollTo:{ y: scrollItems[$('#main-nav ul li button').index(this)], offsetY: 60}});
}

// function scrollPlanning(){
//     //gsap.to(window, {duration: 2, scrollTo:"#index-planning"});
//     gsap.to(window, {duration: 2, scrollTo:{y:"#index-planning", offsetY:60}});
// }

// function scrollWeather(){
//     gsap.to(window, {duration: 2, scrollTo:"#index-weather"});
// }