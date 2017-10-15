







var lastScrollY = 0,
    ticking = false,
    bgElm = document.getElementsByClassName('active-background')[0];
    speedDivider = 2;

// Update scroll value and request tick
var doScroll = function () {
    lastScrollY = window.pageYOffset;
    requestTick();
};

window.addEventListener('scroll', doScroll, false);

var requestTick = function () {
    if (!ticking) {
        window.requestAnimationFrame(updatePosition);
        ticking = true;
    }
};

var updatePosition = function () {
    var translateValue = lastScrollY / speedDivider;

    // We don't want parallax to happen if scrollpos is below 0
    if (translateValue < 0)
        translateValue = 0;

    translateY3d(bgElm, translateValue);

    // Stop ticking
    ticking = false;
};

// Translates an element on the Y axis using translate3d
// to ensure that the rendering is done by the GPU
var translateY3d = function (elm, value) {
    var translate = 'translate3d(0px,' + "-" + value + 'px, 0px)';
    elm.style['-webkit-transform'] = translate;
    elm.style['-moz-transform'] = translate;
    elm.style['-ms-transform'] = translate;
    elm.style['-o-transform'] = translate;
    elm.style.transform = translate;
};










$(function () {

    var backgrounds = document.getElementById("backgrounds").children;

    var activeBg = 0;

    setInterval(function () {


        backgrounds[activeBg].classList.remove("active-background");
        activeBg = backgrounds[activeBg + 1] != null ? +1 : 0;
        backgrounds[activeBg].classList.add("active-background");
        bgElm = document.getElementsByClassName('active-background')[0];


        //custom-parallax function
        //fixes bg position on change
        updatePosition();


    }, 6000);

});