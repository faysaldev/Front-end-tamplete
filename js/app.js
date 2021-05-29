var manuBtn=$('.manu-btn');
var sidenav=$('#sidenav');
$(manuBtn).click(function (e) { 
   sidenav.slideToggle();
    
});



new WOW().init();

//gsap
gsap.from('.manu-btn',{opacity:0,duration:1,x:100});
gsap.from('.logo img',{opacity:0,duration:1,y:-300,delay:1,});
gsap.from('.heading-text',{opacity:0,duration:1,y:-300,delay:1,});
gsap.from('.common-btn',{opacity:0,duration:1,y:-300,delay:1,});
gsap.from('.line-sqer',{opacity:0,duration:1,y:-300,delay:1,});