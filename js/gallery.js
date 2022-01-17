//gallery.js 
$(function(){
    /*/const swiper = new Swiper('#mainVisual > .swiper-container', {
        효과변경
        direction: 'horizontal', // 수평(기본) , 수직(vertical)
        loop: true, //반복 허용
        
        // 하단동그라미
        pagination: {
        el: '.swiper-pagination',
        width : '30px'
        },
        
       
        });*/
        
        var swiper = new Swiper("#mainVisual > .swiper-container", {
            spaceBetween: 30,
            centeredSlides: true,
            autoplay: {
              delay: 6000,
              disableOnInteraction: false,
            },
          
        
            pagination: {
              el: ".swiper-pagination",
              clickable: true,
              type: "fraction",
            },
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },
          });

        
        
})
