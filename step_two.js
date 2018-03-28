

var life_beginning = ["Without deep reflection one knows","To me, having kids is the ultimate job in","We can't plan life. All",
"Friends are as companions on a journey,","To live is the rarest thing", "There are only two ways to live your life.",
"Good friends, good books,", "Life is what happens to", "I may not have gone where I intended","Sometimes the questions"]

var life_middle = [" from daily life that one exists","life. I want to be most successful"," we can do is be available",
" who ought to aid each other to persevere"," in the world. Most people", " One is as though nothing is a miracle.","and a sleepy conscience:",
" us while we are making", " to go, but I think I have ended up"," are complicated and the"]

var life_end = [" for other people. ~ Albert Einstein"," at being a good father. ~ Nick Lachey", " for it. ~ Lauryn Hill",
" in the road to a happier life. ~ Pythagoras"," exist, that is all. ~ Oscar Wilde", 
" The other is as though everything is a miracle. ~ Albert Einstein", " this is the ideal life. ~ Mark Twain"," other plans. ~ Allen Saunders",
" where I needed to be. ~ Douglas Adams"," answers are simple. ~ Dr. Seuss"]

var love_beginning = ["Men always want to be a woman's", "Throw your dreams into space like a kite, and you do not know", 
"I'm really proud to be Filipino. Filipinos are","Some think love can be measured by the amount of butterflies in their tummy. Others think love can be",
"I would love to be a father. I had a great father who taught me how", "In the end, the love you","Grief is the price","We waste time looking for the",
"True love comes quietly, without banners or", "There is only one happiness","A friend is someone who","It is better to be hated for",
"It is not a lack of love,", "Love all, trust a"]

var love_middle = [" first love - women like to be", " what it will bring back, a new life, a new", " really supportive, and I want to thank", 
" sured in bunches of flowers, or by using the words 'for ever.' But love can only truly be measured by actions. It can be a",
" gratifying that is. I'm not going to deny myself that. I think I'd","take is equal to the", " we pay for love."," perfect lover, instead of creating",
" flashing lights. If you hear bells,"," in this life, to love and"," knows all about you and still"," what you are than to be loved",
" but a lack of friendship that", " few, do wrong to"]

var love_end = [" a man's last romance. ~ Oscar Wilde", "friend, a new love, a new country. ~ Anais Nin", 
" all of them. I love them! ~ Charice Pempengco", " small thing, such as peeling an orange for a person you love because you know they don't like doing it. ~ Marian Keyes",
" be good at it. Everybody wants that experience. I definitely do. ~ Mike Myers"," love you make. ~ Paul McCartney", " ~ Queen Elizabeth II",
" the perfect love. ~ Tom Robbins"," get your ears checked. ~ Erich Segal", " be loved. ~ George Sand"," loves you. ~ Elbert Hubbard",
" for what you are not. ~ André Gide", " makes unhappy marriages. ~ Friedrich Nietzsche"," none. ~ William Shakespeare"]

var a = "quote";
var b = "quotes";
var c 


