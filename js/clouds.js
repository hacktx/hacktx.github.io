$( document ).ready(function() {
  animate({
    el: '.cloud1',
    translateX: '100vw',
    duration: 90000,
    easing: 'linear',
    complete: function() { 
      $('.cloud1').remove();
    }
  });
});