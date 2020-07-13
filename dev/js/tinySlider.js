// console.log("tiny slider is working!");

tns({
    container: '.my-slider',
    items: 1,
    gutter: 10,
    edgePadding: 50,
    controls: false,
    controlsPosition: "bottom",
    navPosition: "bottom",
    arrowKeys: true,
    //loop: false,
    //startIndex: 2,

    // responsive: {
    //       "350": {
    //         "items": 1
    //       },
    //       "768": {
    //         "items": 2
    //       },
    //       "1440": {
    //         "items": 3
    //       }
    // }
    
    //slideBy: 'page',
    autoplay: true,
    // autoplayButton: true,
    // autoplayText: (),
    autoplayPosition: "bottom"
});