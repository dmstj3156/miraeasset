$(function(){
    $('#gnb').on('mouseover', function(){
        $('.depth2, .nav_bg').addClass('show');
        $('header,li a,header #family-site,.icon-menu > button >i,.depth1 > li a,header h1.sub-logo')
        .addClass('show');
        
      })
  
      $('#gnb').on('mouseout', function(){
        $('.depth2, .nav_bg').removeClass('show');
      
        $('header,li a,header #family-site,.icon-menu > button >i, .depth1 > li a,header h1.sub-logo').removeClass('show');
      
       
      })
});


$(function(){
  $('#toggle').on('click', function(){
    $('.depth2, .nav_bg').addClass('show');
});

// 메인메뉴 닫기
$('.btn_close').on('click', function(){
    $('.depth2, .nav_bg').removeClass('show');
});

// PC화면으로 넘어가면 모바일 메뉴 닫기
$(window).on('resize', function(){
  var x = window.matchMedia("(min-width: 768px)");
  if(x.matches) { $('#gnb').removeClass('show');}
})
})


$(function(){
  $('.box .rank-box button.null').on('click', function(){
    $('.box .rank-box button.full, .box .rank-box button.full i ').addClass('show');
    $('.box .rank-box button.null').removeClass('show');
  })
});
