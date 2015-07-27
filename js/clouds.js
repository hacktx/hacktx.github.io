$( document ).ready(function() {

  animateCloud1_1();

  animateCloud2_1();

  animateCloud3_1();
  animateCloud4_1();
});

function animateCloud1_1() {
  animate({
    //100000
    el: '#cloud1',
    translateX: '5vw',
    duration: 10000,
    easing: 'linear',
    complete: function() {
      animateCloud1_2();
    }
  });
};

function animateCloud1_2() {
  animate({
    //100000
    el: '#cloud1',
    translateX: '-5vw',
    duration: 10000,
    easing: 'linear',
    complete: function() {
      animateCloud1_1();
    }
  });
};

function animateCloud2_1() {
  animate({
    //100000
    el: '#cloud2',
    translateX: '-5vw',
    duration: 15000,
    easing: 'linear',
    complete: function() {
      animateCloud2_2();
    }
  });
};

function animateCloud2_2() {
  animate({
    //100000
    el: '#cloud2',
    translateX: '5vw',
    duration: 15000,
    easing: 'linear',
    complete: function() {
      animateCloud2_1();
    }
  });
};

function animateCloud3_1() {
  animate({
    //100000
    el: '#cloud3',
    translateX: '-10vw',
    duration: 30000,
    easing: 'linear',
    complete: function() {
      animateCloud3_2();
    }
  });
};

function animateCloud3_2() {
  animate({
    //100000
    el: '#cloud3',
    translateX: '10vw',
    duration: 30000,
    easing: 'linear',
    complete: function() {
      animateCloud3_1();
    }
  });
};

function animateCloud4_1() {
  animate({
    //100000
    el: '#cloud4',
    translateX: '-10vw',
    duration: 50000,
    easing: 'linear',
    complete: function() {
      animateCloud4_2();
    }
  });
};

function animateCloud4_2() {
  animate({
    //100000
    el: '#cloud4',
    translateX: '10vw',
    duration: 5000,
    easing: 'linear',
    complete: function() {
      animateCloud4_1();
    }
  });
};
