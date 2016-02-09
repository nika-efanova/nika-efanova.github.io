$("#menubutton").click(function() {
	// change icon open/close
	/* var currentImage = $("#menubutton").attr("src");
	if (currentImage === "instagram.png") {
		$("#menubutton").attr("src", "twitter.png");
	} else if (currentImage === "twitter.png") { 
		$("#menubutton").attr("src", "instagram.png");
	} */

	// show/hide menu
	$("#total").toggle();
    
    // disable/enable scrolling
	var status = $("html, body").css("overflow");
	if (status === "visible") {
		$("html, body").css({
  		"overflow": "hidden",
  		"height": "100%"
		});
		$("nav").css({"background": "transparent"});
		$(".icon-bar:nth-child(1)").css("transform", "translate(0px, 8px) rotate(-45deg)");
		$(".icon-bar:nth-child(2)").css("height", "0");
		$(".icon-bar:nth-child(3)").css("transform", "translate(0px, 0px) rotate(45deg)");
	} else if (status === "hidden") {
		$("html, body").css({
  		"overflow": "visible",
  		"height": "auto"
		});
		$("nav").css({"background": "rgba(0,0,0,.5)"});
		$(".icon-bar:nth-child(1)").css("transform", "none");
		$(".icon-bar:nth-child(2)").css("height", "3px");
		$(".icon-bar:nth-child(3)").css("transform", "none");
	}
}); 