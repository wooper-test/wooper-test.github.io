$(function(){

  //ハンバーガーメニューの表示
  $('.navToggle').on('click',function() {
    $('.navToggle, .gnav').toggleClass('show');
  });

  $('a').click(function() {
    $('.navToggle, .gnav').removeClass('show');
  });

  //メニューのスムーススクロール
  $(".scroll").click(function(event){

    event.preventDefault();

    var url = this.href;

    var parts = url.split("#");
    var target = parts[1];

    var target_offset = $("#"+target).offset();
    var target_top = target_offset.top;

    $('html, body').animate({scrollTop:target_top}, 1000);
  });

  //ページトップへ
  var pagetop = $('#page_top');
  pagetop.hide();
  $(window).scroll(function () {
      if ($(this).scrollTop() > 100) {  //100pxスクロールしたら表示
          pagetop.fadeIn();
      } else {
          pagetop.fadeOut();
      }
  });
  $('a[href^="#"]').click(function(){
    var time = 500;
    var href= $(this).attr("href");
    var target = $(href == "#" ? 'html' : href);
    var distance = target.offset().top;
    $("html, body").animate({scrollTop:distance}, time, "swing");
    return false;
  });

  //musicのアコーディオン
  $('.more').click(function() {
		$('.oldmusic').slideDown();
    $('.more').addClass('hidden');
	});

});
