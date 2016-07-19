$("#menubutton").click(function() {
  $("#menu").toggleClass("hidden");
});
$("#menu a").click(function() {
	$("#menu").addClass("hidden");
});