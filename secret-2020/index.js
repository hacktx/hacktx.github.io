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

var pos=0;
$(window).bind('mousewheel DOMMouseScroll', function(event){
    if (event.originalEvent.wheelDelta <= 0 && event.originalEvent.detail >= 0) {              
        pos=pos+50;         
    }
    else {
        if (pos > 1){
            pos=pos-50;      
        }
    }
    $('#superContentContainer').scrollLeft( pos)
});
