// Arrays containing qoute fragments

// Life quotes

var life_beginning = [
"Time means a lot to me because, you see, I, too, am also a learner and am often lost in the joy of forever developing and simplifying.",
"Life is like playing a violin in public",
"Lighten up, just enjoy life, smile more, laugh more,",
"What lies behind you and what lies in front of you,",
"I’m the one that’s got to die when it’s time for me to die,",
"You only live once, but if you do it right,",
"Our life is frittered away by detail.",
"Life is what happens to",
"I may not have gone where I intended",
"Sometimes the questions"
]

var life_middle = ["If you love life, don’t waste time, for time is what life is made up of.",
" and learning the instrument as one goes on.",
" and don’t get so worked up about things.",
" pales in comparison to what lies inside of you.",
" so let me live my life the way I want to.",
" once is enough.",
" Simplify, simplify.",
" us while we are making other plans.",
" to go, but I think I have ended up where I needed to be.",
" are complicated and the answers are simple."]

var life_end = ["Bruce Lee",
"Samuel Butler",
"Kenneth Branagh",
"Ralph Waldo Emerson",
"Bob Marley",
"Mae West",
"Henry David Thoreau",
"Allen Saunders",
"Douglas Adams",
"Dr. Seuss"]

// Love quotes

var love_beginning = ["If you love two people at the same time, choose the second.",
"You know you're in love when you can't fall asleep because",
"It is better to be hated for what you are",
"It is not a lack of love, but a lack of friendship",
"I would love to be a father. I had a great father who taught me how",
"In the end, the love you",
"Grief is the price",
"We waste time looking for the",
"True love comes quietly, without banners or",
"Love is that condition in which the happiness",
"A friend is someone who",
"It is better to be hated for",
"Being deeply loved by someone gives you strength,",
"Love all, trust a"]

var love_middle = [" Because if you really loved the first one, you wouldn’t have fallen for the second.",
" reality is finally better than your dreams.",
" than to be loved for what you are not.",
" that makes unhappy marriages.",
" gratifying that is. I'm not going to deny myself that. I think I'd be good at it. Everybody wants that experience. I definitely do.",
" take is equal to the love you make.",
" we pay for love.",
" perfect lover, instead of creating the perfect love.",
" flashing lights. If you hear bells, get your ears checked.",
" of another person is essential to your own.",
" knows all about you and still loves you.",
" what you are than to be loved for what you are not.",
" while loving someone deeply gives you courage.",
" few, do wrong to none."]

var love_end = [" ~ Johnny Depp",
"Dr. Seuss",
"André Gide",
"Friedrich Nietzsche",
"Mike Myers",
"Paul McCartney",
"Queen Elizabeth II",
"Tom Robbins",
"Erich Segal",
"Robert A. Heinlein",
"Elbert Hubbard",
"André Gide",
"Lao Tzu",
"William Shakespeare"]

// Method which generates quotes, based on the provided category and amount
function generateQuotes(_category, _count) {

	// Creating a random index
	var rand = _category === 'life' ? Math.floor(Math.random() * (life_beginning.length)) : Math.floor(Math.random() * (love_beginning.length));

	// Defining a variable, which is used for storing the used indexes
	var indexesUsed = [];

	// For loop, used to print the quotes
	for(var i = 1; i <= _count; i++) {
		// Check if the generated rand is in the indexesUsed array
		// if it is already in the array, generate another rand.
		while(indexesUsed.indexOf(rand) !== -1) {
			rand = _category === 'life' ? Math.floor(Math.random() * (life_beginning.length)) : Math.floor(Math.random() * (love_beginning.length));
		}

		// Used for recognition of elemnt IDs in HTML
		var id = "quote" + i;

		// Actual printing of the quotes
		// It finds the element's ID and prints out a quote (based on the entered parameters) inside the HTML element
		document.getElementById(id).innerHTML = _category === 'life' ? "<blockquote>" + life_beginning [rand] + life_middle [rand] + "<small>" + life_end[rand] + "</small></blockquote>" : "<blockquote>" + love_beginning [rand] + love_middle [rand] + "<small>" +  love_end[rand] + "</small></blockquote>";

		// This function call inserts the last used index in the indexesUsed array
		indexesUsed.push(rand);
	}
}

// This functions prints out the selected theme and the amount for the quotes
function confirm() {
	var a = "quote";
	var b = "quotes";
	var c;

	var number_value = document.getElementById('count').value;
	var type_value = document.getElementById('category').value;

	if (number_value == 1){
		var c = a;
	}
	else {
		var c = b;
	}

	if (isNaN(number_value) || type_value === "Select the qoute theme") {
	  document.getElementById("selector").innerHTML = "Please select the quote theme and the wished amount!";
  	} else {
		document.getElementById("selector").innerHTML = "You have selected " + number_value + " " + type_value + " " + c + ".";
	}
}

// Method which gathers the parameters and calls the generateQuotes method
function newQuote(){

	var category = document.getElementById("category");
	var count = document.getElementById("count");

	generateQuotes(category.options[category.selectedIndex].value, count.options[count.selectedIndex].value);
}

// Closes the program, i.e. the browser tab
function quit() {
	window.open('', '_self', '');
	window.close();
}

// Refreshes the program, i.e. the browser tab
function refresh(){
	window.location.reload();
}
