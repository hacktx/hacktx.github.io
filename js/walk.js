const sprite = document.getElementById("spriteWalk")

var topConst = 45
var leftConst = 30
var midConst = -30
var rightConst = 79
var bridgeConst = -58
var lakeConst = 10
var forestConst = -88
var rightForestConst = 65
var topRockConst = -98

var topS = 45
var leftS = 27.5
var rightS = 12.5

var turn1Percentage = 10
var turn2Percentage = 15.5
var turn3Percentage = 21
var turn4Percentage = 25.8
var turn5Percentage = 39
var turn6Percentage = 45
var turn7Percentage = 49.5
var turn8Percentage = 51.8
var turn9Percentage = 57


var topstring = top+"vw"
console.log(topstring)
sprite.style.width = "7vw"
sprite.style.position = "absolute"
sprite.style.zIndex = "10"
sprite.style.top = topS + "vw"
sprite.style.left = leftS + "vw"
sprite.style.right = rightS + "vw"

var scrollpercentOriginal = 0;

window.addEventListener('scroll', () => {
    scrollPercent = getScrollPercent()
    var scrollDiff = scrollPercent - scrollpercentOriginal

    console.log(scrollPercent)

    scrollpercentOriginal=scrollPercent

    if(scrollPercent < turn1Percentage){
        topS = 3.5 * getScrollPercent() + topConst
        sprite.src = "images/spriteFront.png"
        sprite.style.left = "27.5vw"
        sprite.style.top = topS + "vw"
    }
    if(scrollPercent > turn1Percentage && scrollPercent < turn2Percentage){
        topS = 3.5 * turn1Percentage + topConst
        leftS = 9 * (getScrollPercent() - turn1Percentage) + leftConst
        sprite.src = "images/spriteRight.png"
        sprite.style.left = leftS + "vw"
        sprite.style.top = topS + "vw"
    }
    if(scrollPercent > turn2Percentage && scrollPercent < turn3Percentage){
        topS = 8 * getScrollPercent() - turn2Percentage + midConst
        leftS = 9 * (turn2Percentage - turn1Percentage) + leftConst
        sprite.src = "images/spriteFront.png"
        sprite.style.left = leftS + "vw"
        sprite.style.top = topS + "vw"
    }
    if(scrollPercent > turn3Percentage && scrollPercent < turn4Percentage){
        topS = 8 * turn3Percentage - turn2Percentage + midConst
        leftS = -15 * (getScrollPercent() - turn3Percentage) + rightConst
        sprite.src = "images/spriteLeft.png"
        sprite.style.left = leftS + "vw"
        sprite.style.top = topS + "vw"
    }
    if(scrollPercent > turn4Percentage && scrollPercent < turn5Percentage){
        topS = 8 * getScrollPercent() - turn4Percentage + bridgeConst
        leftS = -15 * (turn4Percentage - turn3Percentage) + rightConst
        sprite.src = "images/spriteFront.png"
        sprite.style.left = leftS + "vw"
        sprite.style.top = topS + "vw"
    }
    if(scrollPercent > turn5Percentage && scrollPercent < turn6Percentage){
        topS = 8 * turn5Percentage - turn4Percentage + bridgeConst
        leftS = 9 * (getScrollPercent() - turn5Percentage) + lakeConst
        sprite.src = "images/spriteRight.png"
        sprite.style.left = leftS + "vw"
        sprite.style.top = topS + "vw"
    }
    if(scrollPercent > turn6Percentage && scrollPercent < turn7Percentage){
        topS = 8 * getScrollPercent() - turn6Percentage + forestConst
        leftS = 9 * (turn6Percentage - turn5Percentage) + lakeConst
        sprite.src = "images/spriteFront.png"
        sprite.style.left = leftS + "vw"
        sprite.style.top = topS + "vw"
    }
    if(scrollPercent > turn7Percentage && scrollPercent < turn8Percentage){
        topS = 8 * turn7Percentage - turn6Percentage + forestConst
        leftS = -15 * (getScrollPercent() - turn7Percentage) + rightForestConst
        sprite.src = "images/spriteLeft.png"
        sprite.style.left = leftS + "vw"
        sprite.style.top = topS + "vw"
    }
    if(scrollPercent > turn8Percentage && scrollPercent < turn9Percentage){
        topS = 8 * getScrollPercent() - turn8Percentage + topRockConst
        leftS = -15 * (turn8Percentage - turn7Percentage) + rightForestConst
        sprite.src = "images/spriteFront.png"
        sprite.style.left = leftS + "vw"
        sprite.style.top = topS + "vw"
    }
  
})

  function getScrollPercent() {
    var h = document.documentElement, 
        b = document.body,
        st = 'scrollTop',
        sh = 'scrollHeight';
    return (h[st]||b[st]) / ((h[sh]||b[sh]) - h.clientHeight) * 100;
}