function newQuote(){
var randomNumber = Math.floor(Math.random() * (life_beginning.length));

if (document.getElementById('one', 'life').checked) {
  number_value = document.getElementById('one').value;
  	document.getElementById("quote1").innerHTML = life_beginning [randomNumber] + life_middle [randomNumber] + life_end[randomNumber];
}
if (document.getElementById('one', 'love').checked) {
  number_value = document.getElementById('one').value;
  	document.getElementById("quote1").innerHTML = love_beginning [randomNumber] + love_middle [randomNumber] + love_end[randomNumber];
}
if (document.getElementById('two', 'life').checked) {
  number_value = document.getElementById('two').value;
  document.getElementById("quote1").innerHTML = life_beginning [randomNumber] + life_middle [randomNumber] + life_end[randomNumber];
  document.getElementById("quote2").innerHTML = life_beginning [randomNumber+1] + life_middle [randomNumber+1] + life_end[randomNumber+1];	
}
if (document.getElementById('two', 'love').checked) {
  number_value = document.getElementById('two').value;
  document.getElementById("quote1").innerHTML = love_beginning [randomNumber] + love_middle [randomNumber] + love_end[randomNumber];
  document.getElementById("quote2").innerHTML = love_beginning [randomNumber+1] + love_middle [randomNumber+1] + love_end[randomNumber+1];	
}
if (document.getElementById('three', 'life').checked) {
  number_value = document.getElementById('three').value;
  document.getElementById("quote1").innerHTML = life_beginning [randomNumber] + life_middle [randomNumber] + life_end[randomNumber];
  document.getElementById("quote2").innerHTML = life_beginning [randomNumber+1] + life_middle [randomNumber+1] + life_end[randomNumber+1];
  document.getElementById("quote3").innerHTML = life_beginning [randomNumber+2] + life_middle [randomNumber+2] + life_end[randomNumber+2];
}
if (document.getElementById('three', 'love').checked) {
  number_value = document.getElementById('three').value;
  document.getElementById("quote1").innerHTML = love_beginning [randomNumber] + love_middle [randomNumber] + love_end[randomNumber];
  document.getElementById("quote2").innerHTML = love_beginning [randomNumber+1] + love_middle [randomNumber+1] + love_end[randomNumber+1];
  document.getElementById("quote3").innerHTML = love_beginning [randomNumber+2] + love_middle [randomNumber+2] + love_end[randomNumber+2];
}
if (document.getElementById('four', 'life').checked) {
  number_value = document.getElementById('four').value;
  document.getElementById("quote1").innerHTML = life_beginning [randomNumber] + life_middle [randomNumber] + life_end[randomNumber];
  document.getElementById("quote2").innerHTML = life_beginning [randomNumber+1] + life_middle [randomNumber+1] + life_end[randomNumber+1];
  document.getElementById("quote3").innerHTML = life_beginning [randomNumber+2] + life_middle [randomNumber+2] + life_end[randomNumber+2];
  document.getElementById("quote4").innerHTML = life_beginning [randomNumber+3] + life_middle [randomNumber+3] + life_end[randomNumber+3];
  }
if (document.getElementById('four', 'love').checked) {
  number_value = document.getElementById('four').value;	
  document.getElementById("quote1").innerHTML = love_beginning [randomNumber] + love_middle [randomNumber] + love_end[randomNumber];
  document.getElementById("quote2").innerHTML = love_beginning [randomNumber+1] + love_middle [randomNumber+1] + love_end[randomNumber+1];
  document.getElementById("quote3").innerHTML = love_beginning [randomNumber+2] + love_middle [randomNumber+2] + love_end[randomNumber+2];
  document.getElementById("quote4").innerHTML = love_beginning [randomNumber+3] + love_middle [randomNumber+3] + love_end[randomNumber+3];
}
if (document.getElementById('five', 'life').checked) {
  number_value = document.getElementById('five').value;
  document.getElementById("quote1").innerHTML = life_beginning [randomNumber] + life_middle [randomNumber] + life_end[randomNumber];
  document.getElementById("quote2").innerHTML = life_beginning [randomNumber+1] + life_middle [randomNumber+1] + life_end[randomNumber+1];
  document.getElementById("quote3").innerHTML = life_beginning [randomNumber+2] + life_middle [randomNumber+2] + life_end[randomNumber+2];
  document.getElementById("quote4").innerHTML = life_beginning [randomNumber+3] + life_middle [randomNumber+3] + life_end[randomNumber+3];
  document.getElementById("quote5").innerHTML = life_beginning [randomNumber+4] + life_middle [randomNumber+4] + life_end[randomNumber+4];
}
if (document.getElementById('five', 'love').checked) {
  number_value = document.getElementById('five').value;
  document.getElementById("quote1").innerHTML = love_beginning [randomNumber] + love_middle [randomNumber] + love_end[randomNumber];
  document.getElementById("quote2").innerHTML = love_beginning [randomNumber+1] + love_middle [randomNumber+1] + love_end[randomNumber+1];
  document.getElementById("quote3").innerHTML = love_beginning [randomNumber+2] + love_middle [randomNumber+2] + love_end[randomNumber+2];
  document.getElementById("quote4").innerHTML = love_beginning [randomNumber+3] + love_middle [randomNumber+3] + love_end[randomNumber+3];
  document.getElementById("quote5").innerHTML = love_beginning [randomNumber+4] + love_middle [randomNumber+4] + love_end[randomNumber+4];
}
}

function confirm(){


if (document.getElementById('one').checked) {
  number_value = document.getElementById('one').value;
}
if (document.getElementById('two').checked) {
  number_value = document.getElementById('two').value;
}
if (document.getElementById('three').checked) {
  number_value = document.getElementById('three').value;
}
if (document.getElementById('four').checked) {
  number_value = document.getElementById('four').value;
}
if (document.getElementById('five').checked) {
  number_value = document.getElementById('five').value;
}
if (document.getElementById('life').checked){
	type_value = document.getElementById('life').value;
}
if (document.getElementById('love').checked){
	type_value = document.getElementById('love').value;
}
if (number_value == 'one'){
	var c = a;
}
else {
	var c = b;
}
document.getElementById("selector").innerHTML = "You have selected " + number_value + " " + type_value + " " + c;
}

function quit() {
	window.close();
}

function refresh(){
	window.location.reload();
}