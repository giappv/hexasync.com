/*
Template Name: Soft Themez - Software Landing Page Template
Author: Askbootstrap
Author URI: https://themeforest.net/user/askbootstrap
Version: 1.0
*/
let img_src = [
  'vendor/custom/Icons/Amazon.png',
  'vendor/custom/Icons/GoogleSheets.png',
  'vendor/custom/Icons/magento.png',
  'vendor/custom/Icons/MicrosoftDynamics.png',
  'vendor/custom/Icons/Mysql.png',
  'vendor/custom/Icons/Odoo.png',
  'vendor/custom/Icons/oracle.png',
  'vendor/custom/Icons/PointOfSales.png',
  'vendor/custom/Icons/SalesForce.png',
  'vendor/custom/Icons/SqlServer.png',
  'vendor/custom/Icons/woocommerce.png'
];
let counter = 0;  
let image_type = img_src.map(function(cuurentEl, index){ return "image" + index});
$(document).ready(function() {
"use strict";

// ===========Navbar============
$('.navbar-nav li.dropdown').hover(function() {
    $(this).find('.dropdown-menu').stop(true, true).delay(100).fadeIn(500);
}, function() {
    $(this).find('.dropdown-menu').stop(true, true).delay(100).fadeOut(500);
});

// ===========Navbar Scroll============
$(window).scroll(function() {
    var scroll = $(window).scrollTop();

    if (scroll >= 100) {
        $(".navbar").addClass("fixed-navbar inner-navbar fixed-top");
    } else {
        $(".navbar").removeClass("fixed-navbar inner-navbar fixed-top");
    }
});

// ===========Screens============
var screensslider = $(".screens");
if (screensslider) {
    screensslider.owlCarousel({
        center: true,
        items: 2,
        loop: true,
        navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"],


        responsive: {
            0: {
                items: 1,
                nav: true
            },
            800: {
                items: 2,
                nav: true
            },
        }
    });
}

// ===========Blogs Slider============
var blogslider = $(".blogs-slider");
if (blogslider.length > 0) {
    blogslider.owlCarousel({
        items: 3,


        responsive: {
            0: {
                items: 1,
                nav: false
            },
            800: {
                items: 3,
                nav: false
            },
        }
    });
}

// ===========Particles============
particlesJS("particles-js", {
    "particles": {
      "number": {
          "value": img_src.length, // No of images
          "density": {
          "enable": false,
            "value_area": 2000 // Specify area (Lesser is greater density)
          }
      },
      "color": {
          "value": "#ffffff"
      },
      "shape": {
        "type":  image_type, // Add images to particle-js
        "stroke": {
            "width": 0,
        },
        "polygon": {
          "nb_sides": 11
        }
     },
     "opacity": {
        "value": 0.4, // Adjust opactiy
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
     },
     "size": {
        "value": 30, // Adjust the image size
        "random": false,
        "anim": {
          "enable": true,
          "speed": 10,
          "size_min": 40,
          "sync": false
        }
     },
      "line_linked": {
        "enable": false,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 12,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 166.600,
          "rotateY": 2667.044497970547
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": false,
          "mode": "repulse"
        },
        "onclick": {
          "enable": false,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
});

// ===========wow============
new WOW().init();	

});