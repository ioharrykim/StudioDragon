(function($){
$(document).ready(function(){
console.log("jQuery Load");
// 준비 

$(window).scroll(function(){
    const scrollTop = $(window).scrollTop();
    // console.log(parseInt(scrollTop));
    // console.log($(".key-container").offset().top);

    $(".content").each(function(){
    let offset1 = (scrollTop - $(this).offset().top) * 0.1;
    let offset2 = (scrollTop - $(this).offset().top) * 0.2;
    

    /* SEC - OVERVIEW */
    if(scrollTop >= $(".title-overview").offset().top){
        $(this).find(".title-overview").css({ "transform": "translateY(" + -offset2 + "px)" });
        $(this).find(".overview-slogan").css({ "transform": "translateY(" + offset1 + "px)" });
        $(this).find(".overview-sum").css({ "transform": "translateY(" + -offset2 + "px)" });
        $(this).find(".overview-image").css({ "transform": "translateY(" + offset1 + "px)" });
    }

    if(scrollTop >= $(".overview-slogan").offset().top){
        $(".key-box").animate({
            height: "131px"
        }, 2000, "easeInOutBack");
    }

    /* SEC - KEY */
    if(scrollTop >= $(".key-container").offset().top - 300){
        $(".solid-bar").animate({
            opacity: 100,
            width: "36em"
        }, 1500, "easeInOutQuint");
    }

    /* SEC - MOTIF */
    if(scrollTop >= $("#sec-motif1").offset().top - 300){
        $(".circle1").fadeIn();
        $(".circle2").fadeIn();
        
    }else{
        $(".circle1").fadeOut();
        $(".circle2").fadeOut();
    }
    if(scrollTop >= $("#sec-motif2").offset().top - 300){
        $(".square1").fadeIn();
    }else{
        $(".square1").fadeOut();
    }

    /* SEC - LOGO */
    if(scrollTop >= $("#sec-logo").offset().top - 300){
        svgIn();
        // svgOut();
        // $.queue(svgIn().queue(svgOut());
        // setTimeout(function(){
        //     $(".logo1").fadeIn(1000);
        // },5000);


        // var tl = gsap.timeline({smoothChildTiming: "true"});
        // tl.to(".circle", {opacity: 100, duration: 1, ease: "sine"});
        // tl.to(".square", {opacity: 100, duration: 0.8, delay: -1, ease: "sine"});
        // tl.to(".logo1", {opacity: 100, duration: 1.5, delay: 3, ease: "sine"});
        // tl.to(".square", {opacity: 0, duration: 1, delay: -2.5});
        // tl.to(".circle", {opacity: 0, duration: 1, delay: -2.5});
        // tl.to(".logo1", {opacity: 0, duration: 1.5, delay: 1, ease: "sine"});
        // tl.to(".logo2", {opacity: 100, duration: 1, delay: 0, ease: "sine"});

        // gsap.timeline()
        // .from(".square", {opacity:100})
        // .from(".circle", {opacity:100})
    }

    function svgIn(){
        setTimeout(function(){
            $(".square").fadeIn();
        },600);
        setTimeout(function(){
            $(".circle").fadeIn();
        },2000);
        setTimeout(function(){
            $(".square").fadeOut();
        },4400);
        setTimeout(function(){
            $(".circle").fadeOut();
        },4400);
        setTimeout(function(){
            $(".logo1").animate({
                opacity: 100
            }, 3000, "easeInOutQuint");
        },4000);
        setTimeout(function(){
            $(".logo-f").animate({
                opacity: 100
            }, 3000, "easeInOutQuint");
        },4000);
        setTimeout(function(){
            $(".logo-f").animate({
                opacity: 0
            }, 3000, "easeInOutQuint");
        },4000);
        setTimeout(function(){
            $(".logo1").fadeOut();
        },4000);
        setTimeout(function(){
            $(".logo2").animate({
                opacity: 100
            }, 3000, "easeInOutQuint");
        },7000);
        setTimeout(function(){
            $(".logo-s").animate({
                opacity: 100
            }, 3000, "easeInOutQuint");
        },7000);
    }

    /* SEC - COLOR */
    if(scrollTop >= $("#sec-color").offset().top - 400){
        $(".redline").animate({
            width: "100%"
        }, 1500, "easeInOutQuint");
        setTimeout(function(){
            $(".color-container").animate({
                opacity: 100
            }, 1500, "easeInOutQuint");
        }, 500);
        setTimeout(function(){
            $(".c-white").animate({
                opacity: 100
            }, 2000, "easeInOutQuint");
        }, 1500);
        setTimeout(function(){
            $(".c-black").animate({
                width: "59em"
            }, 2000, "easeInOutQuint");
        }, 1800);
        setTimeout(function(){
            $(".colorvalue .bl").animate({
                opacity: 100
            }, 2000, "easeInOutQuint");
        }, 1800);
        setTimeout(function(){
            $(".colorvalue .bl").animate({
                opacity: 100
            }, 2000, "easeInOutQuint");
        }, 1800);
        setTimeout(function(){
            $(".c-red").animate({
                opacity: 100
            }, 2000, "easeInOutQuint");
        }, 2200);
    }

    /* SEC - TYPE */
    if(scrollTop >= $("#sec-type").offset().top - 400){
        $(".type-container").animate({
            opacity: 100
        }, 1500, "easeInOutQuint");
        setTimeout(function(){
            $(".lang-sum h4").animate({
                opacity: 100
            }, 2000, "easeInOutQuint");
        }, 1000);
        setTimeout(function(){
            $(".lang-sum h5").animate({
                opacity: 100
            }, 2000, "easeInOutQuint");
        }, 1500);
        setTimeout(function(){
            $(".lang-sum h6").animate({
                opacity: 100
            }, 2000, "easeInOutQuint");
        }, 2000);
    }

    /* SEC - MOCKUP1 */
    if(scrollTop >= $("#sec-mockup1").offset().top - 400){
        $(".mockup1-container").stop().animate({
            opacity: 100
        }, 1500, "easeInOutQuint");
    }

    /* SEC - NEW */
    if(scrollTop >= $("#sec-new").offset().top - 400){
        $(".new-container").stop().animate({
            opacity: 100
        }, 1500, "easeInOutQuint");

        /* redline1 */
        setTimeout(function(){
            $(".redline1").stop().animate({
                opacity: 100,
                width: "35vw"
            }, 1500, "easeInOutQuint");
        }, 1600);

        setTimeout(function(){
            $(".founded h6").stop().animate({
                opacity: 100
            }, 1500, "easeInOutQuint");
        }, 1800);
        setTimeout(function(){
            $(".founded p").stop().animate({
                opacity: 100
            }, 1500, "easeInOutQuint");
        }, 1900);


        /* redline2 */
        setTimeout(function(){
            $(".redline2").stop().animate({
                opacity: 100,
                width: "55vw"
            }, 1500, "easeInOutQuint");
        }, 2500);


        /* redline3 */
        setTimeout(function(){
            $(".redline3").stop().animate({
                opacity: 100,
                width: "55vw"
            }, 1500, "easeInOutQuint");
        }, 3200);

        
        setTimeout(function(){
            $(".ttww h6").stop().animate({
                opacity: 100
            }, 1500, "easeInOutQuint");
        }, 3400);
        setTimeout(function(){
            $(".ttww p").stop().animate({
                opacity: 100
            }, 1500, "easeInOutQuint");
        }, 3500);

        

        /* redline2 */
        setTimeout(function(){
            $(".redline4").animate({
                opacity: 100,
                width: "35vw"
            }, 1500, "easeInOutQuint");
        }, 4100);
        
        // function numberUp(x) {
        //     return x.toString().replace();
        // }
    }

/* SEC-OVERVIEW */
// $(this).find(".title-overview").css({ "transform": "translateY(" + -offset2 + "px)" });
// $(this).find(".oveview-slogan").css({ "transform": "translateY(" + offset1 + "px)" });
// $(this).find(".overview-sum").css({ "transform": "translateY(" + -offset2 + "px)" });
// $(this).find(".overview-image").css({ "transform": "translateY(" + offset1 + "px)" });


/* SEC-KEY */
// $(this).find(".key-1").css({ "transform": "translateY(" + offset2 + "px)" });
// $(this).find(".key-1-sum").css({ "transform": "translateY(" + -offset1 + "px)" });
// $(this).find(".solid-bar").css({ "transform": "translateY(" + offset2 + "px)" });
// $(this).find(".key-2-sum").css({ "transform": "translateY(" + -offset1 + "px)" });


// else{
//     $(".solid-bar").animate({
//         width: "0"
//     }, 2000, "easeInOutQuint");
// }

    });
});
});

// let scrollTop = $(window).scrollTop();
// console.log(scrollTop);

// if (scrollTop >= 2100) {
    // $(".solid-bar").animate({
    //     width: "50em"
    // }, 2000, "easeInOutQuint");
// }


})(jQuery);

