jQuery(function($){jQuery(window).bind("scroll",function(){jQuery(window).scrollTop()>200?jQuery(".main-navbar").addClass("navbar-fixed-top"):jQuery(".main-navbar").removeClass("navbar-fixed-top")}),jQuery(".aa-agents-slider").slick({dots:!1,arrows:!1,infinite:!0,speed:300,slidesToShow:4,slidesToScroll:1,autoplay:!0,autoplaySpeed:2500,responsive:[{breakpoint:1024,settings:{slidesToShow:3,slidesToScroll:3,infinite:!0,dots:!0}},{breakpoint:600,settings:{slidesToShow:2,slidesToScroll:2}},{breakpoint:480,settings:{slidesToShow:1,slidesToScroll:1}}]}),jQuery(".aa-testimonial-slider").slick({dots:!1,infinite:!0,speed:500,cssEase:"linear"}),jQuery(".aa-client-brand-slider").slick({dots:!1,arrows:!1,infinite:!0,speed:300,slidesToShow:5,slidesToScroll:1,autoplay:!0,autoplaySpeed:2500,responsive:[{breakpoint:1024,settings:{slidesToShow:4,slidesToScroll:4,infinite:!0,dots:!0}},{breakpoint:600,settings:{slidesToShow:2,slidesToScroll:2}},{breakpoint:480,settings:{slidesToShow:1,slidesToScroll:1}}]}),jQuery(".aa-top-slider").slick({dots:!1,infinite:!0,arrows:!0,speed:500,fade:!0,cssEase:"linear"}),jQuery(".aa-properties-details-img").slick({dots:!1,infinite:!0,arrows:!0,speed:500,cssEase:"linear"}),jQuery("ul.nav li.dropdown").hover(function(){jQuery(this).find(".dropdown-menu").stop(!0,!0).delay(200).fadeIn(200)},function(){jQuery(this).find(".dropdown-menu").stop(!0,!0).delay(200).fadeOut(200)}),jQuery(function(){if(jQuery("body").is(".aa-price-range")){var e=document.getElementById("aa-sqrfeet-range");noUiSlider.create(e,{range:{min:2006.01,"10%":2007.01,"20%":2008.01,"30%":2009.01,"40%":2010.01,"50%":2011.01,"60%":2012.01,"70%":2013.01,"80%":2014.01,"90%":2015.01,max:2016.09},snap:!0,connect:!0,start:[2010.01,2016.09]});var i=[document.getElementById("skip-value-lower"),document.getElementById("skip-value-upper")];e.noUiSlider.on("update",function(e,o){i[o].innerHTML=e[o]});var o=document.getElementById("aa-price-range");noUiSlider.create(o,{range:{min:0,"10%":100,"20%":200,"30%":300,"40%":400,"50%":500,"60%":600,"70%":700,"80%":800,"90%":900,max:1e3},snap:!0,connect:!0,start:[200,700]});var s=[document.getElementById("skip-value-lower2"),document.getElementById("skip-value-upper2")];o.noUiSlider.on("update",function(e,i){s[i].innerHTML=e[i]})}}),jQuery(function(){jQuery("#mixit-container").mixItUp()}),jQuery(document).ready(function(){jQuery(".fancybox").fancybox()}),jQuery(window).scroll(function(){jQuery(this).scrollTop()>300?jQuery(".scrollToTop").fadeIn():jQuery(".scrollToTop").fadeOut()}),jQuery(".scrollToTop").click(function(){return jQuery("html, body").animate({scrollTop:0},800),!1}),jQuery(window).load(function(){jQuery("#aa-preloader-area").delay(300).fadeOut("slow")}),jQuery("#aa-list-properties").click(function(e){e.preventDefault(e),jQuery(".aa-properties-nav").addClass("aa-list-view")}),jQuery("#aa-grid-properties").click(function(e){e.preventDefault(e),jQuery(".aa-properties-nav").removeClass("aa-list-view")}),jQuery(".aa-related-item-slider").slick({dots:!1,infinite:!1,speed:300,slidesToShow:4,slidesToScroll:4,responsive:[{breakpoint:1024,settings:{slidesToShow:3,slidesToScroll:3,infinite:!0,dots:!0}},{breakpoint:600,settings:{slidesToShow:2,slidesToScroll:2}},{breakpoint:480,settings:{slidesToShow:1,slidesToScroll:1}}]})});