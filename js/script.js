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
  pagetop.click(function () {
      $('body,html').animate({
          scrollTop: 0
      }, 500); //0.5秒かけてトップへ移動
      return false;
  });

  //musicのアコーディオン
  $('.more').click(function() {
		$('.oldmusic').slideDown();
    $('.more').addClass('hidden');
	});

});
