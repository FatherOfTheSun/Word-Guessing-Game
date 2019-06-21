


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
var lives = 3;
var words = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "q",
    "p",
    "o",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
];


/picks a random name/
var word = words[Math.floor(Math.random() * words.length)];

var anwSir;
var count = 0;
/creates spaces by setting i to _ and adding another_ till end/
var answerArray = [];

function startUp() {
    for (var i = 0; i < word.length; i++) {
        answerArray[i] = "_";
    }
    s = answerArray.join('');
    document.getElementById('answer').innerHTML = anwSir;
}
function Letter() {
    var letter = document.getElementById('letter').value;

    if (letter.length > 0) {
        for (var i = 0; i < word.length; i++) {
            if (word[i] === letter) {
                answerArray[i] = letter;
                break;

            }

        }
        count++;
        document.getElementById('counter').innerHTML = 'No. of clicks: ' + count;
        document.getElementById('answer').innerHTML = answerArray.join('');



        document.getElementById('stat').innerHTML = ('Maybe next Time!');

    }
    document.getElementById('chosen').innerHTML = letter + "";
}











console.log(letter);
console.log(i);
