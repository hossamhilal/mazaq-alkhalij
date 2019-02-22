/*global $ */
$(document).ready(function ($) {
    'use strict';
    
     // SELECT PICKER
    $('select').niceSelect();

    $("body").niceScroll({
        cursorcolor: "#c83a3a",
        cursorwidth: "5",
        cursorminheight: 40,
        background: "transparent",
        cursorborder: "1px solid #c83a3a",
        cursorborderradius: 5
    });

    $(".cart-dropdown").niceScroll({
        cursorcolor: "#8bc241",
        cursorwidth: "5",
        background: "transparent",
        cursorborder: "1px solid #8bc241",
        cursorborderradius: 5
    });

    new WOW().init();
 
    // Open navbarSide when button is clicked
    $('.header-nav .btn').on('click', function () {
        $('.header-nav ul').addClass('show-sidenav');
        $('.header-nav  .over-lay').show();
    });

    // Close navbarSide when the outside of menu is clicked
    $('.header-nav  .over-lay').on('click', function () {
        $('.header-nav ul').removeClass('show-sidenav');
        $('.header-nav  .over-lay').hide();
    });


    $('.list-btn').click(function(){
        $('.product-block').addClass('full-width');
    });

    $('.box-btn').click(function () {
        $('.product-block').removeClass('full-width');
    });

    // ADD profile pic  UPLOAD IMGS 
    $(".input-file").change(function () {
        var input = (this);
        var image = $(this).siblings('.input-image');
        if (input.files && input.files[0]) {
            var reader = new FileReader();
            reader.onload = function (e) {
                image.attr('src', e.target.result);
                console.log(this);
            }
            reader.readAsDataURL(input.files[0]);
        }
    });


    

    // START NEWS CAROUSEL 
    $('.owl-carousel').owlCarousel({
        rtl:true,
        stagePadding: 50,
        navSpeed:500,
        loop:true,
        margin:10,
        nav:true,
        navText: ["<i class='icofont icofont-rounded-right'></i>", "<i class='icofont icofont-rounded-left'></i>"],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })
       


});
    

// Regular map
function regular_map() {
    var var_location = new google.maps.LatLng(24.774265, 46.738586);

    var var_mapoptions = {
        center: var_location,
        zoom: 15
    };

    var var_map = new google.maps.Map(document.getElementById("map-container"),
        var_mapoptions);

    var var_marker = new google.maps.Marker({
        position: var_location,
        map: var_map,
        title: "New York"
    });
}

// Initialize maps
google.maps.event.addDomListener(window, 'load', regular_map);
