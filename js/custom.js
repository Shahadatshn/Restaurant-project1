$(function(){
"use strict";

//=================== back to top 
    
var back2top = $(".back-to-top");
var html_body = $('html, body');
    back2top.on('click', function(){
    html_body.animate({scrollTop:0},1500);
});
    
//=================== sticky menu
    
$(window).on('scroll', function(){
   var scrroling = $(this).scrollTop();
    if(scrroling >150){
        $(".navbar").addClass("menu-bg");
    }
    else{
        $(".navbar").removeClass("menu-bg");
    }
    if(scrroling >50){
        back2top.fadeIn(500);
    }
    else{
        back2top.fadeOut(500);
    }
});
    
//===================smooth scrolling animation scroll js
    
var html_body = $('html, body');
$('a').on('click', function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
            html_body.animate({
                scrollTop: target.offset().top - 0
            }, 1500);
            return false;
        }
    }
});
    
//=================== chef-slider/ slider  
    
$('.chef-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed:1500,
    arrows:false,
    centerMode:true,
    centerPadding: '30px',
    autoplaySpeed: 2000,
responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2
      }
    }
  ]    
});
    
//===========counter js
$('.counter').counterUp({
    delay: 10,
    time: 1000,
});

//=============== offer-slider/ slider  
    
$('.offer-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed:1500,
    arrows:true,
    prevArrow:'.left-offer',
    nextArrow:'.right-offer',
    autoplaySpeed: 2000,
responsive: [
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2
      }
    }
  ]    
});
    
//===================wow js
    
new WOW().init();

//===================testi-slider js  
    
$('.testi-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
//    fade:true,
    speed:1500,
    arrows:false,
    autoplaySpeed: 2000,
    dots:true,
});
       
//===================spe-slider js  
    
$('.rotate-slider').carousel({
    num: 5,
    maxWidth: 450,
    maxHeight: 350,
    distance: 15,
    scale: 0.6,
    animationTime: 1000,
    showTime: 1000,
    autoPlay: true,
});
    
//===================gallery-pg-slider js 
    
$('.gal-slider').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    speed:1500,
    arrows:false,
    autoplaySpeed: 2000,
responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 1
      }
    },
//    {
//      breakpoint: 992,
//      settings: {
//        slidesToShow: 2
//      }
//    }
  ]    
});    
    
//===================blog-pg-slider js 
    
$('.blog-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed:1500,
    arrows:false,
    //centerMode:true,
    //centerPadding: '30px',
    autoplaySpeed: 2000,
responsive: [
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2
      }
    }
  ]    
});   

//=========mixitup js
    var mixer = mixitup('.port-item'); 
 
    
//=========preloader    
$(window).on('load', function(){
    $(".preloader").delay(400).fadeOut(400);
});
 
    
//=========Closes responsive menu when a scroll link is clicked
	$('.nav-link').on('click', function () {
		$('.navbar-collapse').collapse('hide');
	});

    
    
    

    
    
    
    
    
});