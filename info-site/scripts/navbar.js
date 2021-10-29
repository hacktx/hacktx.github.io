/* only execute this script when the document is ready */
$(document).ready(function(){
    checkSize();

    $("button").click(function(){
        if($("button").text() == "☰"){
        $("button").text("X");
        }else{
        $("button").text("☰");
        }
    
        $("li").toggle();
    });

    $(window).resize(checkSize);
});

function checkSize(){
    if ($(window).width() >= 1000){	
		$("li").show()
	}else{
        $("li").hide()
    }
}