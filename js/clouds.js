$( document ).ready(function() {

  var vH=$('body').height();
  var vW=$('body').width();

  var skyContainer = $("#skyContainer");
  var cloud1 = $("#cloud1");
  var cloud2 = $("#cloud2");
  var cloud3 = $("#cloud3");
  var cloud4 = $("#cloud4");

  skyContainer.mousemove(function(event) {
    var newXOffset = event.pageX / 500;
    var newYOffset = event.pageY / 500;
    cloud1.css({"left" : 4 - newXOffset + "%", "top" : 20 - newYOffset + "%"});
    cloud2.css({"right" : 10 + newXOffset + "%", "top" : 20 - newYOffset + "%"});
    cloud3.css({"right" : 25 + newXOffset + "%", "top" : 10 - newYOffset + "%"});
    cloud4.css({"left" : 21 - newXOffset + "%", "top" : 5 - newYOffset + "%"});
  });
});


function animateCloud1_1() {
  animate({
    //100000
    el: '#cloud1',
    translateX: '5vw',
    duration: 100000,
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
    duration: 100000,
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
    duration: 150000,
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
    duration: 150000,
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
    duration: 300000,
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
    duration: 300000,
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
    duration: 50000,
    easing: 'linear',
    complete: function() {
      animateCloud4_1();
    }
  });
};
