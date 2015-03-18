
// add class for mobile safari
if(navigator.userAgent.match(/(iPod|iPhone|iPad)/) 
  && navigator.userAgent.match(/AppleWebKit/)) {
  document.getElementsByTagName('body')[0].className+=' mobile-safari'
}

// init controller
var controller = new ScrollMagic.Controller();

// build tween for intro
var contentTween = 
  TweenMax.to(
    "#intro .grid", 
    1, 
    {
      css: {
        y: 200,
        opacity:0
      }, 
      ease: Linear.easeIn
    }
  );

// create the intro scene
var scene = new ScrollMagic.Scene({
                duration: window.innerHeight,  // the scne should last for a scroll distance of 100px
                offset: 0      // start this scene after scrolling for 50px
              })
              .setTween(contentTween)
              .addTo(controller); // assign the scene to the controller
