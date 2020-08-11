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