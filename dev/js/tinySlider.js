// console.log("tiny slider is working!");

if( $(".slides").hasClass("my-slider") ){
  tns({
    container: '.my-slider',
    items: 3,
    gutter: 10,
    // edgePadding: 50,
    controls: false,
    controlsPosition: "bottom",
    navPosition: "bottom",
    arrowKeys: true,
    //loop: false,
    //startIndex: 2,

    responsive: {
          "350": {
            "items": 1
          },
          "768": {
            "items": 3
          },
          "1440": {
            "items": 3
          }
    },
    
    //slideBy: 'page',
    autoplay: true,
    "autoplayText": [
      "▶",
      "❚❚"
    ],
    // autoplayButton: true,
    // autoplayText: (),
    autoplayPosition: "bottom"
});
}

// console.log("tiny slider is working!");

if( $(".slides2").hasClass("my-slider2") ){
  tns({
    container: '.my-slider2',
    items: 3,
    gutter: 10,
    // edgePadding: 50,
    controls: false,
    controlsPosition: "bottom",
    navPosition: "bottom",
    arrowKeys: true,
    //loop: false,
    //startIndex: 2,

    responsive: {
          "350": {
            "items": 1
          },
          "768": {
            "items": 3
          },
          "1440": {
            "items": 3
          }
    },
    
    //slideBy: 'page',
    autoplay: true,
    "autoplayText": [
      "▶",
      "❚❚"
    ],
    // autoplayButton: true,
    // autoplayText: (),
    autoplayPosition: "bottom"
});
}
