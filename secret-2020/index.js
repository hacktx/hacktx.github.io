function imageHover(element) {
    var currSrc = element.src; 
    const path = currSrc.indexOf('assets')
    const dotPos = currSrc.indexOf('.', path)
    var newSrc = currSrc.substring(path, dotPos) + "Hover.png" 
    console.log(newSrc)
    element.setAttribute('src', newSrc)
}

function imageHoverOut(element) {
    var currSrc = element.src; 
    const cutOut = currSrc.indexOf('Hover')
    var newSrc = currSrc.substring(0, cutOut) + currSrc.substring(cutOut + 5);
    element.setAttribute('src', newSrc)
}

// var pos=0;
// $(window).bind('mousewheel DOMMouseScroll', function(event){
//     console.log("HI")
//     if (event.originalEvent.wheelDelta <= 0 && event.originalEvent.detail >= 0) {              
//         pos=pos+50;         
//     }
//     else {
//         if (pos > 1){
//             pos=pos-50;      
//         }
//     }
//     $('#superContentContainer').scrollLeft( pos)
// });

document.addEventListener("DOMContentLoaded", function(event) {
    // - Code to execute when all DOM content is loaded. 
    // - including fonts, images, etc.
    // move hack tx title into view
    const titleRect = document.querySelector('#hacktxtitle').getBoundingClientRect();
    const contentContainer = document.querySelector('#superContentContainer');
    const contentRect = contentContainer.getBoundingClientRect()
    if (titleRect.right > contentRect.right) {
        const contentMid = (contentRect.width) / 2.0;

        const titleMid = titleRect.left + (titleRect.width / 2.0);
        console.log(contentMid);
        console.log(titleMid);
        contentContainer.scrollLeft = (titleMid - contentMid);
        
        // titleRect.right - contentContainerRight + 100;
        console.log(contentContainer.scrollLeft)
    }
    // if (navigator.userAgent.indexOf('Chrome') < 0 && navigator.userAgent.indexOf('Edge') < 0) {
    //     const parallex = document.querySelector('#parallex');
    //     parallex.style.transform = 'none';
    //     contentContainer.style.perspective = 'none';
    // }
});
