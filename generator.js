

var life_beginning = ["Time means a lot to me because, you see, I, too, am also a learner and am often lost in the joy of forever developing and simplifying.",
"Life is like playing a violin in public",
"Lighten up, just enjoy life, smile more, laugh more,",
"What lies behind you and what lies in front of you,",
"I’m the one that’s got to die when it’s time for me to die,",
"You only live once, but if you do it right,",
"Our life is frittered away by detail.",
"Life is what happens to",
"I may not have gone where I intended",
"Sometimes the questions"]

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

var life_end = [" ~ Bruce Lee",
" ~ Samuel Butler",
 " ~ Kenneth Branagh",
" ~ Ralph Waldo Emerson",
" ~ Bob Marley",
" ~ Mae West",
" ~ Henry David Thoreau",
" ~ Allen Saunders",
" ~ Douglas Adams",
" ~ Dr. Seuss"]

var love_beginning = ["Men always want to be a woman's",
"Throw your dreams into space like a kite, and you do not know",
"I'm really proud to be Filipino. Filipinos are",
"Some think love can be measured by the amount of butterflies in their tummy. Others think love can be",
"I would love to be a father. I had a great father who taught me how",
"In the end, the love you",
"Grief is the price",
"We waste time looking for the",
"True love comes quietly, without banners or",
"There is only one happiness",
"A friend is someone who",
"It is better to be hated for",
"It is not a lack of love,",
"Love all, trust a"]

var love_middle = [" first love - women like to be a man's last romance.",
" what it will bring back, a new life, a new friend, a new love, a new country.",
" really supportive, and I want to thank all of them. I love them!",
" sured in bunches of flowers, or by using the words 'for ever.' But love can only truly be measured by actions. It can be a small thing, such as peeling an orange for a person you love because you know they don't like doing it.",
" gratifying that is. I'm not going to deny myself that. I think I'd be good at it. Everybody wants that experience. I definitely do.",
" take is equal to the love you make.",
" we pay for love.",
" perfect lover, instead of creating the perfect love.",
" flashing lights. If you hear bells, get your ears checked.",
" in this life, to love and be loved.",
" knows all about you and still loves you.",
" what you are than to be loved for what you are not.",
" but a lack of friendship that makes unhappy marriages.",
" few, do wrong to none."]

var love_end = [" ~ Oscar Wilde",
" ~ Anais Nin",
" ~ Charice Pempengco",
" ~ Marian Keyes",
" ~ Mike Myers",
" ~ Paul McCartney",
" ~ Queen Elizabeth II",
" ~ Tom Robbins",
" ~ Erich Segal",
" ~ George Sand",
" ~ Elbert Hubbard",
" ~ André Gide",
" ~ Friedrich Nietzsche",
" ~ William Shakespeare"]

function generateQuotes(_category, _count) {
	var rand = _category === 'life' ? Math.floor(Math.random() * (life_beginning.length)) : Math.floor(Math.random() * (love_beginning.length));
	var indexesUsed = [];
	for(var i = 1; i <= _count; i++) {
		while(indexesUsed.indexOf(rand) !== -1) {
			rand = _category === 'life' ? Math.floor(Math.random() * (life_beginning.length)) : Math.floor(Math.random() * (love_beginning.length));
		}

		var id = "quote" + i;
		document.getElementById(id).setAttribute('class', 'blockquote');
		document.getElementById(id).innerHTML = _category === 'life' ? life_beginning [rand] + life_middle [rand] + life_end[rand] : love_beginning [rand] + love_middle [rand] + love_end[rand];
		indexesUsed.push(rand);
	}
}

function newQuote(){
	var category = document.getElementById("category");
	var count = document.getElementById("count");

	generateQuotes(category.options[category.selectedIndex].value, count.options[count.selectedIndex].value);
}

function confirm(){
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

	document.getElementById("selector").innerHTML = "You have selected " + number_value + " " + type_value + " " + c + ".";

}

function quit() {
	window.close();
}

function refresh(){
	window.location.reload();
}
