//$( document ).ready(function() {
//
//  var vH=$('body').height();
//  var vW=$('body').width();
//
//  var skyContainer = $("#skyContainer");
//  var cloud1 = $("#cloud1");
//  var cloud2 = $("#cloud2");
//  var cloud3 = $("#cloud3");
//  var cloud4 = $("#cloud4");
//
//  skyContainer.mousemove(function(event) {
//    var newXOffset = event.pageX / vW * -3;
//    var newYOffset = event.pageY / vH * -3;
//    cloud1.css({"left" : 4 - newXOffset + "%", "top" : 20 - newYOffset + "%"});
//    cloud2.css({"right" : 10 + newXOffset / 1.5 + "%", "top" : 20 - newYOffset /1.2 + "%"});
//    cloud3.css({"right" : 25 + newXOffset / 2.5 + "%", "top" : 10 - newYOffset /1.6 + "%"});
//    cloud4.css({"left" : 21 - newXOffset / 3 + "%", "top" : 5 - newYOffset /2 + "%"});
//  });
//});
