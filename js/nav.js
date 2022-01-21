$(function(){
    $('.depth1').on('mouseover', function(){
        $('.depth2, .nav_bg').addClass('show');
        $('header,li a,header #family-site,.icon-menu > button >i,.depth1 > li a,header h1.sub-logo,  #toggle .fa-bars')
        .addClass('show');
        $(' #toggle .fa-bars').removeClass('show');
      })
  
      $('.depth1').on('mouseout', function(){
        $('.depth2, .nav_bg').removeClass('show');
       
        $('header,li a,header #family-site,.icon-menu > button >i, .depth1 > li a,header h1.sub-logo').removeClass('show');
      
       
      })
});
/*$(function(){
  $('.depth1 li').on('click', function(){
      $('.depth2, .nav_bg').addClass('show');
      $('header,li a,header #family-site,.icon-menu > button >i,.depth1 > li a,header h1.sub-logo,  #toggle .fa-bars')
      .addClass('show');
      $(' #toggle .fa-bars').removeClass('show');
    })
    $('gnb').focusout(function(){
      $('.depth2, .nav_bg').removeClass('show');
     
      $(' #toggle .fa-bars').removeClass('show');
    })

});*/

$(function(){
  $('#toggle').on('click', function(){
    $('#gnb').addClass('show');
    $('.depth2, .nav_bg').addClass('show');
    $('header,li a,header #family-site,.icon-menu > button >i,.depth1 > li a,header h1.sub-logo')
    .addClass('show');
    $('#gnb .container .close .btn_close, #toggle .fa-bars').addClass('show');
    
});

// 메인메뉴 닫기
$('.btn_close').on('click', function(){
    $('#gnb').removeClass('show');
    $('.depth2, .nav_bg').removeClass('show');
    $('header,li a,header #family-site,.icon-menu > button >i, .depth1 > li a,header h1.sub-logo').removeClass('show');
    $('#gnb .container .close .btn_close, #toggle .fa-bars').removeClass('show');  
});

// PC화면으로 넘어가면 모바일 메뉴 닫기
$(window).on('resize', function(){
  var x = window.matchMedia("(min-width: 768px)");
  if(x.matches) { $('#gnb').removeClass('show');}
})
})

$(function(){
  $('.toggle-depth1 li.menu').click(function(){
    // 기존의 목록을 닫음(현재 목록을 제외한 나머지 닫음)
    $('.toggle-depth1 li.menu').not(this).next().removeClass('active');
    // 현재 클릭한 목록을 열거나 닫음
    $(this).next().toggleClass('active');

    // 메뉴상태: 열림: atcive,  메뉴 닫힘: '' 
    // 아이콘의 상태: 닫힌상태 = 열림 아이콘(V), 열린상태 = 닫힘 아이콘(^)
    if($(this).next().hasClass('active')) {
      // 열렸을 때
      $('.toggle-depth1 >button').removeClass('up'); // 초기화
      $(this).find('button').addClass('up');
    } else {
      // 닫혔을 때
      $(this).find('button').removeClass('up');
    }
  });

});

$(function(){
  $('.box .rank-box button.null').on('click', function(){
    $('.box .rank-box button.full, .box .rank-box button.full i').addClass('show');
    $('.box .rank-box button.null').removeClass('show');
  })
});
$(function(){
  $('.box .rank-box button.null').on('click', function(){
      $('.box .rank-box button.full, .box .rank-box button.full i').addClass('show');
     
      
    })

    
});