let layer1opened = false
let layer2opened = false
let layer3opened = false
let layer4opened = false
let layer5opened = false

function reset() {
    layer1opened = false
    layer2opened = false
    layer3opened = false
    layer4opened = false
    layer5opened = false
    document.getElementById('layer2').style.marginTop = ""
    document.getElementById('layer3').style.marginTop = ""
    document.getElementById('layer4').style.marginTop = ""
    document.getElementById('layer5').style.marginTop = ""
    document.getElementById('layer6').style.marginTop = ""

}


function togglelayer1() {
    if(layer1opened){
        layer1opened=false
        document.getElementById('layer2').style.marginTop = ""
    }else{
        layer1opened=true
        document.getElementById('layer2').style.marginTop = "-120vw"}
}

function togglelayer2() {
    if(layer2opened){
        layer2opened=false
        document.getElementById('layer3').style.marginTop = ""
    }else{
        layer2opened=true
        document.getElementById('layer3').style.marginTop = "-100vw"}
}
function togglelayer3() {
    if(layer3opened){
        layer3opened=false
        document.getElementById('layer4').style.marginTop = ""
    }else{
        layer3opened=true
        document.getElementById('layer4').style.marginTop = "-85vw"}
}
function togglelayer4() {
    if(layer4opened){
        layer4opened=false
        document.getElementById('layer5').style.marginTop = ""
    }else{
        layer4opened=true
        document.getElementById('layer5').style.marginTop = "-70vw"}
}
function togglelayer5() {
    if(layer5opened){
        layer5opened=false
        document.getElementById('layer6').style.marginTop = ""
    }else{
        layer5opened=true
        document.getElementById('layer6').style.marginTop = "-50vw"}
}