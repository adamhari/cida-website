"use strict";


window.onbeforeunload = function () { window.scrollTo(0, 0); }

$('#callToActionButton').on('click', function () {
    $('html,body').animate({
        scrollTop: $("#content").offset().top
    },
       600);
});

$('#contactUsButton').on('click', function () {
    $('html,body').animate({
        scrollTop: $("#contact").offset().top
    },
       600);
});



$(document).ready(function () {

    //force scrolling to top on refresh to avoid broken border
    $(this).scrollTop(0);

    $('.lazy').lazy();





    /* Video Lightbox */
    if (!!$.prototype.simpleLightboxVideo) {
        $('.video').simpleLightboxVideo();
    }

    /*ScrollUp*/
    if (!!$.prototype.scrollUp) {
        $.scrollUp();
    }

    /*Responsive Navigation*/
    $("#nav-mobile").html($("#nav-main").html());
    $("#nav-trigger span").on("click", function () {
        if ($("nav#nav-mobile ul").hasClass("expanded")) {
            $("nav#nav-mobile ul.expanded").removeClass("expanded").slideUp(250);
            $(this).removeClass("open");
        } else {
            $("nav#nav-mobile ul").addClass("expanded").slideDown(250);
            $(this).addClass("open");
        }
    });

    $("#nav-mobile").html($("#nav-main").html());
    $("#nav-mobile ul a").on("click", function () {
        if ($("nav#nav-mobile ul").hasClass("expanded")) {
            $("nav#nav-mobile ul.expanded").removeClass("expanded").slideUp(250);
            $("#nav-trigger span").removeClass("open");
        }
    });

    /* Sticky Navigation */
    //if (!!$.prototype.stickyNavbar) {
    //	$('#header').stickyNavbar();
    //}

    //$('#content').waypoint(function (direction) {
    //	if (direction === 'down') {
    //		$('#header').addClass('nav-solid fadeInDown');
    //	}
    //	else {
    //		$('#header').removeClass('nav-solid fadeInDown');
    //	}
    //});

});


/* Preloader and animations */
$(window).load(function () { // makes sure the whole site is loaded
    $('#status').fadeOut(); // will first fade out the loading animation
    $('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
    $('body').delay(350).css({ 'overflow-y': 'visible' });

    /* WOW Elements */
    if (typeof WOW == 'function') {
        new WOW().init();
    }

    /* Parallax Effects */
    if (!!$.prototype.enllax) {
        $(window).enllax();
    }

});
