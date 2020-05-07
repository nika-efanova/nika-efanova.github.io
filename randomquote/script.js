$(document).ready(function() {

	// RANDOM QUOTES //
	var quotes = [
		["A journey of a thousand miles begins with a single step.", "Lao Tzu"],
		["For success, attitude is equally as important as ability.", "ANONYMOUS"],
		["Life shrinks or expands in proportion to one’s courage.", "Anais Nin"],
		["We’ve all heard that a million monkeys banging on a million typewriters will eventually reproduce the entire works of Shakespeare. Now, thanks to the Internet, we know this is not true.", "Robert Wilensky"],
		["My therapist told me the way to achieve true inner peace is to finish what I start. So far I’ve finished two bags of M&Ms and a chocolate cake. I feel better already.", "Dave Barry"],
		["All our dreams can come true, if we have the courage to pursue them.", "Walt Disney"],
		["Everything in moderation, including moderation.", "Oscar Wilde"],
		["It is our choices ... that show what we truly are, far more than our abilities.", "J. K. Rowling"],
		["Fairy tales are more than true – not because they tell us dragons exist, but because they tell us dragons can be beaten.", "Neil Gaiman"],
		["A friend is someone who knows all about you and still loves you.", "Elbert Hubbard"],
		["When you judge another, you do not define them, you define yourself.", "Wayne Dyer "],
		["The human brain is a wonderful thing. It starts working the moment you are born, and never stops until you stand up to speak in public.", "George Jessel"],
		["Aerodynamically, the bumblebee shouldn’t be able to fly, but the bumblebee doesn’t know that so it goes on flying anyway.", "Mary Kay Ash"],
		["Advice is what we ask for when we already know the answer but wish we didn’t.", "Erica Jong"],
		["The scientific theory I like best is that the rings of Saturn are composed entirely of lost airline luggage.", "Mark Russell"]
	];	

	// RANDOM COLORS //
	var colors = [

		"rgba(143,79,111,1)", // light red-purple
		// "rgba(206,94,155,1)", // light purple ORIGINAL
	]
  
  // CHANGE QUOTE & COLOR FUNCTION //
	function generate() {
		// QUOTE //
		var randomNumber = Math.floor(Math.random() * quotes.length);
		var newQuote = quotes[randomNumber][0];
		var author = quotes[randomNumber][1];
		$("#newquote").text(newQuote);
		$("#author").text(author);

		// COLOR //
		var randomNumberColor = Math.floor(Math.random() * colors.length);
		var color = colors[randomNumberColor];
		var colorLowOpacity = color.substr(0, color.length - 2).concat(".05)");
		$("body").css({
			"background": color,
			"color": color
		});
		$(".button").css({
			"background": color
		});
		// $("#quotefield").css({
		// 	"background": colorLowOpacity,
		// });
		$("#quotefield").css({
			"border-color": color,
		});

		// TWEET CONTENT //
  	$("#tweetbutton").attr('href', 'https://twitter.com/intent/tweet?text=' + newQuote + " - " + author);
	};

	generate();
  
  $("#givemeaquote").on("click", generate);
});