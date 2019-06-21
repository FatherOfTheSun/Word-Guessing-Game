

var confirmGame = confirm('Would you like to play Hangman?');
if (confirmGame) {
    /confirming they want to play/
    var name = prompt('What is your name?');
    alert('Hello ' + name + ' lets begin');
}
else {
    alert('Have a nice day'); /if they hit cancel/
}
/Dinsey movies Array/
var words = [
    'pinocchio',
    'dumbo',
    'bambi',
    'cinderella',
    'alice in wonderland',
    'peter pan',
    'lady and the tramp',
    'sleeping beauty',
    'the jungle book',
    'the aristocats',
    'robin hood',
    'winnie the pooh',
    'the little mermaid',
    'beauty and the beast',
    'aladdin',
    'lion king',
    'pocahontas',
    'hercules',
    'mulan',
    'tarzan',
    'fantasia',
    'dinosaur',
    'the emperors new groove',
    'lilo and stitch',
    'treasure planet',
    'brother bear',
    'chicken little',
    'meet the robinsons',
    'bolt',
    'tangled',
];

var alphBet = alphaB   [
"A", 
"B", 
"C", 
"D", 
"E", 
"F", 
"G", 
"H", 
"I", 
"J", 
"K", 
"L", 
"M", 
"N", 
"O", 
"P", 
"Q", 
"R", 
"S", 
"T", 
"U", 
"V", 
"W", 
"X", 
"Y", 
"Z",
];

/picks a random name/
var word = words[Math.floor(Math.random() * words.length)];

var s;
var count = 0;
/creates spaces by setting i to _ and adding another_ till end/
var answerArray = [];

function startUp() {
    for (var i = 0; i < word.length; i++) {
        answerArray[i] = "_";
    }
    s = answerArray.join('');
    document.getElementById('answer').innerHTML = s;
}
function Letter() {
    var letter = document.getElementById('letter').value;

    if (letter.length > 0) {
        for (var i = 0; i < word.length; i++) {
            if (word[i] === letter) {
                answerArray[i] = letter;

            }

        }
        count++;
        document.getElementById('counter').innerHTML = 'No. of clicks: ' + count;
        document.getElementById('answer').innerHTML = answerArray.join('');
    }
    if (count > 5) {
        document.getElementById('stat').innerHTML = ('You got this!')

    }

    window.addEventListener('keydown', function (letter) {
        if (letter.ctrlKey && letter.keyCode == 90) {

        }

    });

    console.log(letter);
    console.log(i);





}

