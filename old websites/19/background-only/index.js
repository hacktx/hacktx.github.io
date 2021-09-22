var superContentContainer;   // #superContentContainer
var contentContainer;        // #contentContainer
var questionContainer;       // #question-container
var firstQuestion;           // .question (first one)


// scroll horiozontally on vertical scroll
function replaceVerticalScrollByHorizontal(event) {
    if (event.deltaX != 0 && Math.abs(event.deltaY) < 1) {
      return; // default scroll
    } else if (Math.abs(event.deltaY) > 0) {
      superContentContainer.scroll(superContentContainer.scrollLeft + event.deltaY , 0);
    }
    event.preventDefault();
}

window.addEventListener('wheel', replaceVerticalScrollByHorizontal, {passive: false});

document.addEventListener("DOMContentLoaded", function(event) {
    // move hack tx title into view if it is cut off
    superContentContainer = document.querySelector('#superContentContainer');
    contentContainer = document.querySelector('#contentContainer');
    resizeBackground();
    window.onresize = resizeBackground();
});

function resizeBackground() {

  // resize background layers if necessary
  const els = document.querySelectorAll('.stretch-bg');
  for (const layer of els) {
    layer.style.width = (contentContainer.offsetWidth + 200) + "px";
  }
}