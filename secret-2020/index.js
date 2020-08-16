var contentContainer;   // #superContentContainer
var questionContainer;  // #question-container


// scroll horizontally on vertical scroll
function replaceVerticalScrollByHorizontal(event) {
    if (event.deltaX != 0 && Math.abs(event.deltaY) < 2) {
      return; // default scroll
    } else if (Math.abs(event.deltaY) > 0) {
      contentContainer.scroll(contentContainer.scrollLeft + event.deltaY , 0);
    }
    event.preventDefault();
}
window.addEventListener('wheel', replaceVerticalScrollByHorizontal, {passive: false});

document.addEventListener("DOMContentLoaded", function(event) {
    // move hack tx title into view if it is cut off
    const titleRect = document.querySelector('#hacktxtitle').getBoundingClientRect();
    contentContainer = document.querySelector('#superContentContainer');
    const contentRect = contentContainer.getBoundingClientRect();
    if (titleRect.right > contentRect.right) {
        const contentMid = (contentRect.width) / 2.0;
        const titleMid = titleRect.left + (titleRect.width / 2.0);
        contentContainer.scrollLeft = (titleMid - contentMid);
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
});

// function setMaxScroll(e) {
//   const maxScrollLeft = bg.offsetWidth - window.innerWidth;
//   if (e.scrollLeft > maxScrollLeft) {
//     e.scrollLeft = maxScrollLeft
//   }
// }

function imageHover(element) {
    var currSrc = element.src; 
    const path = currSrc.indexOf('assets')
    const dotPos = currSrc.indexOf('.', path)
    var newSrc = currSrc.substring(path, dotPos) + "Hover.png" 
    element.setAttribute('src', newSrc)
}

function imageHoverOut(element) {
    var currSrc = element.src; 
    const cutOut = currSrc.indexOf('Hover')
    var newSrc = currSrc.substring(0, cutOut) + currSrc.substring(cutOut + 5);
    element.setAttribute('src', newSrc)
}