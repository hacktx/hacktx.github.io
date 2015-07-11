$( document ).ready(function() {

  animate({
    el: '#cloud1',
    translateX: '100vw',
    duration: 100000,
    easing: 'linear',
    complete: function() { 
      $('#cloud1').remove();
    }
  });

  animate({
    el: '#cloud2',
    translateX: '-100vw',
    duration: 150000,
    easing: 'linear',
    complete: function() { 
      $('#cloud2').remove();
    }
  });

  animate({
    el: '#cloud3',
    translateX: '-100vw',
    duration: 300000,
    easing: 'linear',
    complete: function() { 
      $('#cloud3').remove();
    }
  });

  animate({
    el: '#cloud4',
    translateX: '100vw',
    duration: 500000,
    easing: 'linear',
    complete: function() { 
      $('#cloud4').remove();
    }
  });
});