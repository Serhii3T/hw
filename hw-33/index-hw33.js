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
});

let bar = new ProgressBar.Circle(raiting, {
  color: '#11E095',
  // This has to be the same size as the maximum width to
  // prevent clipping
  strokeWidth: 3,
  trailWidth: 2,
  easing: 'easeInOut',
  duration: 10,
  text: {
    autoStyleContainer: false
  },
  from: { color: '#11E095', width: 3 },
  to: { color: '#11E095', width: 3 },
  // Set default step function for all animate calls
  step: function(state, circle) {
    circle.path.setAttribute('stroke', state.color);
    circle.path.setAttribute('stroke-width', state.width);

    let value = Math.abs(circle.value() * 10 - 0.000000000000001);
    if (value === 0) {
      circle.setText('');
    } else {
      circle.setText(value);
    }

  }
});
bar.text.style.fontFamily = '"Lato", sans-serif;'
bar.text.style.fontSize = '1.25rem';

bar.animate(0.780);