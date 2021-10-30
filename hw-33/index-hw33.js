$('.nav-item').on('click', function() {
 let dataId = $(this).attr('data-id');
 $('.nav-item').removeClass('active');
 $(this).addClass('active');
  $('.content__item.active').animate({
    opacity: 0,
  }, {
    duration: 200,
    complete: function () {
      $('.content__item.active').hide().removeClass('active');
      $('.content__item.data-id-'+dataId).show().addClass('active').css({opacity: '1', display: 'flex'});
    }
  });
})