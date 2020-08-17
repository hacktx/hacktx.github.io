var superContentContainer;   // #superContentContainer
var contentContainer;       // #contentContainer
var questionContainer;  // #question-container


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
    const titleRect = document.querySelector('#hacktxtitle').getBoundingClientRect();
    superContentContainer = document.querySelector('#superContentContainer');
    contentContainer = document.querySelector('#contentContainer');
    const contentRect = superContentContainer.getBoundingClientRect();
    if (titleRect.right > contentRect.right) {
        const contentMid = (contentRect.width) / 2.0;
        const titleMid = titleRect.left + (titleRect.width / 2.0);
        superContentContainer.scrollLeft = (titleMid - contentMid);
    }
    
    questionContainer = document.querySelector('#questions-container');
    const questions = document.querySelectorAll(".question");
    for (i = 0; i < questions.length; i++) {
        questions[i].addEventListener("click", function() {
          this.classList.toggle("active");
          var content = this.nextElementSibling;
          if (content.style.display === "block") {
            content.style.display = "none";
          } else {
            content.style.display = "block";
          }
          // questionContainer.style.width = 'auto';
          // questionContainer.style.width = questionContainer.scrollWidth + "px";
        });
    }
    window.onload = resizeBackground;
    window.onresize = resizeBackground;
});

function resizeBackground() {
  const els = document.querySelectorAll('.stretch-bg');
  for (const layer of els) {
    layer.style.width = (contentContainer.offsetWidth + 200) + "px";
  }
}